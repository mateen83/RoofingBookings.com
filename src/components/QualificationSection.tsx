import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, ArrowRight, TrendingUp, Target, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const whoIsFor = [
  "Roofing companies doing £20k–£300k/month",
  "Teams who can handle 5–15 extra replacement jobs monthly",
  "Owners who want predictable, high-value clients",
  "Businesses ready to scale revenue consistently",
];

const whoIsNotFor = [
  "Startups and one-man operations",
  "People wanting cheap leads",
  "Businesses afraid to invest",
  "Companies that cannot close jobs",
];

const valuePoints = [
  { icon: Target, text: "High-intent customers only" },
  { icon: TrendingUp, text: "Predictable booked appointments" },
  { icon: Users, text: "Zero competition for the same lead" },
  { icon: BarChart, text: "Clear revenue and ROI tracking" },
];

export function QualificationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    revenue: "",
    phone: "",
    email: "",
    serviceArea: "",
    qualifies: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted",
      description: "We'll be in touch within 24 hours to schedule your demo call.",
    });
    setFormData({
      name: "",
      company: "",
      revenue: "",
      phone: "",
      email: "",
      serviceArea: "",
      qualifies: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="qualification" className="py-20 md:py-32">
      <div className="section-container">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Who Is For / Not For */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {/* Who This Is For */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Who This Is For
              </h3>
              <ul className="space-y-4">
                {whoIsFor.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Who This Is NOT For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Who This Is NOT For
              </h3>
              <ul className="space-y-4">
                {whoIsNotFor.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Value Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h3 className="heading-2 text-foreground mb-8">
              Why Premium Roofers Scale Faster With This System
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {valuePoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 md:p-6 rounded-lg bg-card border border-border/50"
                >
                  <point.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm md:text-base text-foreground font-medium">{point.text}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg md:text-xl font-heading font-semibold text-foreground">
              When each job is worth £3,000–£25,000, predictability becomes a revenue engine.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div
            id="demo-call-form"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h3 className="heading-2 text-foreground mb-4">
                If You're an Established Roofing Company, Book a Demo Call Below
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-xl bg-card border border-border/50">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-foreground mb-2">
                    Monthly Revenue *
                  </label>
                  <input
                    type="text"
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g., £50,000"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="serviceArea" className="block text-sm font-medium text-foreground mb-2">
                  Service Area *
                </label>
                <input
                  type="text"
                  id="serviceArea"
                  name="serviceArea"
                  required
                  value={formData.serviceArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., London, Manchester"
                />
              </div>

              <div>
                <label htmlFor="qualifies" className="block text-sm font-medium text-foreground mb-2">
                  Are you doing £20k+/month? *
                </label>
                <select
                  id="qualifies"
                  name="qualifies"
                  required
                  value={formData.qualifies}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <Button type="submit" variant="cta" size="xl" className="w-full mt-4">
                Book Demo Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}