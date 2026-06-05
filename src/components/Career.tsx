import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Database,
  Sparkles,
  MessageSquareCode,
  Eye,
  Workflow,
  Briefcase,
  Laptop,
} from "lucide-react";

const careers = [
  {
    title: "AI Engineer",
    icon: Brain,
  },
  {
    title: "Machine Learning Engineer",
    icon: Bot,
  },
  {
    title: "Data Scientist",
    icon: Database,
  },
  {
    title: "AI Specialist",
    icon: Sparkles,
  },
  {
    title: "NLP Engineer",
    icon: MessageSquareCode,
  },
  {
    title: "Computer Vision Engineer",
    icon: Eye,
  },
  {
    title: "AI Automation Specialist",
    icon: Workflow,
  },
  {
    title: "AI Consultant",
    icon: Briefcase,
  },
  {
    title: "Freelance AI Developer",
    icon: Laptop,
  },
];

export default function Career() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium">
            Career Opportunities
          </span>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Career Opportunities After AI
          </h2>

          <p className="text-lg text-muted-foreground" dir="ltr">
            Unlock high-demand career paths in Artificial Intelligence and
            build the skills needed to work on real-world AI projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((career, index) => {
            const Icon = career.icon;

            return (
              <motion.div
                key={career.title}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border
                  bg-card/80
                  p-6
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:shadow-2xl
                  hover:shadow-primary/10
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon
                    size={30}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-2 text-xl font-bold">
                    {career.title}
                  </h3>

                  <p className="text-muted-foreground">
                    Build practical experience and prepare for a successful
                    career as a {career.title}.
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}