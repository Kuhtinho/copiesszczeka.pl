import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sage blur-3xl" />
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
            Gotowy na lepszą relację z Twoim psem?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Zmieniamy codzienne życie psów i ich ludzi w bardziej świadome, 
            spokojne i pełne wzajemnego zaufania.
          </p>
          <Link to="/umow-spotkanie">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
            >
              Umów spotkanie
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
