import { motion } from "framer-motion";
import { Check } from "lucide-react";
import team2 from "@/assets/team2.webp";

const audiences = [
  "Dla opiekunów, którzy czują się zagubieni w psim zachowaniu.",
  'Dla tych, którzy chcą nie tylko "wyszkolić" swojego psa, ale też lepiej zrozumieć.',
  "Dla psów lękliwych, reaktywnych, nadpobudliwych.",
  'Dla "idealnych" psów, którym chcemy dać jeszcze więcej zrozumienia.',
];

export const Audience = () => {
  return (
    <section id="dla-kogo" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
              Dla kogo jesteśmy?
            </h2>

            <div className="space-y-4">
              {audiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender/50 rounded-full blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
              
              <img
                src={team2}
                alt="Psy w naturze"
                className="relative organic-shape w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
