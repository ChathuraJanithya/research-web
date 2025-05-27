import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const documents = [
  {
    title: "Research Proposal",
    description:
      "Comprehensive research proposal outlining project objectives, methodology, and expected outcomes",
    type: "PDF",
    size: "2.4 MB",
    date: "2024-01-15",
    category: "proposal",
    status: "published",
    link: "https://mysliit-my.sharepoint.com/:p:/g/personal/it21068232_my_sliit_lk/EWprCz6lykBCpsKcg3Rd9EIB9GiTlEF_3s4B7fkWy4ibHQ?e=8QJsuH",
  },
  {
    title: "Literature Review Report",
    description:
      "Detailed analysis of existing research and industry developments in AI-powered insurance",
    type: "PDF",
    size: "5.8 MB",
    date: "2024-02-28",
    category: "research",
    status: "published",
  },
  {
    title: "Technical Architecture Document",
    description:
      "System architecture design and technical specifications for the InsureGeini platform",
    type: "PDF",
    size: "3.2 MB",
    date: "2024-03-20",
    category: "technical",
    status: "published",
  },
  {
    title: "Data Collection Framework",
    description:
      "Methodology and procedures for collecting and preparing training data for AI models",
    type: "PDF",
    size: "1.9 MB",
    date: "2024-04-10",
    category: "methodology",
    status: "published",
  },
  {
    title: "AI Model Training Results",
    description:
      "Performance metrics and validation results for CNN, OCR, and NLP models",
    type: "PDF",
    size: "4.1 MB",
    date: "2024-05-15",
    category: "results",
    status: "draft",
  },
  {
    title: "System Integration Guide",
    description:
      "Technical documentation for integrating AI components into unified platform",
    type: "PDF",
    size: "2.7 MB",
    date: "2024-06-01",
    category: "technical",
    status: "draft",
  },
  {
    title: "User Manual & API Documentation",
    description:
      "Comprehensive user guide and API reference for the InsureGeini platform",
    type: "PDF",
    size: "6.3 MB",
    date: "2024-07-20",
    category: "documentation",
    status: "upcoming",
  },
  {
    title: "Final Research Report",
    description:
      "Complete research findings, conclusions, and recommendations for industry implementation",
    type: "PDF",
    size: "8.5 MB",
    date: "2024-12-15",
    category: "report",
    status: "upcoming",
  },
];

const getCategoryColor = (category: string) => {
  const colors = {
    proposal: "bg-blue-100 text-blue-800",
    research: "bg-emerald-100 text-emerald-800",
    technical: "bg-purple-100 text-purple-800",
    methodology: "bg-amber-100 text-amber-800",
    results: "bg-red-100 text-red-800",
    documentation: "bg-gray-100 text-gray-800",
    report: "bg-indigo-100 text-indigo-800",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "published":
      return "bg-emerald-100 text-emerald-800";
    case "draft":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function Documents() {
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
          <div className="inline-flex items-center gap-3 mb-6">
            <FileText className="h-10 w-10 text-research-accent" />
            <h2 className="text-4xl font-bold text-research-navy">
              Research Documents
            </h2>
          </div>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Access comprehensive documentation, reports, and technical resources
            for the InsureGeini project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-full bg-gray-50 group-hover:bg-research-blue group-hover:text-white transition-colors duration-300">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge
                        className={getCategoryColor(doc.category)}
                        variant="secondary"
                      >
                        {doc.category}
                      </Badge>
                      <Badge
                        className={getStatusColor(doc.status)}
                        variant="secondary"
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-research-navy mb-3 group-hover:text-research-blue transition-colors duration-300">
                    {doc.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {doc.date}
                    </div>
                    <div>{doc.type}</div>
                    <div>{doc.size}</div>
                  </div>

                  <div className="flex gap-2">
                    {doc.status === "published" ? (
                      <>
                        <Button
                          size="sm"
                          className="flex-1"
                          disabled={doc.status !== "published"}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>

                        {doc?.link && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            disabled={doc.status !== "published"}
                          >
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${doc.title} in new tab`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        disabled
                      >
                        {doc.status === "draft" ? "In Review" : "Coming Soon"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-research-blue to-research-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Document Repository</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              All research documents are version-controlled and peer-reviewed to
              ensure accuracy and quality. New documents are published regularly
              as the project progresses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
