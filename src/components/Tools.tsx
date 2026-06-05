import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  LineChart,
  Activity,
  Brain,
  Flame,
  Cpu,
  MessageSquare,
  Database,
  Cloud,
  PieChart,
  BookOpen,
} from "lucide-react";

const tools = [
  { name: "Python", icon: Code2 },
  { name: "Pandas", icon: BarChart3 },
  { name: "Matplotlib", icon: LineChart },
  { name: "Seaborn", icon: Activity },
  { name: "Scikit-Learn", icon: Brain },
  { name: "TensorFlow", icon: Flame },
  { name: "PyTorch", icon: Cpu },
  { name: "OpenAI APIs", icon: MessageSquare },
  { name: "SQL", icon: Database },
  { name: "Microsoft Azure", icon: Cloud },
  { name: "Power BI", icon: PieChart },
  { name: "Jupyter Notebook", icon: BookOpen },
];

export default function Tools() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tools You'll Use
          </h2>
          <p className="text-muted-foreground">
            Master the most powerful tools used in real-world AI and Data Science projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  bg-white/5
                  backdrop-blur-md
                  p-6
                  text-center
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
                <div className="relative flex justify-center mb-3 text-blue-400">
                  <Icon size={30} />
                </div>

                {/* Name */}
                <h3 className="relative font-medium text-sm md:text-base">
                  {tool.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}