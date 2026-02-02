import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Erfolgreich angemeldet!",
      description: "Vielen Dank für Ihre Anmeldung zum Newsletter.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
              Immer informiert
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Erhalten Sie exklusive Einblicke, Programmvorschauen und besondere Angebote direkt in Ihr Postfach.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-6 bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide"
            >
              {isLoading ? (
                "Wird gesendet..."
              ) : (
                <>
                  Anmelden
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Mit der Anmeldung stimmen Sie unserer Datenschutzerklärung zu. 
            Abmeldung jederzeit möglich.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
