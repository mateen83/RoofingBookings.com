import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-20 md:py-32 border-t border-border/30">
      <div className="section-container">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-2 text-foreground mb-8"
          >
            Your Real Problem Isn't Marketing —{" "}
            <span className="text-primary">It's Consistency.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-text mb-8"
          >
            Roofing companies don't struggle with skill. They struggle with predictable, 
            high-quality replacement jobs. One good month, two slow months, constant price 
            shoppers, and wasted time on dead leads.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-heading font-semibold text-foreground"
          >
            We eliminate inconsistency at the source.
          </motion.p>
        </div>
      </div>
    </section>
  );
}