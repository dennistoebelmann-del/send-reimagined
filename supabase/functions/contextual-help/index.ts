import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are a contextual AI help layer inside a digital product. Your job is to replace generic tutorials and static tooltips with short, useful, screen-aware guidance.

You will receive a JSON context object from the product. Use only the available context. Do not ask the user for missing information. If something is unknown, make the safest useful assumption. Generate help for the exact UI element or state the user is focused on.

Return only valid JSON in this format:
{
  "title": "Short title for the tip",
  "tooltip": "Short tooltip under 20 words",
  "expanded_help": "Helpful explanation under 40 words",
  "suggested_action": "One short next action",
  "confidence": "high | medium | low"
}

Rules:
- Be specific to the current screen and user situation.
- Do not sound like documentation.
- Do not mention AI.
- Do not say "based on your data."
- Avoid jargon unless the user appears advanced.
- Keep the message short enough to fit inside a real product UI.
- If the user made an error, explain the fix clearly.
- If the user is inactive or hesitating, reduce friction.
- Reply in the same language as the surrounding UI text (German if the context is German).`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { context } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("Missing LOVABLE_API_KEY");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: "Context:\n" + JSON.stringify(context, null, 2) },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(
        JSON.stringify({ error: "AI gateway error", status: res.status, detail: text }),
        { status: res.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await res.json();
    const raw = data?.choices?.[0]?.message?.content ?? "{}";
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { title: "Tipp", tooltip: raw, expanded_help: "", suggested_action: "", confidence: "low" };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});