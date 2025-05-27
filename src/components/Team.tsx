import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  initials: string;
}

// Sample data with default images
const supervisors: TeamMember[] = [
  {
    id: 1,
    name: "Rathnayake M.R.T.N",
    role: "IT21253294",
    image: "/team/naveen.jpeg",
    bio: "Expert in computational research with over 15 years of experience in the field.",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Scientific Advisor",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Pioneer in quantum computing research with multiple published papers.",
    initials: "MC",
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 3,
    name: "Rathnayake M.R.T.N",
    role: "IT21253294",
    image: "/team/naveen.jpeg",
    bio: "Customer Sentiment Analysis and Classifying feedback using Machine Learning",
    initials: "AR",
  },
  {
    id: 4,
    name: "Perera V.H.P",
    role: "IT21205606",
    image: "/team/hashan.jpeg",
    bio: "Insurance Claim Fraud Detection",
    initials: "LW",
  },
  {
    id: 5,
    name: "Wijesundara D.A.R",
    role: "IT21068232",
    image: "/team/akith.jpeg",
    bio: "Damage Detection and Claim Estimation",
    initials: "JP",
  },
  {
    id: 6,
    name: "Udumulla C.J",
    role: "IT21263880",
    image: "/team/udumulla.jpeg",
    bio: "Incident Profiling and Insurance Policy Mapping",
    initials: "EG",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const TeamMemberCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  return (
    <motion.div
      className="team-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <div className="relative aspect-square overflow-hidden">
        <Avatar className="w-full h-full rounded-none">
          <AvatarImage
            src={member.image}
            alt={member.name}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <AvatarFallback className="text-3xl w-full h-full rounded-none bg-research-blue text-white">
            {member.initials}
          </AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 bg-gradient-to-t from-research-navy/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm">{member.bio}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-research-navy">
          {member.name}
        </h3>
        <p className="text-sm text-gray-500">{member.role}</p>
      </div>
    </motion.div>
  );
};

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-research-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR PROJECT SUPERVISORS & MEMBERS
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-research-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Meet the exceptional team of researchers and supervisors driving our
            project forward.
          </motion.p>
        </div>

        <div className="space-y-12">
          {/* Supervisors */}
          <div>
            <motion.h3
              className="text-xl font-semibold text-center mb-8 text-research-blue"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Project Supervisors
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-5   gap-4 w-full max-w-6xl items-center ">
              {supervisors.map((supervisor, index) => (
                <TeamMemberCard
                  key={supervisor.id}
                  member={supervisor}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <motion.h3
              className="text-xl font-semibold text-center mb-8 text-research-blue"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Research Team
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
