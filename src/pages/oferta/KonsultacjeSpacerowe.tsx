import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";
import konsSpacerImg from "@/assets/kons_spacer.jpeg";

const KonsultacjeSpacerowe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
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
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Konsultacje spacerowe
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Indywidualne konsultacje spacerowe pomagające rozwiązać problemy pojawiające się podczas spacerów z psem. Nauczysz się, jak wspierać swojego psa w trudnych momentach.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <img
                  src={konsSpacerImg}
                  alt="Konsultacje spacerowe"
                  className="w-full h-[500px] object-contain rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-background rounded-2xl p-8 shadow-soft"
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                  Konsultacje spacerowe
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Dzięki zdobytej i zastosowanej wiedzy, Wasze codzienne spacery staną się przyjemniejsze i bardziej zrozumiałe dla obu stron. Nauczysz się także, jak wspierać swojego psa w trudnych momentach.
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Zajęcia skierowane są dla psów, które:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "mają problemy w kontaktach z innymi psami",
                    "chcą lepiej rozumieć się ze swoim człowiekiem",
                    "nie mają zbyt wielu (dobrych) doświadczeń w kontaktach z innymi psami (np. szczeniaki, psy schroniskowe)",
                    "emocjonalnie reagują na widok innych psów"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Konsultacje spacerowe trwają około 1 godzinę i odbywają się w formie spotkań indywidualnych z trenerem. Podczas spaceru trener analizuje zachowanie psa, ocenia jego potrzeby i dobiera odpowiednie strategie pracy, a w razie potrzeby także przyszłych towarzyszy do dalszych spotkań.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
                  Miejsce oraz termin spaceru ustalane są indywidualnie, w zależności od potrzeb psa i opiekuna.
                </p>
                </motion.div>
            </div>
          </div>
        </section>

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

export default KonsultacjeSpacerowe;

