import { motion } from "framer-motion";
import {
  Sigma,
  SlidersHorizontal,
  BarChart3,
  Bot,
  Network,
  MessageSquareCode,
  Eye,
  Sparkles,
  Cpu,
  Cloud,
  Rocket,
} from "lucide-react";

import { SubscribeButton } from "@/components/SubscribeButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CountdownTimer } from "@/components/CountdownTimer";

import Projects from "@/components/Projects";

// Project 1
import mainImage from "@/assets/Project_1/main-image.jpeg";
import subImage1 from "@/assets/Project_1/image_1.jpeg";
import subImage2 from "@/assets/Project_1/image_2.jpeg";
import subImage3 from "@/assets/Project_1/image_3.jpeg";
import subImage4 from "@/assets/Project_1/image_4.jpeg";
import subImage5 from "@/assets/Project_1/image_5.jpeg";
import subImage6 from "@/assets/Project_1/image_6.jpeg";
import subImage7 from "@/assets/Project_1/image_7.jpeg";


// Project 2
import mainImageProject_2 from "@/assets/Project_2/main-image-project_2.jpeg";
import subImageProject_2 from "@/assets/Project_2/image_1.jpeg";

// Project 3
import mainImageProject_3 from "@/assets/Project_3/main-image-project_3.jpeg";
import subImageProject_3 from "@/assets/Project_3/image_1.jpeg";
import Accordion from "@/components/Accordion";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import SectionHeader from "@/components/SectionHeader";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import ProjectWillBuild from "@/components/ProjectsWillBuild";
import Tools from "@/components/Tools";
import WhoIsThisFor from "@/components/WhoIsThisFor";

const whyLearn = [
  {
    id:"01",
    title: "Future-Proof Skill 🤖",
    desc: "الذكاء الاصطناعي بقى داخل في كل حاجة تقريبًا، والطلب على الناس اللي فاهمة AI  بيزيد كل يوم.",
  },
  {
    id:"02",
    title: "Work Smarter ⚡",
    desc:"هتتعلم إزاي تستخدم الـ AI عشان تسرع شغلك وتزود إنتاجيتك وتنجز مهام كانت بتاخد ساعات في دقائق."
  },
  {
    id:"03",
    title: "Huge Career Opportunities 💼",
    desc:"المجال فاتح فرص كتير جدًا سواء AI Engineer أو Machine Learning Engineer أو Data Scientist أو AI Specialist."
  },
  {
    id:"04",
    title: "Build Real Projects",
    desc: "هتشتغل على مشاريع حقيقية تطبق فيها كل اللي اتعلمته.",
  },
  {
    id:"05",
    title: "Freelancing Opportunities 🌍",
    desc:"تقدر تستخدم مهاراتك في تنفيذ مشاريع AI للعملاء والشركات حول العالم."
  },
  {
    id:"06",
    title: " Technology Of The Future 🔥",
    desc:"الـ AI مش مجرد مجال جديد، ده مستقبل التكنولوجيا كله تقريبًا."
  },
]

