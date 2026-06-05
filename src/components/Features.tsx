
import {
  Bot,
  BadgeCheck,
  Briefcase,
  Award,
} from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={30} />,
    title: "No Experience Needed",
    desc: "Start from zero with a step-by-step learning path designed for complete beginners.",
  },
  {
    icon: <Briefcase size={30} />,
    title: "Hands-On Projects",
    desc: "Work on practical projects and real datasets to build job-ready skills.",
  },
  {
    icon: <Bot size={30} />,
    title: "Real AI Tools",
    desc: "Learn and use modern AI tools and technologies used in the industry today.",
  },
  {
    icon: <Award size={30} />,
    title: "Certificate Included",
    desc: "Receive a certificate of completion to showcase your skills and achievements.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" dir="ltr">
            Why Choose This Course ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" dir="ltr">
            Everything you need to start your journey In AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border p-6 text-center hover:-translate-y-5 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-primary/10">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl mb-2">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
