
import { motion } from "framer-motion";
import { BadgeCheck, Clock, Search, LockKeyhole, BarChart3, HeartHandshake } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Faster Processing",
      description: "Reduce claim processing time from days to minutes with AI-powered verification."
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Enhanced Accuracy",
      description: "Multi-modal verification ensures higher accuracy in claim assessment."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Fraud Detection",
      description: "Advanced AI models detect inconsistencies and potential fraudulent activities."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data-Driven Insights",
      description: "Transform customer feedback into actionable business intelligence."
    },
    {
      icon: <LockKeyhole className="h-6 w-6" />,
      title: "Secure Authentication",
      description: "Facial recognition and document verification enhance security protocols."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Trust Building",
      description: "Transparent processes improve relationships between insurers and customers."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-research-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-research-blue/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-research-navy mb-4">
            Key Benefits of InsureGeini
          </h2>
          <div className="h-1 w-20 bg-research-blue mx-auto mb-6"></div>
          <p className="text-gray-600">
            Our AI-powered platform transforms the insurance claim process with multiple 
            benefits that improve efficiency, accuracy, and customer satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 bg-gradient-to-br from-research-blue to-research-accent rounded-lg text-white">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-research-navy">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
