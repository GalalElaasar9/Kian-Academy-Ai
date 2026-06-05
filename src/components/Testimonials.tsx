import { motion } from "framer-motion";

import opinion from "@/assets/Testimonials/opinion.jpeg";
import opinion2 from "@/assets/Testimonials/opinion2.jpeg";
import opinion3 from "@/assets/Testimonials/opinion3.jpeg";
import opinion4 from "@/assets/Testimonials/opinion4.jpeg";
import opinion5 from "@/assets/Testimonials/opinion5.jpeg";
import opinion6 from "@/assets/Testimonials/opinion6.jpeg";
import opinion7 from "@/assets/Testimonials/opinion7.jpeg";
import opinion8 from "@/assets/Testimonials/opinion8.jpeg";
import opinion9 from "@/assets/Testimonials/opinion9.jpeg";

const testimonials = [
  {
    id:1,
    name: "نوال السيد",
    text: " بصراحه محتوى الكورس كان كويس اوى وفرق معايا كتير خصوصا التطبيق العملى وال Projects اللى اشتغلنا عليها..اتعلمنا نحلل الداتا اللى موجوده ب استخدام tools كتير ومختلفه وبتسهل علينا فهم الداتا وكتابة التقرير ف الاخر. بالنسبه للانستراكتور ف كان شرحه كويس وكان بيطبق معانا عملى ودا كان أفضل جزء وطبعا ارشح كورسات كيان كلها ل أى حد عموما 😍💜",
    image: opinion,
  },
  {
    id:2,
    name: "رويدا سمير العناني",
    text: "المكان كويس جدا واول مره روحت شوفت  المعامله وكانت كويسه جدا حتى طريقه الدفع بجد مش حاسه بالضغط ودي اكتر نقطه كنت قلقانه منها اوى اوىبس بجد المكان كويس والمعامله والناس ونضافه المكان بالنسبه لشرح البشمهندس معانا  بجد شرحه كويس جدا جدا وبيبسط الشرح بطريقه كويسه اوى واي حد بيغلط مبيزهقش وبيفضل معانا ف هو بصراحه مشاء الله عليه احسن من ميت دكتور جامعه 😂 وانى ارشح المكان لحد اكيد طبعا اى حد هيجى هيتعلم وهيفهم وهيبقى فاهم المجال كويس ❤️",
    image: opinion3,
  },
  {
    id:3,
    name: "عبدالسلام محمد عبدالسلام",
    text: "في مكان اسمه كيان بدأت الحكاية خطوة جديدة وحلم جوايا علم وخبرة في كل ثانية وطريق واضح للي جاي قدّاميا كورس داتا… مش بس كلام ده فهم وعلم ونظام تمام من أول خطوة لحد النهاية وأنا ماشي بثقة في كل بداية والفضل يرجع لمدرب مميز المهندس أحمد مادح، علمه محفّز بأسلوب سهل وقلب صبور يوصل المعلومة بكل سرور والأوبريشن دايمًا في تنظيم متابعة ودعم بشكل عظيم كل حاجة ماشية بحساب وده اللي يخلّي المكان ليه طابع خاص في كيان اتعلمت أكون أفهم وأحلل وأشوف الكون ولو حد بيسأل أروح فين هقول كيان… من غير نقاش",
    image: opinion4,
  },
  {
    id:4,
    name: "سارة شحاتة عبدالعظيم",
    text: "الكورس جميل جداً كل حاجة مدروسة وتحفة واكيد ارشح أنه ياخد الكورس في كيان",
    image: opinion2,
  },
  {
    id:5,
    name: "عمر اشرف محمد محمد",
    text: "الكورس كويس وبشمهندس احمد شرحه حلو وكيان رقم واحد ف الزقازيق",
    image: opinion5,
  },
  {
    id:6,
    name: "محمد صلاح",
    text: "ممتاز خصوصا مع بشمهندس احمد مادح وشكرا جدا لمتابعتكم معانا طول فترة الكورس",
    image: opinion6,
  },
  {
    id:7,
    name: "بسنت سامي حمدي محمد",
    text: "الكورس جميل جدا واستفادة كتير بصراحه وانتو من احسن الناس الي تعملت معاها  والمكان جميل  بصراحه",
    image: opinion7,
  },
  {
    id:8,
    name: "نورهان محمد سعد",
    text: "الكورس كويس جداً وكل حاجه مدروسه وتحفه واكيد ارشح انو ياخدوا الكورس ف كيان 😍",
    image: opinion8,
  },
  {
    id:9,
    name: "ابراهيم محمد ابراهيم",
    text: "بصراحه كل حاجه تمام والبشمهندس احمد مادح شرحو حلو والمعامله حلوه  والمكان كويس",
    image: opinion9,
  },
];
import { SubscribeButton } from './SubscribeButton'
import SectionHeader from './SectionHeader'
import Section from "./Section";

export default function Testimonials() {
  return (
    <Section>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Student Reviews"
            title="Real feedback from our students during their learning journey"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft"
              >
                <div className="text-accent text-lg mb-4 tracking-widest">★★★★★</div>
                <p className="text-foreground/85 mb-6 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full overflow-hidden">
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>
  )
}
