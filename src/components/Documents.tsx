import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const documents = [
  // Presentations
  {
    title: "Proposal Presentation",
    description:
      "Initial project proposal presentation outlining objectives, methodology, and expected outcomes",
    type: "PPTX",
    date: "2024-01-15",
    category: "presentation",
    status: "available",
    link: "https://mysliit-my.sharepoint.com/:p:/g/personal/it21068232_my_sliit_lk/EWprCz6lykBCpsKcg3Rd9EIB9GiTlEF_3s4B7fkWy4ibHQ?e=8QJsuH",
  },
  {
    title: "Progress Presentation 1",
    description:
      "First progress review covering initial research findings and development milestones",
    type: "PPTX",
    date: "2024-03-20",
    category: "presentation",
    status: "available",
    link: "https://mysliit-my.sharepoint.com/:p:/g/personal/it21068232_my_sliit_lk/EfE1dgAH7tJMvCOKHSO7cz8B8TNEk9IOgD3ye22UVbv2WA?e=bFGZ0c",
  },
  {
    title: "Progress Presentation 2",
    description:
      "Second progress review showcasing system architecture and implementation progress",
    type: "PPTX",
    date: "2024-06-15",
    category: "presentation",
    status: "available",
    link: "https://mysliit-my.sharepoint.com/:p:/g/personal/it21068232_my_sliit_lk/EXMxtrYXh0xPubxXCmQtO9MBvLT-_6DcpTyZeU_dQEhCTA?e=dIFr95",
  },
  {
    title: "Final Presentation",
    description:
      "Comprehensive final presentation covering complete project outcomes and results",
    type: "PPTX",
    date: "2024-11-20",
    category: "presentation",
    status: "available",
    link: "https://mysliit-my.sharepoint.com/:p:/g/personal/it21068232_my_sliit_lk/ETYPfTeD0T1PvoCEnF850-UBiHSr2Qt5hHCfxJeLAWRFVA?e=5eHXuN",
  },
  // Reports
  {
    title: "Research Paper",
    description:
      "Academic research paper documenting methodologies, findings, and contributions to the field",
    type: "PDF",
    date: "2024-07-10",
    category: "report",
    status: "available",
    link: "https://mysliit-my.sharepoint.com/:b:/g/personal/it21068232_my_sliit_lk/ET_kCEs8V6ZJvJ9nboLeSiAB9hktTg8bO_RCxtzYSehsAA?e=rinmiG",
  },
  {
    title: "Final Report",
    description:
      "Comprehensive final report covering complete project documentation and evaluation",
    type: "PDF",
    date: "2024-11-30",
    category: "report",
    status: "available",
    link: "https://mysliit-my.sharepoint.com/:b:/g/personal/it21068232_my_sliit_lk/EeihaYjBCAVIqz9z3X_K9_wBzhSvRpm3pq18DgTqZeuYnQ?e=qzKWD0",
  },
];

const getCategoryColor = (category: string) => {
  const colors = {
    presentation: "bg-blue-100 text-blue-800",
    report: "bg-emerald-100 text-emerald-800",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "available":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getCategoryIcon = (category: string) => {
  return category === "presentation" ? Presentation : FileText;
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
            Access comprehensive documentation, presentations, and research
            reports for the InsureGeini project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => {
            const IconComponent = getCategoryIcon(doc.category);
            return (
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
                        <IconComponent className="h-6 w-6" />
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
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(doc.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Document
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
              All research documents and presentations are hosted on SharePoint
              for secure access. Click on any document to view it in your
              browser.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
