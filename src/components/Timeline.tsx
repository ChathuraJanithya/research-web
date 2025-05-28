import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle,
  Circle,
  FileText,
  Presentation,
  BookOpen,
  Globe,
  NotebookPen,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineEvents = [
  {
    date: "July 2024",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: 6,
    percentage: "6%",
    icon: <FileText className="h-6 w-6 text-research-blue" />,
    status: "completed",
  },
  {
    date: "December 2024",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: 6,
    percentage: "6%",
    icon: <Presentation className="h-6 w-6 text-research-accent" />,
    status: "completed",
  },
  {
    date: "March 2025",
    title: "Research Paper",
    description:
      "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    marks: 10,
    percentage: "10%",
    icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
    status: "completed",
  },
  {
    date: "March 2025",
    title: "Progress Presentation II",
    description:
      "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
    marks: 18,
    percentage: "18%",
    icon: <Presentation className="h-6 w-6 text-purple-500" />,
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Website Assessment",
    description:
      "The Website helps to promote our research project and reveals all details related to the project.",
    marks: 2,
    percentage: "2%",
    icon: <Globe className="h-6 w-6 text-amber-500" />,
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Logbook",
    description:
      "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
    marks: 3,
    percentage: "3%",
    icon: <NotebookPen className="h-6 w-6 text-blue-500" />,
    status: "completed",
  },
  {
    date: "April 2025",
    title: "Final Report",
    description:
      "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
    marks: 19,
    percentage: "19%",
    icon: <FileText className="h-6 w-6 text-red-500" />,
    status: "completed",
  },
  {
    date: "May 2025",
    title: "Final Presentation & Viva",
    description:
      "Viva is held individually to assess each member's contribution to the project.",
    marks: 20,
    percentage: "20%",
    icon: <Trophy className="h-6 w-6 text-gold-500" />,
    status: "completed",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-6 w-6 text-emerald-500" />;
    case "in-progress":
      return <Clock className="h-6 w-6 text-amber-500" />;
    default:
      return <Circle className="h-6 w-6 text-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-emerald-500";
    case "in-progress":
      return "bg-amber-500";
    default:
      return "bg-gray-400";
  }
};

export function Timeline() {
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
          <div className="inline-flex items-center gap-3 mb-6">
            <Calendar className="h-10 w-10 text-research-accent" />
            <h2 className="text-4xl font-bold text-research-navy">
              Milestones
            </h2>
          </div>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Timeline in Brief - Academic milestones and deliverables for the
            research project
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Centered Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${getStatusColor(
                    event.status
                  )} hidden lg:block z-10`}
                ></div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-full bg-gray-100 flex-shrink-0">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge
                              variant="outline"
                              className="text-sm font-medium"
                            >
                              {event.date}
                            </Badge>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">
                                Marks:
                              </span>
                              <Badge className="bg-research-accent text-white">
                                {event.marks} ({event.percentage})
                              </Badge>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-research-navy mb-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-8 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <div className="text-sm text-gray-600">
              Total Project Marks:{" "}
              <span className="font-bold text-research-navy">84 Points</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
