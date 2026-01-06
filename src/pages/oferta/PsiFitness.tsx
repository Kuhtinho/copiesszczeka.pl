import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dumbbell, CheckCircle } from "lucide-react";
import fitnessImg from "@/assets/fitness.png";

const PsiFitness = () => {
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
                  <Dumbbell className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Psi fitness
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Psi Fitness to zajęcia ruchowe dla psów, które pomagają poprawić ich sprawność fizyczną, koordynację oraz ogólną kondycję. Zajęcia są dostosowane do wieku, możliwości i potrzeb każdego psa.
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
                  src={fitnessImg}
                  alt="Psi fitness"
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
                  PSI FITNESS
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Psi Fitness to zajęcia ruchowe dla psów, które pomagają poprawić ich sprawność fizyczną, koordynację oraz ogólną kondycję. Zajęcia są dostosowane do wieku, możliwości i potrzeb każdego psa.
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Podczas zajęć:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "uczymy bezpiecznego korzystania ze sprzętu fitness",
                    "wzmacniamy mięśnie posturalne",
                    "poprawiamy równowagę i koordynację",
                    "budujemy pewność siebie psa",
                    "wspieramy zdrowy rozwój i zapobiegamy kontuzjom"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Dla kogo?
                </h3>
                <ul className="space-y-3">
                  {[
                    "dla szczeniąt, dorosłych i psich seniorów",
                    "dla psów sportowych i rodzinnych",
                    "dla psów po kontuzjach (po konsultacji z weterynarzem)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base sm:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Zajęcia prowadzone są w małych grupach, w przyjaznej atmosferze, z indywidualnym podejściem do każdego psa.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed font-semibold">
                  Zapraszamy do zapisów na Psi Fitness!
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
                <Button variant="hero" size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
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

export default PsiFitness;

