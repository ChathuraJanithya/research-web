
import { motion } from "framer-motion";
import { Target, Users, Globe, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const scopeItems = [
  {
    icon: <Target className="h-8 w-8 text-research-blue" />,
    title: "Vehicle Insurance Claims",
    description: "Streamline and automate the entire claims processing workflow for vehicle insurance in Sri Lanka"
  },
  {
    icon: <Users className="h-8 w-8 text-research-accent" />,
    title: "Multi-stakeholder Solution",
    description: "Serve insurance companies, policyholders, adjusters, and regulatory bodies with integrated AI tools"
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-500" />,
    title: "Industry Transformation",
    description: "Pioneer digital transformation in Sri Lankan insurance industry with scalable AI solutions"
  },
  {
    icon: <Shield className="h-8 w-8 text-amber-500" />,
    title: "Fraud Prevention",
    description: "Implement advanced fraud detection and prevention mechanisms using multi-modal AI"
  }
];

export function ProjectScope() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-research-navy mb-6">
            Project Scope
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Defining the boundaries and objectives of our comprehensive insurance technology solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scopeItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gray-50 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-research-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
