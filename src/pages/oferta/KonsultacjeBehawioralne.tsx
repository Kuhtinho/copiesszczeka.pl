import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle } from "lucide-react";
import konsultBehImg from "@/assets/konsult_beh.jpeg";

const KonsultacjeBehawioralne = () => {
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
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Konsultacje behawioralne
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Indywidualne konsultacje z behawiorystką pomagające rozwiązać problemy wychowawcze i behawioralne Twojego psa. Oparte na emocjach i zrozumieniu przyczyn zachowania.
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
                  src={konsultBehImg}
                  alt="Konsultacje behawioralne"
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
                  KONSULTACJE BEHAWIORALNE
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Konsultacje behawioralne są skierowane do opiekunów, którzy chcą lepiej zrozumieć zachowanie swojego psa, poradzić sobie z trudnościami w codziennym funkcjonowaniu lub przeciwdziałać pojawiającym się problemom.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Podczas spotkania wspólnie przeanalizujemy sytuację, w jakiej znajduje się pies, jego środowisko, historię oraz potrzeby, a następnie opracujemy plan działania dopasowany do Waszej codzienności.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Konsultacja odbywa się w bezpiecznej i komfortowej przestrzeni – w domu opiekuna lub w ustalonym miejscu na zewnątrz. Na podstawie obserwacji i rozmowy, zaproponujemy konkretne kroki, które pomogą w poprawie relacji i dobrostanu psa.
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Konsultacje są dla psów, które:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "wykazują lęk, agresję, nadpobudliwość lub inne trudne zachowania",
                    "nie radzą sobie z nowymi sytuacjami, bodźcami lub miejscami",
                    "mają trudności w relacjach z innymi psami lub ludźmi",
                    "potrzebują wsparcia w adaptacji do nowego środowiska (np. po adopcji)",
                    "potrzebują indywidualnego podejścia, którego nie da się wdrożyć w grupie"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  W ramach konsultacji:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "otrzymasz szczegółową analizę zachowania Twojego psa",
                    "zrozumiesz, co wpływa na jego emocje i reakcje",
                    "poznasz konkretne zalecenia i ćwiczenia do pracy w domu",
                    "nauczysz się wspierać psa w trudnych momentach",
                    "otrzymasz pisemne podsumowanie oraz plan działania po spotkaniu"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Czas trwania pierwszej konsultacji: ok. 1,5–2 godziny
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mt-2 leading-relaxed">
                  Miejsce: indywidualnie ustalane – możliwy dojazd do domu opiekuna.
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

export default KonsultacjeBehawioralne;

