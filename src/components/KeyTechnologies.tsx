import { motion } from "framer-motion";
import { Brain, Eye, Mic, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    icon: <Brain className="h-10 w-10 text-research-blue" />,
    title: "Convolutional Neural Networks",
    description:
      "Advanced CNN models for vehicle damage assessment and inspection analysis",
    tools: ["TensorFlow", "PyTorch", "OpenCV"],
  },
  {
    icon: <Eye className="h-10 w-10 text-research-accent" />,
    title: "Computer Vision & OCR",
    description:
      "Optical Character Recognition and facial recognition for document authentication",
    tools: ["Tesseract", "YOLO", "OpenCV"],
  },
  {
    icon: <Mic className="h-10 w-10 text-emerald-500" />,
    title: "Speech & Language Processing",
    description:
      "Voice transcription and natural language understanding capabilities",
    tools: ["Whisper", "Llama 3.3", "DeepSeek R1"],
  },
  {
    icon: <Database className="h-10 w-10 text-purple-500" />,
    title: "Retrieval-Augmented Generation",
    description:
      "Intelligent policy-to-claim mapping with advanced RAG implementation",
    tools: ["LangChain", "ChromaDB", "FAISS"],
  },
  {
    icon: <Shield className="h-10 w-10 text-red-500" />,
    title: "Fraud Detection ML",
    description:
      "Machine learning models for anomaly detection and fraud prevention",
    tools: ["Scikit-learn", "XGBoost", "Isolation Forest"],
  },
  {
    icon: <Zap className="h-10 w-10 text-amber-500" />,
    title: "Sentiment Analysis",
    description:
      "Advanced NLP for customer sentiment understanding and service quality assessment",
    tools: ["BERT", "RoBERTa", "Transformers"],
  },
];

const techLogos = [
  {
    name: "React",
    url: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png",
  },
  {
    name: "Vite",
    url: "https://raw.githubusercontent.com/github/explore/a1bae1b15fa9fc4d5de64f3360b1d01b35db82d5/topics/vite/vite.png",
  },
  {
    name: "Node.js",
    url: "https://www.liblogo.com/img-logo/no6273w13b-node-js-logo-what-does-it-take-to-support-node-js-esm-the-guild-blog.png",
  },
  {
    name: "React Native",
    url: "https://tse1.mm.bing.net/th/id/OIP.VN6l66cbeCz_Def9cRw7hwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    name: "Docker",
    url: "https://i.pinimg.com/736x/8b/81/38/8b8138c4491769dd53c5dc09b6548ecf.jpg",
  },
  {
    name: "Python",
    url: "https://logohistory.net/wp-content/uploads/2023/06/Python-Emblem.png",
  },
  {
    name: "MongoDB",
    url: "https://vetores.org/wp-content/uploads/mongodb.png",
  },
  {
    name: "AWS",
    url: "https://www.liblogo.com/img-logo/aw7519fe58-aws-logo-file-amazon-web-services-logo-svg-wikimedia-commons.png",
  },
  {
    name: "EC2",
    url: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/AWS-EC2.png/_jcr_content/renditions/cq5dam.web.1280.1280.png",
  },
  {
    name: "ECS",
    url: "https://tse1.mm.bing.net/th/id/OIP.nRPNnsgRNIPLZWHyIVJFpgHaH4?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    name: "CloudWatch",
    url: "https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/monitoring-on-aws/monitor-your-architecture-with-amazon-cloudwatch/images/522c742e37be736db2af0f8a720b1c02_f-05-f-9-a-02-2-a-81-4-fa-3-b-651-412-e-2222-bd-08.png",
  },
  {
    name: "CloudFormation",
    url: "https://iconape.com/wp-content/png_logo_vector/aws-cloudformation.png",
  },
];

export function KeyTechnologies() {
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
            Key Technologies & Tools
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Cutting-edge AI technologies powering our comprehensive insurance
            solution
          </p>
        </motion.div>

        {/* Technology Logos Marquee */}
        <div className="mb-16 overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="relative w-full mb-4">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0  size-28  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className=" size-24 object-contain rounded"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative w-full">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: [-1200, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 size-28 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="size-24 object-contain rounded"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex p-4 rounded-full bg-gray-100 group-hover:bg-white transition-colors duration-300 mb-4">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-research-navy mb-3">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {tech.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
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
