import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Dumbbell, Heart, CheckCircle, GraduationCap, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import posluszenstwoImg from "@/assets/posluszenstwo.jpg";
import noseworkImg from "@/assets/nosework.jpg";
import fitnessImg from "@/assets/fitness.png";
import spacerSocImg from "@/assets/spacer_soc.jpeg";
import konsSpacerImg from "@/assets/kons_spacer.jpeg";
import konsultBehImg from "@/assets/konsult_beh.jpeg";
import team2 from "@/assets/team2.webp";

const services = [
  {
    icon: GraduationCap,
    title: "Posłuszeństwo - Poziom podstawowy i zaawansowany",
    slug: "posluszenstwo",
    image: posluszenstwoImg,
    description: "Kurs posłuszeństwa podstawowego i zaawansowanego to kompleksowy program szkolenia psów, który pomoże Ci zbudować silną więź z pupilem. Zajęcia skierowane są zarówno dla szczeniąt (po drugim szczepieniu) jak i psów dorosłych.",
    features: [
      "Posłuszeństwo I: 7 godzin zajęć - podstawy",
      "Posłuszeństwo II: 6 godzin zajęć - zaawansowane",
      "Małe grupy (max 4 zespoły)",
      "nauka przydatnych życiowo komend",
      "Krótkie podsumowanie po każdych zajęciach",
      "Dyplom ukończenia zajęć"
    ]
  },
  {
    icon: Search,
    title: "Nosework",
    slug: "nosework",
    image: noseworkImg,
    description: "Nosework to fascynująca dyscyplina, która wykorzystuje naturalne zdolności węchowe psa. Idealna dla psów w każdym wieku i o różnym poziomie aktywności. Kurs składa się z 5 godzin zajęć.",
    features: [
      "Detekcja trzech zapachów: kory cynamonu, goździka i suszonej skórki pomarańczy",
      "Małe grupy (max 3 zespoły)",
      "Budowanie motywacji i metodycznej pracy",
      "Wyciszenie i zmęczenie mentalne psa",
      "Zabawa budująca pewność siebie",
      "Instrukcje do indywidualnej pracy w domu"
    ]
  },
  {
    icon: MapPin,
    title: "Spacery socjalizacyjne",
    slug: "spacery-socjalizacyjne",
    image: spacerSocImg,
    description: "Spacery socjalizacyjne są skierowane do opiekunów, którzy chcą lepiej odczytywać sygnały wysyłane przez psy. W trakcie zajęć będziemy rozszyfrowywać psią komunikację.",
    features: [
      "Socjalizacja w kontrolowanych warunkach",
      "Budowanie umiejętności społecznych psa",
      "Bezpieczne poszerzanie grona psich znajomych",
      "Nauka spokojnego przebywania wśród innych psów",
      "Indywidualne podejście (max 2 psy na trenera)"
    ]
  },
  {
    icon: MessageCircle,
    title: "Konsultacje spacerowe",
    slug: "konsultacje-spacerowe",
    image: konsSpacerImg,
    description: "Indywidualne konsultacje spacerowe pomagające rozwiązać problemy pojawiające się podczas spacerów z psem. Nauczysz się, jak wspierać swojego psa w trudnych momentach.",
    features: [
      "Nauka spokojnych i bezpiecznych spacerów",
      "Praca nad reakcjami na bodźce w terenie",
      "Lepsza komunikacja pies–opiekun poza domem",
      "Analiza zachowania psa podczas spaceru",
      "Indywidualne spotkania (ok. 1 godzina)"
    ]
  },
  {
    icon: Dumbbell,
    title: "Psi fitness",
    slug: "psi-fitness",
    image: fitnessImg,
    description: "Psi Fitness to zajęcia ruchowe dla psów, które pomagają poprawić ich sprawność fizyczną, koordynację oraz ogólną kondycję. Zajęcia są dostosowane do wieku, możliwości i potrzeb każdego psa.",
    features: [
      "Bezpieczne korzystanie ze sprzętu fitness",
      "Wzmacnianie mięśni posturalnych",
      "Poprawa równowagi i koordynacji",
      "Budowanie pewności siebie psa",
      "Wsparcie dla szczeniąt, dorosłych i seniorów",
      "Rehabilitacja po kontuzjach (po konsultacji z weterynarzem)"
    ]
  },
  {
    icon: Heart,
    title: "Konsultacje behawioralne",
    slug: "konsultacje-behawioralne",
    image: konsultBehImg,
    description: "Indywidualne konsultacje z behawiorystką pomagające rozwiązać problemy wychowawcze i behawioralne Twojego psa. Oparte na emocjach i zrozumieniu przyczyn zachowania.",
    features: [
      "Szczegółowa analiza zachowania psa",
      "Indywidualny plan pracy",
      "Praktyczne ćwiczenia",
      "Wsparcie emocjonalne psa",
      "Edukacja opiekunów (1,5–2 godziny konsultacji)"
    ]
  },
];

const Oferta = () => {
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
                Co oferujemy?
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Kompleksowe usługi szkoleniowe i behawioralne dla psów i ich opiekunów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <Link
                  to={`/oferta/${service.slug}`}
                  key={service.title}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-background rounded-2xl overflow-hidden transition-all duration-300 shadow-none hover:scale-105 cursor-pointer"
                  >
                  {/* Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-lavender/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </motion.div>
                </Link>
              ))}
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 organic-shape-alt" />
                  <img
                    src={team2}
                    alt="Trenerki z psami"
                    className="relative organic-shape-alt w-full h-[400px] object-cover shadow-none"
                    style={{ objectPosition: 'right center' }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                  Gotowy na zmianę?
                </h2>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                  Skontaktuj się z nami, aby omówić potrzeby Twojego psa i znaleźć 
                  najlepsze rozwiązanie. Pierwsza konsultacja to czas na poznanie się 
                  i ustalenie dalszych kroków.
                </p>
                <Link to="/umow-spotkanie">
                  <Button variant="hero" size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                    Umów spotkanie
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Oferta;

