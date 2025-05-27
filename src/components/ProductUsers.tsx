
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users2, Building2, Car, Shield } from "lucide-react";

export function ProductUsers() {
  const users = [
    {
      title: "Insurance Companies",
      description: "Streamline operations, reduce fraud, and enhance customer satisfaction through automated verification processes.",
      icon: <Building2 className="h-12 w-12 text-research-blue" />,
      delay: 0.1
    },
    {
      title: "Insurance Agents",
      description: "Process claims faster with AI-assisted document verification and policy matching capabilities.",
      icon: <Users2 className="h-12 w-12 text-research-accent" />,
      delay: 0.2
    },
    {
      title: "Vehicle Owners",
      description: "Experience faster claim processing, transparent communication, and reduced paperwork hassles.",
      icon: <Car className="h-12 w-12 text-amber-500" />,
      delay: 0.3
    },
    {
      title: "Policy Holders",
      description: "Gain better understanding of coverage terms and enjoy quicker resolution of claims with less disputes.",
      icon: <Shield className="h-12 w-12 text-emerald-500" />,
      delay: 0.4
    }
  ];

  return (
    <section id="users" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-research-navy mb-4">
            Who Benefits From InsureGeini
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            Our AI-powered platform serves multiple stakeholders across the vehicle 
            insurance ecosystem, creating value at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: user.delay }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-100 inline-flex">
                    {user.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-research-navy">
                    {user.title}
                  </h3>
                  <p className="text-gray-600">
                    {user.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
