import { motion } from "framer-motion";
import { Users, MapPin, Dumbbell, Heart, Footprints } from "lucide-react";
import team1 from "@/assets/team1.webp";

const services = [
  {
    icon: Users,
    title: "Treningi indywidualne z posłuszeństwa i grupowe z posłuszeństwa",
    description: "Nauczymy was przydatnych zachowań dostosowanych do potrzeb waszego psa.",
  },
  {
    icon: MapPin,
    title: "Nosework",
    description: "Treningi węchowe, które budują pewność siebie twojego psa.",
  },
  {
    icon: Footprints,
    title: "Spacery socjalizacyjne",
    description: "Poprawimy jakość waszych wspólnych spacerów.",
  },
  {
    icon: Dumbbell,
    title: "Psi fitness",
    description: "Wsparcie prawidłowego rozwoju mięśni, koordynacji i świadomości ciała psa.",
  },
  {
    icon: Heart,
    title: "Konsultacje behawioralne",
    description: "Oparte na emocjach i zrozumieniu przyczyn zachowania twojego psa.",
  },
];

export const Services = () => {
  return (
    <section id="oferta" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 organic-shape-alt" />
              <img
                src={team1}
                alt="Trenerki z psami"
                className="relative organic-shape-alt w-full h-[400px] lg:h-[500px] object-cover shadow-elevated"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
                Co oferujemy?
              </h2>
            </motion.div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4 p-4 rounded-xl bg-background/80 shadow-soft hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
