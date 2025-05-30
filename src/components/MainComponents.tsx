import { motion } from "framer-motion";
import { Camera, Shield, MessageSquare, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mainComponents = [
  {
    icon: <Camera className="h-8 w-8 text-research-blue" />,
    title: "External and Internal Damage Detection and Claim Estimation",
    description:
      "This component uses image recognition and sensor data to detect both visible (external) and hidden (internal) vehicle damages. It then calculates a repair or replacement cost using rule-based logic and machine learning models to provide an accurate insurance claim estimation.",
  },
  {
    icon: <Shield className="h-8 w-8 text-red-500" />,
    title: "Insurance Claim Fraud Detection",
    description:
      "This module detects fraudulent activities such as fake documents, repeated claims, or staged accidents by validating vehicle and driver information, comparing current damage with historical images, and verifying accident locations using AI models and OCR technologies.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
    title: "Customer Sentiment Analysis and Classifying Feedbacks",
    description:
      "This system analyzes customer feedback to determine sentiment (positive, neutral, or negative) and categorize it into themes like claims, policies, or service quality. It helps generate insights to improve customer experience and satisfaction using machine learning and visualization tools.",
  },
  {
    icon: <FileText className="h-8 w-8 text-amber-500" />,
    title: "Incident Profiling and Insurance Policy Mapping",
    description:
      "This component transforms audio or text descriptions of incidents into structured reports using NLP and Retrieval-Augmented Generation (RAG). It also maps incident details to relevant insurance policy clauses to streamline and personalize the claims process.",
  },
];

export function MainComponents() {
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
            Main Components
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Four core AI-powered components that drive InsureGeini's
            comprehensive vehicle insurance solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gray-50 group-hover:bg-research-blue group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      {component.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-research-navy mb-3 group-hover:text-research-blue transition-colors duration-300">
                        {component.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {component.description}
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
