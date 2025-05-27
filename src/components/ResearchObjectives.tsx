import { motion } from "framer-motion";
import { Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  {
    id: "RO1",
    title: "Develop Multi-Modal AI Integration Framework",
    description:
      "Create a comprehensive framework that seamlessly integrates CNN, OCR, facial recognition, NLP, and speech processing for unified claim processing.",
  },
  {
    id: "RO2",
    title: "Implement Real-Time Fraud Detection System",
    description:
      "Design and deploy advanced machine learning models capable of detecting fraudulent claims with 95%+ accuracy in real-time processing scenarios.",
  },
  {
    id: "RO3",
    title: "Enhance Document Authentication Capabilities",
    description:
      "Develop sophisticated OCR and biometric verification systems for authentic document and identity validation with minimal false positives.",
  },
  {
    id: "RO4",
    title: "Create Intelligent Policy-Claim Mapping",
    description:
      "Implement RAG-based system for automatic policy clause correlation and intelligent decision-making support for claim approvals.",
  },
  {
    id: "RO5",
    title: "Establish Customer Sentiment Analytics",
    description:
      "Build comprehensive sentiment analysis and customer satisfaction monitoring system for continuous service quality improvement.",
  },
  {
    id: "RO6",
    title: "Validate System Performance and Scalability",
    description:
      "Conduct extensive testing and validation to ensure system meets industry standards and can scale across Sri Lankan insurance market.",
  },
];

export function ResearchObjectives() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Target className="h-10 w-10 text-research-accent" />
            <h2 className="text-4xl font-bold text-research-navy">
              Research Objectives
            </h2>
          </div>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Clear, measurable objectives guiding our research and development
            process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-research-blue text-white flex items-center justify-center font-bold text-sm group-hover:bg-research-accent transition-colors duration-300">
                        {objective.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-research-navy mb-3 group-hover:text-research-blue transition-colors duration-300">
                        {objective.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {objective.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-emerald-500">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Completed</span>
                      </div>
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
