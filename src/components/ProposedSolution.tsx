import { motion } from "framer-motion";
import { Lightbulb, Cpu, Shield, Zap, Users, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutionComponents = [
  {
    icon: <Cpu className="h-8 w-8 text-research-blue" />,
    title: "Multi-Modal AI Engine",
    description:
      "Integrated CNN, OCR, and NLP for comprehensive claim analysis",
  },
  {
    icon: <Shield className="h-8 w-8 text-red-500" />,
    title: "Advanced Fraud Detection",
    description: "Real-time anomaly detection and historical pattern analysis",
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    title: "Instant Processing",
    description: "Automated document verification and claim validation",
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-500" />,
    title: "Customer Intelligence",
    description: "Sentiment analysis and satisfaction monitoring",
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-500" />,
    title: "Analytics Dashboard",
    description: "Comprehensive reporting and business intelligence",
  },
];

export function ProposedSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Lightbulb className="h-10 w-10 text-research-accent" />
            <h2 className="text-4xl font-bold text-research-navy">
              Proposed Solution
            </h2>
          </div>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            InsureGeini is an AI-driven platform that automates vehicle
            insurance claims using multimodal technologies. It uses advanced CNN
            models and sensor data to detect and assess multiple external and
            internal damages accurately. The system integrates OCR and facial
            recognition for robust fraud detection by verifying vehicle and
            driver details. Customer feedback is analyzed with machine learning
            tailored to insurance-specific categories, enhancing service
            quality. Speech-to-text models transcribe incident reports, while
            large language models combined with Retrieval-Augmented Generation
            map claims to policy clauses for faster, transparent processing.
            Real-time alerts and geographic mapping support efficient claim
            management and risk mitigation, modernizing insurance operations in
            Sri Lanka.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-research-blue via-research-accent to-purple-600 rounded-3xl p-8 mb-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Core Innovation</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              The first unified platform combining vehicle inspection AI,
              document authentication, voice processing, and intelligent policy
              mapping in the Sri Lankan insurance market.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutionComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gray-50 group-hover:bg-white transition-colors duration-300 mb-4">
                    {component.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-research-navy mb-3">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {component.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6">
            <div className="text-3xl font-bold text-research-blue mb-2">
              95%
            </div>
            <div className="text-gray-600">Fraud Detection Accuracy</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-research-accent mb-2">
              80%
            </div>
            <div className="text-gray-600">Faster Claim Processing</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-emerald-500 mb-2">24/7</div>
            <div className="text-gray-600">Automated Service</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
