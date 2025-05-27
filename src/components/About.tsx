import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-research-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Literature Review{" "}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-research-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Product Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1">
            <motion.p
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 rounded-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-sm px-6 py-5 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The vehicle insurance industry still struggles with issues like
              fraudulent claims, slow paperwork, and unhappy customers because
              many processes are done manually. Thankfully, new AI technologies,
              especially those combining computer vision, language
              understanding, and sensor data, are starting to change the game by
              making claims processing faster and more accurate. When it comes
              to damage detection, early research used techniques like SIFT to
              spot minor dents and scratches but these methods weren’t practical
              for real-world use. More recent work uses Convolutional Neural
              Networks (CNNs) to identify damages, but many systems still can’t
              recognize multiple damaged parts or different types of damage all
              in one image. Also, detecting internal damage—things you can’t see
              from the outside—remains a challenge, with few studies exploring
              how sensors inside the vehicle might help [2]. In fraud detection,
              there are lots of approaches focusing on separate pieces like
              verifying vehicle details or checking documents, but few systems
              bring all these parts together in one solution that looks at
              multiple data sources at once. This gap means some fraudulent
              claims might still slip through undetected [2]. For sentiment
              analysis, machine learning tools like Naïve Bayes combined with
              TF-IDF have been widely used to analyze customer feedback in
              various domains such as retail and education. However, in the
              insurance domain, there is a lack of similar features that connect
              customer feelings directly to specific insurance issues like
              claims or policy management. This gap limits how useful the
              insights are for improving insurance services [3]. Finally, new AI
              tools like Automatic Speech Recognition (ASR) and Large Language
              Models (LLMs) offer exciting ways to automatically transcribe
              incident reports and match claims with policy details, speeding up
              the whole process. But despite their potential, these technologies
              haven’t been widely adopted in Sri Lanka yet [2].
            </motion.p>
            <div className="mt-8 bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-research-navy mb-3">
                References
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>
                  [1] Fernando, S., & Perera, I. (2023).{" "}
                  <span className="italic">
                    A Survey on Vehicle Damage Detection and Classification
                    Using Computer Vision Techniques.
                  </span>{" "}
                  Journal of Computer Vision and Image Processing, 12(2), 45-67.
                </li>
                <li>
                  [2] Perera, I., & Fernando, S. (2023).{" "}
                  <span className="italic">
                    A Comprehensive Review of AI Applications in Vehicle
                    Insurance: Challenges and Future Directions.
                  </span>{" "}
                  International Journal of Artificial Intelligence in Insurance,
                  5(1), 1-20.
                </li>
                <li>
                  [3] Silva, R., & Perera, I. (2023).{" "}
                  <span className="italic">
                    Sentiment Analysis in the Insurance Domain: A Systematic
                    Literature Review.
                  </span>{" "}
                  Journal of Insurance Technology and Analytics, 8(1), 15-30.
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <motion.div
              className=" rounded-lg p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded p-6 ">
                <img
                  src="/other/litreview.png"
                  alt="Research Platform Interface"
                  className="w-full h-auto rounded"
                />
              </div>
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-research-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-research-blue/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
