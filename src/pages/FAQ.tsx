import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Phone,
  Globe,
  ShieldCheck,
  Star,
  GraduationCap,
  Clock3,
  Users,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What courses does your ISLAMIC CENTER offer?",
    answer:
      "Our Online Quran ISLAMIC CENTER provides complete Quran and Islamic education for children, teenagers, and adults worldwide. We offer Noorani Qaida for beginners, Quran Reading with Tajweed, Quran Memorization (Hifz), Quran Translation & Tafseer, Basic Islamic Studies, Daily Duas, Namaz Training, Kalmas, Hadith basics, and Arabic Language learning. Every course is designed according to the student’s age, learning level, and goals to ensure comfortable and effective online learning.",
  },
  {
    question: "How does the 3-Day Free Trial work?",
    answer:
      "We provide a completely free 3-day trial for all new students. During this trial, students attend live one-on-one online Quran classes with professional teachers and experience our real teaching system. Parents can evaluate the teacher’s behavior, communication, Tajweed correction, class environment, and overall teaching quality before joining regular classes.",
  },
  {
    question: "Can students select their own class timings?",
    answer:
      "Yes. Our ISLAMIC CENTER offers fully flexible schedules for students worldwide. Since we operate 24/7, students can choose timings according to their school, work, family routine, or timezone. We make Quran learning easy and convenient for families living in the UK, USA, Canada, Australia, Middle East, Europe, and many other countries.",
  },
  {
    question: "Do you provide male and female Quran teachers?",
    answer:
      "Yes. We provide both male and female Quran tutors according to the student's or parent's preference. All our teachers are experienced, qualified, and trained in online teaching methods to ensure a respectful, professional, and comfortable learning environment.",
  },
  {
    question: "Are classes suitable for children?",
    answer:
      "Absolutely. Our teachers specialize in teaching children using friendly, interactive, and engaging methods. Lessons are customized according to the child’s age and understanding level. We focus on patience, motivation, discipline, and confidence-building so children can enjoy learning Quran online comfortably.",
  },
  {
    question: "How do I enroll in your ISLAMIC CENTER?",
    answer:
      "Enrollment is very simple. You can fill out the registration form on our website, contact us through WhatsApp, or book your free trial directly. After receiving your details, our support team arranges suitable class timings and assigns a qualified teacher according to the student’s level and goals.",
  },
  {
    question: "What is included in your fee structure?",
    answer:
      "Our fees support the professional online learning services provided by the ISLAMIC CENTER including qualified teachers, one-on-one classes, student support, flexible scheduling, progress tracking, and online classroom management. We aim to provide affordable and high-quality Quran education for students worldwide.",
  },
  {
    question: "Do students receive certificates?",
    answer:
      "Yes. Students receive certificates after successfully completing selected Quran and Islamic courses. These certificates recognize their hard work, dedication, Tajweed improvement, memorization achievements, and overall learning progress. Our ISLAMIC CENTER follows professional educational standards to maintain authenticity and trust.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          {/* TAG */}
          <div className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-yellow-400/20
            bg-yellow-400/10
            text-yellow-300
            text-sm
            font-medium
            mb-8
          ">
            <Sparkles className="w-4 h-4" />
            Trusted International Quran ISLAMIC CENTER
          </div>

          {/* HEADING */}
          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            tracking-tight
          ">
            Frequently Asked
            <span className="block text-yellow-400">
              Questions
            </span>
          </h1>

          {/* TEXT */}
          <p className="
            mt-8
            text-zinc-400
            text-lg
            max-w-3xl
            mx-auto
            leading-relaxed
          ">
            Learn more about our online Quran classes, certified teachers,
            flexible schedules, free trial system, student support,
            and the complete learning experience we provide to students worldwide.
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-5 mt-16">

            {[
              {
                icon: Globe,
                title: "50+ Countries",
                desc: "Students Worldwide",
              },
              {
                icon: Users,
                title: "10,000+",
                desc: "Active Students",
              },
              {
                icon: GraduationCap,
                title: "Certified",
                desc: "Quran Teachers",
              },
              {
                icon: Clock3,
                title: "24/7",
                desc: "Flexible Timings",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-6
                  hover:border-yellow-400/20
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-yellow-400/10
                  border
                  border-yellow-400/20
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-5
                ">
                  <item.icon className="w-7 h-7 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-1">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">

        <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-5
          md:p-8
        ">

          {/* FAQS */}
          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  transition-all
                  duration-300
                  bg-white/[0.03]
                  border-white/10
                  hover:border-yellow-400/20
                "
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    gap-6
                    px-7
                    py-6
                    text-left
                  "
                >

                  <div className="flex items-start gap-5">

                    {/* NUMBER */}
                    <div className="
                      min-w-[55px]
                      h-[55px]
                      rounded-2xl
                      bg-yellow-400
                      text-black
                      font-black
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_30px_rgba(250,204,21,0.35)]
                    ">
                      0{index + 1}
                    </div>

                    {/* QUESTION */}
                    <div>

                      <h3 className="
                        text-xl
                        md:text-2xl
                        font-bold
                        leading-snug
                      ">
                        {faq.question}
                      </h3>

                      <p className="text-zinc-500 mt-1 text-sm">
                        Click to read detailed explanation
                      </p>

                    </div>

                  </div>

                  {/* ICON */}
                  <div className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    border
                    border-white/10
                    flex-shrink-0
                  ">
                    <ChevronDown
                      className={`
                        w-6
                        h-6
                        text-yellow-400
                        transition-transform
                        duration-300
                        ${openIndex === index ? "rotate-180" : ""}
                      `}
                    />
                  </div>

                </button>

                {/* ANSWER */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ${openIndex === index
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"}
                  `}
                >

                  <div className="
                    px-7
                    pb-7
                    pt-2
                    ml-[75px]
                  ">

                    <div className="
                      rounded-3xl
                      border
                      border-yellow-400/10
                      bg-yellow-400/[0.03]
                      p-6
                    ">

                      <p className="
                        text-zinc-300
                        leading-relaxed
                        text-[16px]
                      ">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* SUPPORT SECTION */}
        <div className="
          mt-16
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-yellow-400/20
          bg-gradient-to-br
          from-yellow-400/10
          to-yellow-300/5
          p-10
          md:p-14
          text-center
        ">

          {/* GLOW */}
          <div className="
            absolute
            top-0
            right-0
            w-72
            h-72
            bg-yellow-400/10
            blur-[120px]
          " />

          <div className="relative z-10">

            {/* ICON */}
            <div className="
              w-24
              h-24
              rounded-[30px]
              bg-yellow-400
              text-black
              flex
              items-center
              justify-center
              mx-auto
              shadow-[0_0_50px_rgba(250,204,21,0.45)]
              mb-8
            ">
              <ShieldCheck className="w-12 h-12" />
            </div>

            {/* TITLE */}
            <h2 className="
              text-4xl
              md:text-5xl
              font-black
              leading-tight
            ">
              Still Have
              <span className="block text-yellow-400">
                Questions?
              </span>
            </h2>

            {/* TEXT */}
            <p className="
              text-zinc-300
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
            ">
              Our support team is available 24/7 to help parents and students
              with admissions, class schedules, free trial bookings,
              and complete Quran learning guidance.
            </p>

            {/* BUTTONS */}
            <div className="
              flex
              flex-col
              sm:flex-row
              gap-5
              justify-center
              mt-10
            ">

              <a
                href="tel:+923431905776"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-10
                  py-5
                  rounded-2xl
                  bg-yellow-400
                  text-black
                  font-bold
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                  shadow-[0_0_40px_rgba(250,204,21,0.35)]
                "
              >
                <Phone className="w-6 h-6" />
                Call Us Now
              </a>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-yellow-400/20
                  bg-white/[0.04]
                  text-yellow-300
                  font-bold
                  hover:bg-yellow-400
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                <MessageCircle className="w-6 h-6" />
                Contact Support
              </button>

            </div>

            {/* TRUST BADGES */}
            <div className="
              flex
              flex-wrap
              justify-center
              gap-5
              mt-12
            ">

              {[
                "Certified Quran Tutors",
                "24/7 Flexible Timings",
                "Male & Female Teachers",
                "Worldwide Online Classes",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                  "
                >

                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

                  <span className="text-sm text-zinc-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}