import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle } from "lucide-react";
import posluszenstwoImg from "@/assets/posluszenstwo.jpg";

const Posluszenstwo = () => {
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
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                Posłuszeństwo - Poziom podstawowy i zaawansowany
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Kurs posłuszeństwa podstawowego i zaawansowanego to kompleksowy program szkolenia psów, który pomoże Ci zbudować silną więź z pupilem.
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
                  src={posluszenstwoImg}
                  alt="Posłuszeństwo"
                  className="w-full h-[500px] object-contain rounded-2xl"
                />
              </motion.div>

              {/* POSŁUSZEŃSTWO I */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-background rounded-2xl p-8 mb-8 shadow-soft"
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                  POSŁUSZEŃSTWO I
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Zajęcia skierowane są zarówno dla szczeniąt (po drugim szczepieniu) jak i psów dorosłych.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Kursy prowadzone są w grupach – maksymalnie 4 zespoły uczestników (tworzymy grupę dla psów dorosłych oraz osobną dla szczeniąt do 5 miesiąca). Kurs składa się z 7 godzin zajęć.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Zajęcia prowadzone są w małych grupach, na ogrodzonym placu, na Wawrze. W trakcie ich trwania, Wasz pies będzie zdobywał podstawowe umiejętności z posłuszeństwa, socjalizował się w towarzystwie innych psów oraz zwierząt mieszkających w sąsiedztwie.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed font-semibold">
                  Jednak pamiętajcie! Na sukces Waszego psa składa się Wasza wspólna praca – tworzycie drużynę!
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Podczas zajęć wypracujemy następujące umiejętności:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "skupienie uwagi na przewodniku",
                    "nauka wspólnej zabawy",
                    "siad",
                    "leżeć",
                    "dostawianie do nogi",
                    "hasło zabraniające",
                    "wypluwanie przedmiotów",
                    "chodzenie przy nodze",
                    "przywołanie",
                    "podstawy odwołania"
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
                    "nauczysz swojego psa podstaw posłuszeństwa",
                    "rozwijecie relację",
                    "jako opiekun zrozumiesz podstawy psiej komunikacji",
                    "po każdych zajęciach otrzymacie podsumowanie oraz pracę domową",
                    "otrzymacie dostęp do grupy na Facebooku",
                    "zdobędziecie dyplom ukończenia zajęć"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                </motion.div>

              {/* POSŁUSZEŃSTWO II */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-background rounded-2xl p-8 shadow-soft"
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                  POSŁUSZEŃSTWO II
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Zajęcia skierowane są zarówno dla szczeniąt (po drugim szczepieniu) jak i psów dorosłych.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Kursy prowadzone są w grupach – maksymalnie 4 zespoły uczestników (tworzymy grupę dla psów dorosłych oraz osobną dla szczeniąt do 5 miesiąca). Kurs składa się z 6 godzin zajęć.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Zajęcia prowadzone są w małych grupach, na ogrodzonym placu, na Wawrze. W trakcie ich trwania, Wasz pies będzie zdobywał kolejne umiejętności z posłuszeństwa, socjalizował się w towarzystwie innych psów oraz zwierząt mieszkających w sąsiedztwie.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed font-semibold">
                  Jednak pamiętajcie! Na sukces Waszego psa składa się Wasza wspólna praca – tworzycie drużynę!
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
                  Podczas zajęć wypracujemy następujące umiejętności:
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "pracę na odłożonej nagrodzie",
                    "odesłanie na wyznaczone miejsce",
                    "omijanie przedmiotów",
                    "czekanie na hasło",
                    "pracowanie w sekwencji ćwiczeń"
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
                    "nauczysz swojego psa dodatkowych umiejętności w zakresie posłuszeństwa",
                    "pogłębisz relację z psem",
                    "jako opiekun poznasz procesy pracy nad nowymi ćwiczeniami",
                    "po każdych zajęciach otrzymacie podsumowanie oraz pracę domową",
                    "otrzymacie dostęp do grupy na facebooku",
                    "zdobędziecie dyplom ukończenia zajęć"
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

export default Posluszenstwo;

