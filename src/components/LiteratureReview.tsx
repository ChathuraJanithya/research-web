
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviewAreas = [
  {
    icon: <BookOpen className="h-8 w-8 text-research-blue" />,
    title: "AI in Insurance Claims",
    findings: "Recent studies show 40% improvement in claim processing speed with AI implementation",
    references: "Chen et al. (2023), Kumar & Patel (2024)"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-research-accent" />,
    title: "Fraud Detection Technologies",
    findings: "Machine learning models achieve 95% accuracy in detecting fraudulent insurance claims",
    references: "Williams & Rodriguez (2023), Singh et al. (2024)"
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-500" />,
    title: "Customer Experience in Digital Insurance",
    findings: "Digital-first approaches increase customer satisfaction by 65% in claim processes",
    references: "Thompson & Lee (2023), Anderson et al. (2024)"
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    title: "Sri Lankan Insurance Market",
    findings: "Limited digital adoption with only 15% of claims processed through digital channels",
    references: "Insurance Board of Sri Lanka (2024), Perera & Silva (2023)"
  }
];

export function LiteratureReview() {
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
            Literature Review
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive analysis of existing research and industry developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviewAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gray-50 flex-shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-research-navy mb-3">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {area.findings}
                      </p>
                      <p className="text-sm text-research-blue font-medium">
                        {area.references}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-research-blue to-research-accent rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Research Synthesis</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Our literature review reveals significant opportunities for AI-driven transformation in the insurance sector, 
            particularly in developing markets like Sri Lanka where digital adoption remains limited despite proven benefits.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
