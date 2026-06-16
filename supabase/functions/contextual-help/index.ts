// @ts-nocheck
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { context } = await req.json();

    const systemPrompt = `You are a contextual AI help layer inside a digital product (Sendesaal Bremen — a concert hall website). Your job is to replace generic tutorials and static tooltips with short, useful, screen-aware guidance.

You will receive a JSON context object from the product. Use only the available context. Do not ask the user for missing information. If something is unknown, make the safest useful assumption.

Generate help for the exact UI element or state the user is focused on. Respond in German.

Return ONLY valid JSON in this exact format (no markdown, no code fences):
{
  "title": "Kurzer Titel",
  "tooltip": "Kurzer Tooltip unter 20 Wörtern",
  "expanded_help": "Hilfreiche Erklärung unter 40 Wörtern",
  "suggested_action": "Eine kurze nächste Aktion",
  "confidence": "high"
}

Rules:
- Be specific to the current screen and user situation.
- Do not sound like documentation.
- Do not mention AI.
- Keep messages short enough for a real product UI.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Context: ${JSON.stringify(context)}` },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return new Response(JSON.stringify({ error: "ai_gateway_error", status: res.status, detail: txt }), {
        status: res.status === 429 || res.status === 402 ? res.status : 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? "{}";
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = { title: "Hinweis", tooltip: content, expanded_help: "", suggested_action: "", confidence: "low" };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});