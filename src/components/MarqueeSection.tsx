
import { motion } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Zap, Clock, Award, Lock, BarChart, FileCheck } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-research-blue" />,
    text: "Advanced Fraud Detection"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-research-accent" />,
    text: "Automated Document Verification"
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    text: "Instant Claims Processing"
  },
  {
    icon: <Clock className="h-8 w-8 text-emerald-500" />,
    text: "Real-time Updates"
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    text: "Policy Clarity Assistance"
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-600" />,
    text: "Secure Data Handling"
  },
  {
    icon: <BarChart className="h-8 w-8 text-red-500" />,
    text: "Insightful Analytics"
  },
  {
    icon: <FileCheck className="h-8 w-8 text-teal-500" />,
    text: "Automated Approvals"
  }
];

export function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-research-navy mb-4">
            Transforming Insurance Claims
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            InsureGeini leverages cutting-edge AI technologies to revolutionize the vehicle insurance industry
          </p>
        </motion.div>
      </div>
      
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="relative" ref={marqueeRef}>
          <motion.div
            className="flex gap-6 py-4"
            animate={{ 
              x: [0, -1920], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 40,
              ease: "linear" 
            }}
          >
            {/* Duplicate features to create continuous loop */}
            {[...features, ...features].map((feature, index) => (
              <Card key={index} className="flex-shrink-0 w-72 border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-2 rounded-full bg-gray-100 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-research-navy whitespace-nowrap">{feature.text}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
