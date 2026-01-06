import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, Users, MapPin, Dumbbell, Heart, GraduationCap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    icon: GraduationCap,
    title: "Posłuszeństwo",
    price: "800",
    period: "zł / cykl",
    description: "Cykl zajęć indywidualnych - 7 spotkań",
    features: [
      "7 spotkań indywidualnych",
      "60 minut każde spotkanie",
      "Indywidualne podejście",
      "Materiały edukacyjne",
      "Wsparcie między sesjami"
    ],
    popular: false
  },
  {
    icon: MessageCircle,
    title: "Konsultacje spacerowe",
    price: "150",
    period: "zł / sesja",
    description: "1:1 z trenerem - indywidualne konsultacje",
    features: [
      "60 minut konsultacji",
      "Indywidualne podejście",
      "Analiza zachowania podczas spaceru",
      "Praktyczne wskazówki"
    ],
    popular: false
  },
  {
    icon: Users,
    title: "Treningi grupowe z posłuszeństwa",
    price: "100",
    period: "zł / sesja",
    description: "Treningi w małych grupach (max 4 psy)",
    features: [
      "60 minut pracy",
      "Małe grupy",
      "Socjalizacja z innymi psami",
      "Materiały edukacyjne"
    ],
    popular: true
  },
  {
    icon: MapPin,
    title: "Spacery socjalizacyjne",
    price: "120",
    period: "zł / spacer",
    description: "Grupa 2-3 psy - treningi socjalizacyjne",
    features: [
      "60 minut spaceru",
      "Grupa 2-3 psy",
      "Socjalizacja w kontrolowanych warunkach",
      "Praca z emocjami"
    ],
    popular: false
  },
  {
    icon: Dumbbell,
    title: "Psi fitness / Nosework",
    price: "od 140",
    period: "zł / sesja",
    description: "Zajęcia indywidualne - fitness i nosework",
    features: [
      "60 minut zajęć",
      "Indywidualny program",
      "Ćwiczenia dostosowane do kondycji",
      "Wsparcie dla seniorów"
    ],
    popular: false
  },
  {
    icon: Heart,
    title: "Konsultacja behawioralna",
    price: "od 270",
    period: "zł / konsultacja",
    description: "Kompleksowa analiza zachowań i plan działania",
    features: [
      "2 godziny konsultacji",
      "Szczegółowa analiza",
      "Raport + konsultacja telefoniczna",
      "Indywidualny plan działania",
      "Materiały edukacyjne"
    ],
    popular: false
  },
];

const packages = [
  {
    title: "Pakiet konsultacje spacerowe",
    price: "400",
    period: "zł / 3 spotkania",
    description: "Pakiet 3 spotkań konsultacji spacerowych",
    features: [
      "3 spotkania indywidualne",
      "60 minut każde spotkanie",
      "1:1 z trenerem",
      "Oszczędność przy zakupie pakietu"
    ]
  },
  {
    title: "Pakiet spacery socjalizacyjne",
    price: "300",
    period: "zł / 3 spotkania",
    description: "Pakiet 3 spotkań spacerów socjalizacyjnych",
    features: [
      "3 spacery socjalizacyjne",
      "Grupa 2-3 psy",
      "60 minut każde spotkanie",
      "Oszczędność przy zakupie pakietu"
    ],
    popular: false
  },
  {
    title: "Pakiet fitness / nosework",
    price: "od 750",
    period: "zł / 6 spotkań",
    description: "Pakiet 6 spotkań fitness lub nosework",
    features: [
      "6 spotkań indywidualnych",
      "60 minut każde spotkanie",
      "Indywidualny program",
      "Oszczędność przy zakupie pakietu"
    ],
    popular: true
  },
];

const Cennik = () => {
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
                Nasze ceny
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Przejrzyste ceny za wszystkie nasze usługi. Oferujemy również pakiety 
                z atrakcyjnymi zniżkami dla regularnych klientów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Individual Services Pricing */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Pojedyncze usługi
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Wybierz usługę, która najlepiej odpowiada potrzebom Twojego psa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-2 border-lavender shadow-elevated' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-lavender rounded-full text-base font-medium text-foreground">
                        Popularne
                      </div>
                    )}
                    <CardHeader>
                      <div className="w-12 h-12 bg-lavender/30 rounded-lg flex items-center justify-center mb-4">
                        <plan.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-display">{plan.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <div className="mb-6">
                        <span className="text-4xl sm:text-5xl font-display font-bold text-foreground">{plan.price}</span>
                        <span className="text-base sm:text-lg text-muted-foreground ml-2">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-6 flex-grow">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/umow-spotkanie">
                        <Button 
                          variant={plan.popular ? "default" : "outline"} 
                          className="w-full mt-auto"
                          style={plan.popular ? { backgroundColor: 'hsl(var(--lavender))' } : {}}
                        >
                          Umów sesję
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Pakiety zniżkowe
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Oszczędź z pakietami dla regularnych klientów
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className={`h-full flex flex-col relative ${pkg.popular ? 'border-2 border-lavender shadow-elevated' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-lavender rounded-full text-sm font-medium text-foreground">
                        Najlepsza wartość
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl sm:text-3xl font-display">{pkg.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base">{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <div className="mb-6">
                        <span className="text-5xl sm:text-6xl font-display font-bold text-foreground">{pkg.price}</span>
                        <span className="text-base sm:text-lg text-muted-foreground ml-2">{pkg.period}</span>
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                Masz pytania dotyczące cen?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Skontaktuj się z nami, aby omówić szczegóły i znaleźć najlepsze rozwiązanie 
                dla Twojego psa. Pierwsza konsultacja to czas na poznanie się i ustalenie 
                indywidualnego planu działania.
              </p>
              <Link to="/kontakt">
                <Button variant="hero" size="lg">
                  Skontaktuj się z nami
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

export default Cennik;

