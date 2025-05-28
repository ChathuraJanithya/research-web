import { motion } from "framer-motion";
import {
  GitBranch,
  Database,
  TestTube,
  BarChart,
  Users,
  Cog,
  Network,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const methodologyPhases = [
  {
    icon: <Database className="h-8 w-8 text-research-blue" />,
    phase: "Phase 1",
    title: "Data Collection & Preparation",
    description:
      "Gather historical insurance data, vehicle images, policy documents, and customer interaction records for model training.",
    duration: "3 months",
    deliverables: [
      "Curated dataset",
      "Data preprocessing pipeline",
      "Quality validation framework",
    ],
  },
  {
    icon: <Cog className="h-8 w-8 text-research-accent" />,
    phase: "Phase 2",
    title: "AI Model Development",
    description:
      "Develop and train CNN models for vehicle inspection, OCR systems for document processing, and NLP models for sentiment analysis.",
    duration: "4 months",
    deliverables: [
      "Trained AI models",
      "Model validation results",
      "Performance benchmarks",
    ],
  },
  {
    icon: <GitBranch className="h-8 w-8 text-emerald-500" />,
    phase: "Phase 3",
    title: "System Integration",
    description:
      "Integrate all AI components into a unified platform with real-time processing capabilities and user interfaces.",
    duration: "3 months",
    deliverables: [
      "Integrated platform",
      "API documentation",
      "User interface",
    ],
  },
  {
    icon: <TestTube className="h-8 w-8 text-purple-500" />,
    phase: "Phase 4",
    title: "Testing & Validation",
    description:
      "Comprehensive testing including unit tests, integration tests, performance tests, and user acceptance testing.",
    duration: "2 months",
    deliverables: ["Test results", "Performance metrics", "Bug fixes"],
  },
  {
    icon: <Users className="h-8 w-8 text-amber-500" />,
    phase: "Phase 5",
    title: "Pilot Deployment",
    description:
      "Deploy system with selected insurance partners for real-world testing and feedback collection.",
    duration: "2 months",
    deliverables: ["Pilot results", "User feedback", "System optimization"],
  },
  {
    icon: <BarChart className="h-8 w-8 text-red-500" />,
    phase: "Phase 6",
    title: "Evaluation & Documentation",
    description:
      "Analyze results, document findings, and prepare for full-scale deployment across the Sri Lankan market.",
    duration: "1 month",
    deliverables: ["Final report", "Deployment guide", "Research publication"],
  },
];

const systemComponents = [
  "Internal and external damage detection and claim estimation",
  "Fraud detection and validation",
  "Customer sentiment analysis and feedback classification",
  "Incident profiling and intelligent policy mapping",
];

export function Methodology() {
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
            Research Methodology
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Systematic approach to developing and validating our AI-powered
            insurance solution
          </p>
        </motion.div>

        {/* System Overview Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Methodology Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-research-blue/10">
                  <Network className="h-8 w-8 text-research-blue" />
                </div>
                <h3 className="text-2xl font-bold text-research-navy">
                  System Architecture Overview
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                The proposed InsureGeini vehicle insurance system consists of
                four main components:
              </p>

              <div className="space-y-3">
                {systemComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-research-accent mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      {component}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-research-blue/5 to-research-accent/5 p-6 rounded-xl border-l-4 border-research-blue">
                <p className="text-gray-700 leading-relaxed">
                  This figure illustrates the overall system architecture
                  designed to provide an intelligent, automated solution for
                  insurers, claims adjusters, and policyholders. Registered
                  users can upload images of the vehicle along with audio or
                  text incident reports via mobile or web applications. These
                  inputs are sent to the backend, deployed on cloud
                  infrastructure, where specialized deep learning models process
                  the data. For damage detection, vehicle images are analyzed
                  using CNN and Masked R-CNN models to identify multiple damaged
                  parts, classify damage types, and assess severity. Sensor data
                  from onboard vehicle diagnostics is integrated to detect
                  internal damage not visible externally. For fraud detection,
                  license plates and VIN numbers are extracted and verified via
                  OCR, while facial recognition models validate the driver’s
                  identity against official documents. Historical damage images
                  and sensor logs are cross-referenced to detect inconsistencies
                  and potential fraud. Customer feedback and sentiment are
                  analyzed with Naïve Bayes classifiers enhanced by TF-IDF
                  feature extraction, tailored to classify sentiments linked to
                  claim settlement, policy issues, and service quality. Incident
                  reports submitted as audio are transcribed using Automatic
                  Speech Recognition models like OpenAI Whisper. Summarization
                  and policy mapping are performed using Large Language Models
                  (LLMs) combined with Retrieval-Augmented Generation (RAG)
                  techniques to match claims with relevant policy clauses
                  accurately. The system updates real-time dashboards and
                  notifies insurers and customers of claim statuses and fraud
                  alerts. Geographic mapping visualizes claim distributions and
                  fraud hotspots to assist risk management.
                </p>
              </div>
            </div>

            {/* Right Side - System Architecture Diagram */}
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-research-navy mb-2">
                    System Architecture
                  </h4>
                  <div className="h-0.5 w-16 bg-research-accent mx-auto"></div>
                </div>

                {/* Diagram Placeholder */}
                <div className="relative bg-white rounded-xl p-6 shadow-inner min-h-[400px] flex items-center justify-center">
                  <img
                    src="/other/systemdiagram.png"
                    alt="System Architecture Diagram"
                    className="w-full h-full object-cover rounded-lg opacity-80"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-research-blue to-research-accent rounded-2xl p-8 mb-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Methodology Framework</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Our research follows an iterative, agile methodology combining
            machine learning development best practices with software
            engineering principles for robust, scalable solution delivery.
          </p>
        </motion.div>

        <div className="space-y-8">
          {methodologyPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex items-center gap-4 lg:flex-col lg:text-center lg:min-w-[120px]">
                      <div className="p-4 rounded-full bg-gray-50">
                        {phase.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-research-accent uppercase tracking-wide">
                          {phase.phase}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {phase.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-research-navy mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {phase.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-research-navy mb-2">
                          Key Deliverables:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, dIndex) => (
                            <span
                              key={dIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
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
