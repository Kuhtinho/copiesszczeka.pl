import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Kontakt = () => {
  const email = "sabaj.kamola@gmail.com";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lavender blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6">
                Kontakt
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/80 leading-relaxed">
                Masz pytanie? Skontaktuj się z nami.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                action={`https://formsubmit.co/${email}`}
                method="POST"
                name="contact"
                className="space-y-6 bg-background rounded-2xl p-8 shadow-soft"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Redirect after submit */}
                <input type="hidden" name="_next" value="/kontakt?success=true" />
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg sm:text-xl font-semibold">
                    Twój Email:
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="text-lg sm:text-xl h-12"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-lg sm:text-xl font-semibold">
                    Temat:
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Napisz, w czym możemy Ci pomóc"
                    required
                    className="text-lg sm:text-xl h-12"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg sm:text-xl font-semibold">
                    Twoja wiadomość:
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Napisz swoją wiadomość..."
                    required
                    className="text-lg sm:text-xl resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Wyślij wiadomość
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;

