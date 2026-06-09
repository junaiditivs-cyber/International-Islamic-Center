import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Heart,
  ScrollText,
  Award,
  Clock3,
  Users,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Noorani Qaidah",
    subtitle: "Foundation Course",
    description:
      "Build a strong Quranic foundation through Arabic letters, pronunciation, and basic Tajweed with interactive guided lessons.",
    icon: BookOpen,
    duration: "4 - 6 Weeks",
    level: "Beginner",
    age: "5+ Years",
    features: [
      "Letter Recognition",
      "Makharij Practice",
      "Basic Tajweed",
      "Interactive Sessions",
    ],
    image:
      "https://images.unsplash.com/photo-1584260269785-5028448ebf37?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    title: "Hifzul Quran",
    subtitle: "Memorization Program",
    description:
      "A structured memorization journey designed with revision systems, retention techniques, and personal guidance.",
    icon: Heart,
    duration: "6 - 24 Months",
    level: "All Levels",
    age: "6+ Years",
    features: [
      "Daily Memorization",
      "Smart Revision",
      "Progress Tracking",
      "1-on-1 Guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    title: "Tafsir & Translation",
    subtitle: "Understanding the Quran",
    description:
      "Explore the meanings, context, wisdom, and practical guidance behind the verses of the Holy Quran.",
    icon: ScrollText,
    duration: "Ongoing",
    level: "Intermediate",
    age: "10+ Years",
    features: [
      "Verse-by-Verse Study",
      "Historical Context",
      "Arabic Understanding",
      "Life Applications",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    title: "Tajweed Mastery",
    subtitle: "Perfect Recitation",
    description:
      "Master advanced Tajweed rules and beautify your recitation exactly as the Quran was revealed.",
    icon: Award,
    duration: "8 - 12 Weeks",
    level: "Advanced",
    age: "8+ Years",
    features: [
      "Advanced Rules",
      "Error Correction",
      "Beautification",
      "Voice Improvement",
    ],
    image:
      "https://images.unsplash.com/photo-1516450360452-6b9a2c4c3e6e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[140px] rounded-full" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Premium Islamic Education
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            Sacred Quran
            <span className="block text-yellow-400 mt-2">
              Learning Paths
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-zinc-400 text-lg leading-relaxed">
            Experience beautifully structured Quran education with expert
            teachers, personalized learning, and a spiritually uplifting
            environment.
          </p>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-10">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCourse(course)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-yellow-400/30
                  transition-all
                  duration-500
                  cursor-pointer
                  shadow-2xl
                  hover:shadow-[0_0_60px_rgba(250,204,21,0.12)]
                "
              >

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-1000
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* ICON */}
                  <div className="absolute top-6 right-6">
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-yellow-400/20
                        border
                        border-yellow-400/30
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        shadow-[0_0_30px_rgba(250,204,21,0.25)]
                      "
                    >
                      <Icon className="w-8 h-8 text-yellow-300" />
                    </div>
                  </div>

                  {/* LEVEL */}
                  <div className="absolute left-6 bottom-6">
                    <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-sm text-white">
                      {course.level}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">

                  {/* TOP */}
                  <div className="flex items-start justify-between mb-5">

                    <div>
                      <h2 className="
                        text-3xl
                        font-bold
                        tracking-tight
                        group-hover:text-yellow-300
                        transition-colors
                      ">
                        {course.title}
                      </h2>

                      <p className="text-yellow-400 mt-1 font-medium">
                        {course.subtitle}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-zinc-500 text-sm">
                        Duration
                      </p>

                      <p className="font-semibold text-white">
                        {course.duration}
                      </p>
                    </div>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="
                    text-zinc-400
                    leading-relaxed
                    text-[15px]
                    mb-6
                  ">
                    {course.description}
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-3 mb-8">

                    {course.features.map((feature, i) => (
                      <span
                        key={i}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-yellow-400/10
                          border
                          border-yellow-400/20
                          text-yellow-300
                          text-xs
                          font-medium
                        "
                      >
                        {feature}
                      </span>
                    ))}

                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-3 gap-4 mb-8">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <Clock3 className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm text-zinc-400">Duration</p>
                      <p className="font-semibold mt-1">{course.duration}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm text-zinc-400">Age</p>
                      <p className="font-semibold mt-1">{course.age}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm text-zinc-400">Level</p>
                      <p className="font-semibold mt-1">{course.level}</p>
                    </div>

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    className="
                      w-full
                      py-4
                      rounded-2xl
                      bg-yellow-400
                      text-black
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
                      active:scale-95
                    "
                  >
                    Explore Course
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>

        {selectedCourse && (

          <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="
                w-full
                max-w-3xl
                bg-zinc-950
                border
                border-white/10
                rounded-[36px]
                overflow-hidden
                shadow-[0_0_80px_rgba(0,0,0,0.8)]
              "
            >

              {/* IMAGE */}
              <div className="relative h-80">

                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CLOSE */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="
                    absolute
                    top-6
                    right-6
                    w-12
                    h-12
                    rounded-full
                    bg-black/50
                    backdrop-blur-xl
                    border
                    border-white/10
                    text-white
                    hover:bg-yellow-400
                    hover:text-black
                    transition-all
                  "
                >
                  ✕
                </button>

              </div>

              {/* CONTENT */}
              <div className="p-10">

                <p className="text-yellow-400 font-medium mb-2">
                  {selectedCourse.subtitle}
                </p>

                <h2 className="text-5xl font-black tracking-tight mb-6">
                  {selectedCourse.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed text-lg mb-10">
                  {selectedCourse.description}
                </p>

                {/* INFO */}
                <div className="grid grid-cols-3 gap-4 mb-10">

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <Clock3 className="w-7 h-7 text-yellow-400 mx-auto mb-3" />
                    <p className="text-zinc-500 text-sm">Duration</p>
                    <p className="font-semibold mt-1">
                      {selectedCourse.duration}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <Users className="w-7 h-7 text-yellow-400 mx-auto mb-3" />
                    <p className="text-zinc-500 text-sm">Age Group</p>
                    <p className="font-semibold mt-1">
                      {selectedCourse.age}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <Star className="w-7 h-7 text-yellow-400 mx-auto mb-3" />
                    <p className="text-zinc-500 text-sm">Level</p>
                    <p className="font-semibold mt-1">
                      {selectedCourse.level}
                    </p>
                  </div>

                </div>

                {/* FEATURES */}
                <div className="mb-10">

                  <h3 className="text-2xl font-bold mb-6">
                    What You'll Learn
                  </h3>

                  <div className="space-y-4">

                    {selectedCourse.features.map(
                      (feature: string, i: number) => (
                        <div
                          key={i}
                          className="
                            flex
                            items-center
                            gap-4
                            bg-white/5
                            border
                            border-white/10
                            rounded-2xl
                            p-4
                          "
                        >
                          <div className="
                            w-8
                            h-8
                            rounded-full
                            bg-yellow-400
                            text-black
                            flex
                            items-center
                            justify-center
                            font-bold
                          ">
                            ✓
                          </div>

                          <p className="text-zinc-300">
                            {feature}
                          </p>
                        </div>
                      )
                    )}

                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col md:flex-row gap-4">

                  <button
                    onClick={() =>
                      (window.location.href = "/enroll")
                    }
                    className="
                      flex-1
                      py-4
                      rounded-2xl
                      bg-yellow-400
                      text-black
                      font-bold
                      hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
                      transition-all
                    "
                  >
                    Enroll Now
                  </button>

                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="
                      flex-1
                      py-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      text-white
                      hover:bg-white/10
                      transition-all
                    "
                  >
                    Close
                  </button>

                </div>

              </div>
            </motion.div>
          </div>
        )}

      </AnimatePresence>
    </div>
  );
}