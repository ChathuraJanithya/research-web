import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileX, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const gaps = [
  {
    icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
    title: "Internal and External Damage Detection and Claim Calculations",
    description:
      "Existing systems cannot accurately detect multiple damaged parts, types, and severities in a single image, nor do they effectively incorporate non-visual internal damage data, limiting real-world claim estimation accuracy and transparency",
    impact: "Fragmented user experience and inefficient processing workflows",
  },
  {
    icon: <Clock className="h-10 w-10 text-amber-500" />,
    title: "Fraud Detection",
    description:
      "There is no integrated, comprehensive fraud detection system that simultaneously verifies all aspects of claims (documents, vehicle, driver identity, and sensor data), leaving gaps that enable fraudulent claims to go undetected",
  },
  {
    icon: <FileX className="h-10 w-10 text-blue-500" />,
    title: "Customer Sentiment Analysis and Topic Classification",
    description:
      "Current sentiment analysis approaches lack domain-specific classification that combines sentiment polarity with insurance service categories, limiting actionable insights from customer feedback related to claims and policy management",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Incident Profiling and Policy Mapping",
    description:
      "Manual, siloed, and unimodal claim handling processes fail to integrate unstructured data and external sources effectively, necessitating multimodal AI systems to enhance accuracy, speed, and customer trust in claims processing.",
  },
];

export function ResearchGap() {
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
          <h2 className="text-4xl font-bold text-research-navy mb-6">
            Research Gaps
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Identified limitations in current insurance technology solutions
            that our research addresses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gaps.map((gap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 rounded-full bg-white group-hover:bg-gray-50 transition-colors duration-300 mb-4 shadow-md">
                      {gap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-research-navy mb-4">
                      {gap.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-research-navy mb-2">
                        Problem:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {gap.description}
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
