
import React from "react";
import { motion } from "framer-motion";
import { ScanText, Scan, Fingerprint, LineChart, MessageSquareText, Webhook } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <ScanText className="h-8 w-8" />,
      title: "Optical Character Recognition",
      description: "Extract text from documents with high precision to automate information processing from insurance cards and licenses.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Scan className="h-8 w-8" />,
      title: "Vehicle Inspection CNN",
      description: "Analyze vehicle damage with deep learning models that compare current and historical images for accurate assessment.",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Fingerprint className="h-8 w-8" />,
      title: "Facial Recognition Authentication",
      description: "Verify policyholder identity with secure biometric matching to prevent fraudulent claims.",
      color: "from-violet-500 to-purple-400"
    },
    {
      icon: <MessageSquareText className="h-8 w-8" />,
      title: "NLP Sentiment Analysis",
      description: "Understand customer sentiment from interactions to improve service quality and identify pain points.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Webhook className="h-8 w-8" />,
      title: "Voice-to-Text Processing",
      description: "Convert spoken accounts of incidents into detailed digital reports using Whisper AI technology.",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "RAG-Powered Policy Mapping",
      description: "Intelligently map claims to policy clauses with large language models to determine coverage eligibility.",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-research-navy mb-4">
            Advanced Features of InsureGeini
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Powered by cutting-edge AI technologies, InsureGeini offers a comprehensive set of features
            that revolutionize insurance claim processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white inline-block mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-research-navy">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-research-navy font-medium">
            InsureGeini combines these powerful technologies into a unified platform that transforms insurance workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
