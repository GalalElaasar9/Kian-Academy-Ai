import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Code2,
  Briefcase,
  Sparkles,
} from "lucide-react";

const audience = [
  {
    title: "AI Beginners",
    desc: "Anyone who wants to start learning Artificial Intelligence from scratch.",
    icon: Rocket,
  },
  {
    title: "University Students",
    desc: "Students from colleges and institutes looking to build strong AI skills.",
    icon: GraduationCap,
  },
  {
    title: "Developers",
    desc: "Programmers who want to transition into AI and Machine Learning.",
    icon: Code2,
  },
  {
    title: "Career Seekers",
    desc: "People who want to upgrade their skills for the job market.",
    icon: Briefcase,
  },
  {
    title: "Tech Enthusiasts",
    desc: "Anyone passionate about technology and the future of AI.",
    icon: Sparkles,
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="relative py-24 overflow-hidden bg-background" dir="ltr">

      {/* Soft background glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Who Is This Course For?
          </h2>
          <p className="text-muted-foreground">
            This course is designed for anyone who wants to enter or grow in the AI field.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  bg-white/5
                  backdrop-blur-md
                  p-6
                  transition-all
                  duration-300
                  hover:border-blue-400/40
                  hover:shadow-lg
                  hover:shadow-blue-500/10
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}