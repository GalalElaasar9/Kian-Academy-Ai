import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    title: "هل الكورس مناسب للمبتدئين؟",
    content: "أيوة، الكورس بيبدأ من الصفر خطوة بخطوة بدون أي خبرة سابقة.",
  },
  {
    title: "محتاج أكون بعرف برمجة؟",
    content:
      "يفضل يكون عندك أساسيات بسيطة، لكن هنساعدك تفهم كل حاجة أثناء الكورس من البداية.",
  },
  {
    title: "هل فيه مشاريع عملية؟",
    content:
      "أكيد، جزء كبير من الكورس قائم على التطبيق العملي والمشاريع الحقيقية.",
  },
  {
    title: "هتعلم أعمل Chatbots؟",
    content:
      "أيوة، وهتتعلم كمان تبني AI Assistants وتستخدم APIs مختلفة لبناء تطبيقات ذكية.",
  },
  {
    title: "هل المجال مطلوب؟",
    content:
      "جداً، الطلب على مجال الذكاء الاصطناعي و Data Science بيزيد بشكل مستمر في كل العالم.",
  },
  {
    title: "محتاج جهاز قوي؟",
    content:
      "لا، معظم الأدوات اللي هنستخدمها تشتغل على أجهزة متوسطة بدون أي مشاكل.",
  },
  {
    title: "هل فيه شهادة؟",
    content:
      "أيوة، هتحصل على Certificate بعد إتمام الكورس بالكامل.",
  },
  {
    title: "أقدر أشتغل Freelance بعد الكورس؟",
    content:
      "أكيد، هتكون عندك مشاريع قوية تساعدك تبدأ تعرض خدماتك على منصات العمل الحر.",
  },
];

export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
      <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-5xl mx-auto">
        {faqData.map((item, index) => (
        <div
          key={index}
          className="h-fit overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between px-6 py-5 text-right cursor-pointer"
          >
            <span className="text-lg font-semibold text-white">
              {item.title}
            </span>

            <motion.div
              animate={{ rotate: active === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-white/70" />
            </motion.div>
          </button>

          <AnimatePresence>
            {active === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p
                  className="
                    px-6 pb-5
                    text-right
                    text-white/70
                    leading-loose
                    break-words
                    [unicode-bidi:plaintext]
                  "
                >
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}