import { motion } from "framer-motion";
import { SubscribeButton } from "./SubscribeButton";

const stats = [
  { value: "+5000", label: "طالب" },
  { value: "+120", label: "ساعة محتوى" },
  { value: "+15", label: "مشروع عملي" },
  { value: "98%", label: "نسبة الرضا" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-md border border-border text-md font-medium text-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              خصم لفترة محدودة على دبلومة الـ AI عدد ساعات الكورس +120
            </span>
            <h1
              className="text-[31px] md:text-7xl lg:text-[70px] font-black mb-6 leading-[1.1] tracking-tight"
              style={{ lineHeight: "1.5" }}
            >
              <span className="text-foreground">🤖Learn AI From Zero </span>{" "}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              ابدأ رحلتك في عالم الذكاء الاصطناعي وتعلم إزاي تبني أدوات وتطبيقات بإستخدام أحدث تقنيات الـ AI و Machine Learning.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <SubscribeButton size="lg" />
              <a
                href="#content"
                className="px-8 py-4 rounded-full border border-border bg-card/30 backdrop-blur-md text-foreground hover:bg-card/60 transition-all font-semibold"
              >
                استكشف المحتوى
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}
