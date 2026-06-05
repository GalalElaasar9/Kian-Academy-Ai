import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  ShieldCheck,
  UserMinus,
  TrendingUp,
  LineChart,
  Lock,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI House Price Prediction",
    desc: "Build a regression model to predict house prices.",
    icon: Home,
  },
  {
    id: 2,
    title: "AI Customer Churn Prediction",
    desc: "Predict which customers are likely to leave.",
    icon: Users,
  },
  {
    id: 3,
    title: "AI Credit Risk Prediction",
    desc: "Evaluate customer financial risk.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Employee Attrition Prediction",
    desc: "Detect employees likely to leave.",
    icon: UserMinus,
  },
  {
    id: 5,
    title: "Sales Forecasting System",
    desc: "Forecast future sales trends.",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "Stock Price Prediction",
    desc: "Predict stock market movements.",
    icon: LineChart,
  },
];

export default function ProjectWillBuild() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="relative py-28 overflow-hidden bg-[#0B1220] text-white" dir="ltr">

      {/* 🔵 Background Glow (Professional SaaS Style) */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            AI Projects Journey
          </h2>

          <p className="text-white/60 mt-3">
            Unlock real-world AI projects step by step
          </p>

          {/* Progress */}
          <div className="mt-8 h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{
                width: `${(currentStep / projects.length) * 100}%`,
              }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const step = index + 1;

            const unlocked = step <= currentStep;
            const active = step === currentStep;

            return (
              <motion.div
                key={project.id}
                onClick={() => unlocked && setCurrentStep(step + 1)}
                whileHover={unlocked ? { scale: 1.01 } : {}}
                className={`
                  relative flex items-center justify-between gap-6
                  rounded-2xl border px-6 py-5 cursor-pointer
                  transition-all duration-300

                  ${
                    unlocked
                      ? "bg-white/5 border-white/10 hover:border-blue-400/40"
                      : "bg-white/5 border-white/5 opacity-50 cursor-not-allowed"
                  }

                  ${
                    active
                      ? "ring-1 ring-blue-500/40"
                      : ""
                  }
                `}
              >
                {/* Left */}
                <div className="flex items-center gap-5">
                  <div className="text-white/40 w-6 text-sm font-medium">
                    {step}
                  </div>

                  <div
                    className={`
                      flex h-11 w-11 items-center justify-center rounded-xl
                      ${
                        unlocked
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-white/5 text-white/30"
                      }
                    `}
                  >
                    {unlocked ? (
                      <Icon size={20} />
                    ) : (
                      <Lock size={18} />
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      {project.title}

                      {step < currentStep && (
                        <CheckCircle2 size={16} className="text-green-400" />
                      )}
                    </h3>

                    <p className="text-sm text-white/50">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="text-xs">
                  {unlocked ? (
                    <span className="text-blue-400">Unlocked</span>
                  ) : (
                    <span className="text-white/30">Locked</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}