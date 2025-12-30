import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, GraduationCap, Heart, ArrowRight } from "lucide-react";

const appointmentTypes = [
  {
    icon: MapPin,
    title: "Spacery socjalizacyjne",
    description: "Zapisz się na spacery socjalizacyjne dla Twojego psa.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7e7a0x8RC8O8_N5Umttxpo0Qp4cboQ417rUyNsh2SOzqRcg/viewform"
  },
  {
    icon: GraduationCap,
    title: "Zajęcia szkoleniowe",
    description: "Zapisz się na zajęcia szkoleniowe z posłuszeństwa.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfQ_FJaNwecjUIJHcMySICQXKWMAApKBShNeMLJ_kfXKiegtA/viewform"
  },
  {
    icon: Heart,
    title: "Konsultacje",
    description: "Umów się na indywidualną konsultację behawioralną.",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfv-n2ver7WlcAkRX_nv_97mVR_wJ8JqpPQu80oXgTp7AiuMQ/viewform"
  },
];

const UmowSpotkanie = () => {
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Umów spotkanie
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Wybierz rodzaj zajęć, które Cię interesują i wypełnij odpowiedni formularz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Appointment Types Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-8">
              {appointmentTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-background rounded-2xl p-8 transition-all duration-300 hover:scale-105 flex flex-col h-full"
                >
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="w-20 h-20 bg-lavender/30 rounded-xl flex items-center justify-center mb-6">
                      <type.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4">
                      {type.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {type.description}
                    </p>
                  </div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full group mt-auto"
                    onClick={() => window.open(type.formUrl, '_blank')}
                  >
                    Zapisz się
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UmowSpotkanie;

