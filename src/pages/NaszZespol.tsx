import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import olaPhoto from "@/assets/ola.jpg";
import martaPhoto from "@/assets/marta.jpg";

const teamMembers = [
  {
    name: "Ola",
    role: "Trenerka i behawiorystka psów.",
    image: olaPhoto,
    bio: "W pracy z psami dużą wagę przykłada do komunikacji i uważnego obserwowania ich sygnałów. Trening traktuje jako narzędzie, które wspiera komfortowe życie psa i jego opiekuna.\n\nOla aktywnie trenuje obedience ze swoimi psami. W codziennej pracy łączy elementy tego sportu ze standardowym posłuszeństwem.\n\nPracuje w sposób holistyczny – skupia się zarówno na emocjach psa, jak i na praktycznych ćwiczeniach. Dzięki temu zespoły pies–człowiek lepiej funkcjonują na co dzień.",
    specialties: [
      "Treningi posłuszeństwa",
      "Konsultacje behawioralne"
    ],
    education: ""
  },
  {
    name: "Marta Kamola",
    role: "Trenerka psów, instruktorka Polskiej Ligi Nosework oraz instruktorka podstaw psiego fitnessu.",
    image: martaPhoto,
    bio: "Trening z psem traktuje jako sposób budowania relacji opartej na zaufaniu i wzajemnym zrozumieniu. W swojej pracy skupia się na emocjach psa oraz przyczynach jego zachowań, wierząc, że to one mają kluczowe znaczenie dla komfortu życia psa i opiekuna.\n\nNosework jest dla niej nie tylko sportem, ale przede wszystkim formą współpracy i wspólnej zabawy psa z człowiekiem. Największą satysfakcję daje jej obserwowanie, jak zespoły uczą się komunikacji, zaufania i radości ze wspólnego działania.\n\nPsi fitness to jej osobista pasja. Traktuje go jako sposób na dbanie o sprawność i komfort życia psa, a jednocześnie na stymulację umysłową i rozwijanie świadomości własnego ciała.",
    specialties: [
      "Nosework",
      "Psi fitness"
    ],
    education: ""
  },
];

const values = [
  {
    icon: Heart,
    title: "Empatia",
    description: "Rozumiemy emocje psów i pracujemy z nimi, nie przeciwko nim."
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Każdy pies jest inny, dlatego dostosowujemy metody do jego potrzeb."
  },
  {
    icon: Award,
    title: "Doświadczenie",
    description: "Ciągle zdobywamy wiedzę i doskonalimy nasze umiejętności."
  },
  {
    icon: BookOpen,
    title: "Edukacja",
    description: "Uczymy opiekunów, jak lepiej rozumieć i komunikować się z psami."
  },
];

const NaszZespol = () => {
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
                Poznaj nas
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">
                Jesteśmy pasjonatami psiej psychologii i szkolenia opartego na empatii. 
                Nasz zespół łączy doświadczenie, wiedzę i miłość do psów, aby pomóc 
                Wam budować silniejsze relacje z Waszymi czworonogami.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <div className={`absolute ${index % 2 === 1 ? '-left-4 -top-4' : '-right-4 -top-4'} w-full h-full bg-lavender/30 organic-shape-alt`} />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative organic-shape w-full h-[400px] lg:h-[500px] object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
                      {member.name}
                    </h2>
                    <p className="text-lg sm:text-xl text-primary mb-4 font-medium">
                      {member.role}
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                    <div className="mb-6">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-3">
                        Specjalizacje:
                      </h3>
                      <ul className="space-y-2">
                        {member.specialties.map((specialty, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-lavender rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-foreground">{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground italic">
                      {member.education}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Nasze wartości
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                To, co nas wyróżnia i napędza w codziennej pracy z psami i ich opiekunami
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full text-center hover:shadow-elevated transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 bg-lavender/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary relative overflow-hidden">
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
                Chcesz nas poznać?
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Umów się na pierwszą konsultację i zobacz, jak możemy pomóc 
                Tobie i Twojemu psu zbudować silniejszą relację.
              </p>
              <Link to="/umow-spotkanie">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
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

export default NaszZespol;