const courseTopics = [
  {
    icon: <Sigma size={30} />,
    title: "Mathematics For Data Science",
    desc: "Build a strong foundation in linear algebra, statistics, and probability to understand how data science algorithms work under the hood.",
  },
  {
    icon: <img width={30} height={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
    title: "Python For Data Science",
    desc: "Learn Python programming from scratch and use powerful libraries like NumPy and Pandas to analyze and manipulate data efficiently.",
  },
  {
    icon: <img width={30} height={30} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />,
    title: "SQL",
    desc: "Master relational databases, SQL queries, joins, filtering, and aggregation to extract meaningful insights from structured data.",
  },
  {
    icon: <SlidersHorizontal size={30} />,
    title: "Data Preprocessing",
    desc: "Learn how to clean, transform, and prepare raw data by handling missing values, outliers, and inconsistencies.",
  },
  {
    icon: <BarChart3 size={30} />,
    title: "Data Visualization",
    desc: "Create powerful charts and dashboards using tools like Power BI and Matplotlib to communicate insights clearly and effectively.",
  },
  {
    icon: <Bot size={30} />,
    title: "Machine Learning",
    desc: "Understand core ML concepts and build predictive models using supervised and unsupervised learning techniques.",
  },
  {
    icon: <Network size={30} />,
    title: "Deep Learning",
    desc: "Dive into neural networks, CNNs, and RNNs to solve complex problems like image and sequence recognition.",
  },
  {
    icon: <MessageSquareCode size={30} />,
    title: "NLP",
    desc: "Explore Natural Language Processing to analyze, understand, and generate human language using AI techniques.",
  },
  {
    icon: <Eye size={30} />,
    title: "Computer Vision",
    desc: "Teach machines to interpret images and videos using techniques like object detection and image classification.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "Generative AI",
    desc: "Learn how modern AI models generate text, images, and content using transformers and large language models.",
  },
  {
    icon: <Cpu size={30} />,
    title: "AI Agents",
    desc: "Build autonomous AI systems that can reason, plan, and perform tasks with minimal human intervention.",
  },
  {
    icon: <Cloud size={30} />,
    title: "Microsoft Azure",
    desc: "Understand cloud computing fundamentals and deploy AI and data solutions using Microsoft Azure services.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Real World AI Applications",
    desc: "Apply everything you learned by building real-world AI projects and production-ready applications.",
  },
];

const projects = [
  {
    id: 1,
    img: mainImage,
    subImages: [
      { id: 1, subImage: subImage1 },
      { id: 2, subImage: subImage2 },
      { id: 3, subImage: subImage3 },
      { id: 4, subImage: subImage4 },
      { id:5 , subImage:subImage5 },
      { id:6 , subImage:subImage6 },
      { id:7 , subImage:subImage7 },
    ],
  },
  { id: 2, img: mainImageProject_2, subImages: [{ id: 1, subImage: subImageProject_2 }] },
  { id: 3, img: mainImageProject_3, subImages: [{ id: 1, subImage: subImageProject_3 }] },
];

export default function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppButton />

      {/* HERO */}
      <Hero/>
      {/* Features */}
      <Features/>
      {/* Why Start With Programming Fundamentals? */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="? Why Start With Programming Fundamentals" subtitle="" />
          <div className="grid md:grid-cols-2 gap-6 mb-14" dir="ltr">
            {whyLearn.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-left" dir="rtl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <SubscribeButton />
        </div>
      </Section>

      {/* COURSE CONTENT */}
      <Section id="content">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="Roadmap" title="What You’ll Learn" subtitle="" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 text-left" dir="ltr">
            {courseTopics.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 hover:border-primary/40 transition-all shadow-soft"
              >
                <div className="text-sm font-mono text-primary-glow mb-4 tracking-wider">
                  {t.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-glow transition-colors">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>
      {/* TOOLS */}
      <Tools/>
      {/* PROJECT WILL YOU BUILD */}
      <ProjectWillBuild />
      {/* CAREER OPPORTUNITIES */}
      <Career />
      {/* WHO IS THIS FOR */}
      <WhoIsThisFor />
      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PROJECTS */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Student Projects"
            title="Projects Built By Our Students"
            subtitle="Real projects students build during the course "
          />
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-elegant bg-card"
              >
                <Projects project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>

      {/* WHY KIAN */}
      <Section className="bg-card/20" id="why-kian">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="About Us"
            subtitle=""
            title="Kian Academy — Learn Tech Skills The Practical Way"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🎯",
                title: "منهج عملي 100%",
                desc: "تدريب عملى على مشاريع حقيقية خلال فترة الكورس بالإضافة إلى تدريب عملى لمدة شهرين فى شركات البرمجة",
              },
              {
                icon: "👨‍🏫",
                title: "مدربون محترفون ومينتورز متخصصون",
                desc: "فريق من المبرمجين أصحاب الخبرة في كبرى الشركات التقنية بالإضافة لمينتورز لمساعدتك خطوة بخطوة للوصول لأقصى إستفادة من الكورس.",
              },
              {
                icon: "🤝",
                title: "متابعة شخصية",
                desc: "كل طالب عندنا له اهتمام خاص ومتابعة مستمرة حتى الإحتراف بالإضافة لمتابعة مستمرة بعد إنتهاء الكورس.",
              },
              {
                icon: "🚀",
                title: "تأهيل لسوق العمل",
                desc: "نساعدك في بناء portfolio قوي والاستعداد لمقابلات الشركات.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-10">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              في <span className="text-gradient font-bold">أكاديمية كيان</span>، إحنا مش بنعلم برمجة
              بس — إحنا بنبني جيل جديد من المبرمجين القادرين على المنافسة محلياً وعالمياً. رسالتنا
              إن كل طالب يخرج من عندنا وعنده القدرة الحقيقية على تنفيذ مشاريع احترافية والدخول لسوق
              العمل بثقة.
            </p>
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>
      {/* Q & A */}
      <Section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto py-20 pt-0 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-2xl md:text-4xl font-black mb-6 leading-[1.1] tracking-tight"
              style={{ lineHeight: "1.5" }}
            >
              <span className="text-foreground">Start Your Programming Journey Today </span>
            </h1>
            <p className="text-lg md:text-[32px] text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              متضيعش وقت أكتر ، وابدأ دلوقت أبنى مستقبلك فى مجال البرمجة مع
              <span> Kian Academy </span>
            </p>
            <Accordion/>
            <div className="text-center mt-10">
              <SubscribeButton />
            </div>
          </motion.div>
        </div>
      </Section>
      <Section className="bg-card/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-primary shadow-glow mb-8"
          >
            <svg
              className="w-12 h-12 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </motion.div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
            ضماننا لك
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            ضمان استرداد 100%
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            بنضمنلك أنك هتعمل في الكورس اكتر من 5 مشاريع حقيقية ولو دا متنفذش هتسترد فلوسك بالكامل
            نهاية الكورس كمان زيادة عليه 1000 جنيه تعويضاً لوقتك
          </p>
          <SubscribeButton />
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="max-w-3xl mx-auto">
          {/* <SectionHeader tag="عرض محدود" title="العرض ينتهي خلال" /> */}
          <div className="mb-14">
            <CountdownTimer />
          </div>
        </div>
      </Section>

      <footer className="text-center py-10 text-muted-foreground border-t border-border text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
