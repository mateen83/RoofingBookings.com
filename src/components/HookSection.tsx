import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const notThisList = [
  "SEO",
  "Cheap shared leads",
  "HomeAdvisor / Bark / Checkatrade",
  "Social media posting",
];

export function HookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    const element = document.querySelector("#demo-call-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="system" className="py-20 md:py-32 bg-card/30 border-y border-border/30">
      <div className="section-container">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-2 text-foreground mb-10"
          >
            The Roofing Growth System™
          </motion.h2>

          {/* This is NOT list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-muted-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              This Is NOT:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {notThisList.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border/50"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="body-text mb-10"
          >
            It's a private, high-performance system used by established roofing companies 
            to generate consistent, high-intent replacement bookings every month.{" "}
            <span className="text-foreground font-medium">
              The full details are revealed on the demo call.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToForm}
              className="w-[80%] md:w-auto"
            >
              Book Demo Call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}