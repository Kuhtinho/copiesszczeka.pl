import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle } from "lucide-react";
import noseworkImg from "@/assets/nosework.jpg";

const Nosework = () => {
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
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-lavender/30 rounded-xl flex items-center justify-center">
                  <Search className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Nosework
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Nosework to fascynująca dyscyplina, która wykorzystuje naturalne zdolności węchowe psa. Idealna dla psów w każdym wieku i o różnym poziomie aktywności.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <img
                  src={noseworkImg}
                  alt="Nosework"
                  className="w-full h-[500px] object-contain rounded-2xl"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-background rounded-2xl p-8 shadow-soft"
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                  NOSEWORK PODSTAWY
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nosework to sport polegający na detekcji trzech zapachów. Psio ludzkie zespoły wspólnie szukają próbek. Głównym detektywem jest psi nos. Jest to forma spełnienia psich potrzeb związanych z rasą, a także potrzeby eksploracji oraz potrzeb socjalnych.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Zajęcia skierowane są zarówno dla szczeniąt (po 5 miesiącu życia) jak i psów dorosłych. Kursy prowadzone są w grupach – maksymalnie 3 zespoły uczestników. Kurs składa się z 5 godzin zajęć, na ogrodzonym placu, na Wawrze.
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Poznasz z nami fundamenty pracy w noseworku:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "wprowadzenie rutyny startowej",
                    "detekcja zapachów: kory cynamonu, goździka i suszonej skórki pomarańczy",
                    "nauka oznaczania zapachu",
                    "spowalniamy proces starzenia stymulując także psi umysł",
                    "budowanie motywacji i metodycznej pracy"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  W ramach kursu:
                </h3>
                <ul className="space-y-3">
                  {[
                    "nauczysz swojego psa nowych umiejętności",
                    "pogłębisz relację z psem",
                    "stymulujemy psie nosy",
                    "spowalniamy proces starzenia stymulując także psi umysł",
                    "otrzymacie instrukcje do indywidualnej pracy w domowym zaciszu"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-forest-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-lavender blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                Gotowy na zmianę?
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Skontaktuj się z nami, aby omówić potrzeby Twojego psa i znaleźć najlepsze rozwiązanie.
              </p>
              <Link to="/umow-spotkanie">
                <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Umów spotkanie
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosework;

