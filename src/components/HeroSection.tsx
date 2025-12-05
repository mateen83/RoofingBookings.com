import { motion } from "framer-motion";
import { Shield, TrendingUp, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Shield, text: "Private Client System" },
  { icon: TrendingUp, text: "ROI Driven" },
  { icon: Home, text: "Roofing Only Specialist" },
  { icon: Users, text: "100% Done-For-You" },
];

export function HeroSection() {
  const scrollToForm = () => {
    const element = document.querySelector("#demo-call-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 mt-20 md:pt-24 pb-16 md:pb-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-1 text-foreground mb-6"
          >
            Add £30,000–£120,000/Month in Predictable Roofing Revenue —{" "}
            <span className="text-primary">Without Cheap Leads or Price Shoppers</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-text max-w-2xl mx-auto mb-10"
          >
            A private booking system built exclusively for roofing companies doing £20k+/month.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Button
              variant="cta"
              size="xl"
              onClick={scrollToForm}
              className="w-[80%] md:w-auto"
            >
              Book Demo Call
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
              >
                <badge.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-sm font-medium text-foreground text-center">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}