import { Link } from "react-router-dom";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Globe,
  Clock3,
  Star,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    title: "Qaida Course",
    subtitle: "Perfect For Beginners",
    price: "£25",
    oldPrice: "£30",
    duration: "5 Days / Week • 30 Minutes",
    badge: "Starter",
    popular: false,
    color: "yellow",
    features: [
      "1-on-1 Live Quran Classes",
      "Basic Tajweed Rules",
      "Islamic Studies Included",
      "How To Perform Salah",
      "Weekly Progress Tracking",
    ],
  },

  {
    title: "Quran With Tajweed",
    subtitle: "Most Popular Program",
    price: "£40",
    oldPrice: "£45",
    duration: "5 Days / Week • 1 Hour",
    badge: "Most Popular",
    popular: true,
    color: "yellow",
    features: [
      "Advanced Tajweed Training",
      "Personal Quran Tutor",
      "Islamic Studies + Namaz",
      "Flexible Scheduling",
      "Monthly Performance Reports",
    ],
  },

  {
    title: "Free Trial",
    subtitle: "Experience Before Joining",
    price: "Free",
    oldPrice: "",
    duration: "3 Days Free Trial Classes",
    badge: "Free Access",
    popular: false,
    color: "green",
    features: [
      "Try Before You Pay",
      "1-on-1 Live Sessions",
      "Meet Professional Teachers",
      "No Commitment Required",
      "Parent Satisfaction Guaranteed",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[140px] rounded-full" />

      {/* HERO */}
      <section className="relative z-10 pt-28 pb-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          {/* TOP BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-yellow-400/10
              border
              border-yellow-400/20
              text-yellow-300
              text-sm
              mb-8
            "
          >
            <Sparkles className="w-4 h-4" />
            Affordable International Quran Education
          </div>

          {/* TITLE */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              leading-none
            "
          >
            Transparent
            <span className="block text-yellow-400 mt-2">
              Pricing
            </span>
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-8
              text-zinc-400
              max-w-3xl
              mx-auto
              text-lg
              leading-relaxed
            "
          >
            Premium online Quran education with flexible schedules,
            certified teachers, and affordable plans designed for
            students and families worldwide.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

            {[
              {
                title: "10K+",
                subtitle: "Students",
              },
              {
                title: "50+",
                subtitle: "Countries",
              },
              {
                title: "24/7",
                subtitle: "Class Availability",
              },
              {
                title: "4.9/5",
                subtitle: "Student Rating",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                "
              >

                <h3 className="text-3xl font-black text-yellow-400">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-2">
                  {item.subtitle}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PURPOSE SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-24">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-10
            md:p-14
          "
        >

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-400/10 blur-[120px]" />

          <div className="relative z-10">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-yellow-400/10
                border
                border-yellow-400/20
                text-yellow-300
                text-sm
                mb-6
              "
            >
              <ShieldCheck className="w-4 h-4" />
              Why We Charge Fees
            </div>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                leading-tight
                mb-8
              "
            >
              The Purpose Behind
              <span className="block text-yellow-400">
                Our Pricing
              </span>
            </h2>

            <p
              className="
                text-zinc-300
                leading-relaxed
                text-lg
              "
            >
              We do not charge fees for teaching the Holy Quran itself,
              because the Quran is a sacred blessing from Allah for all
              المسلمين. Our fees help support the professional services
              and modern systems required to deliver high-quality online
              Quran education worldwide.

              <br />
              <br />

              These charges allow us to maintain qualified male and female
              Quran teachers, provide one-on-one live classes, flexible
              scheduling, modern learning platforms, student progress
              tracking, and a secure learning environment for children
              and adults globally.

              <br />
              <br />

              Our mission is to spread Quranic knowledge with sincerity,
              professionalism, excellence, and accessibility for students
              across the world.
            </p>

          </div>

        </div>

      </section>

      {/* PRICING CARDS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, i) => (

            <div
              key={i}
              className={`
                relative
                overflow-hidden
                rounded-[36px]
                border
                backdrop-blur-2xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2

                ${
                  plan.popular
                    ? "border-yellow-400 bg-yellow-400/[0.05] shadow-[0_0_60px_rgba(250,204,21,0.18)] scale-[1.02]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    top-6
                    right-6
                    px-4
                    py-2
                    rounded-full
                    bg-yellow-400
                    text-black
                    text-xs
                    font-black
                    shadow-[0_0_20px_rgba(250,204,21,0.35)]
                  "
                >
                  MOST POPULAR
                </div>
              )}

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-yellow-400/10 blur-[100px]" />

              <div className="relative z-10">

                {/* BADGE */}
                <div
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    mb-6

                    ${
                      plan.color === "green"
                        ? "bg-green-500/10 text-green-300 border border-green-500/20"
                        : "bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                    }
                  `}
                >
                  <Star className="w-4 h-4" />
                  {plan.badge}
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black mb-2">
                  {plan.title}
                </h3>

                <p className="text-zinc-400 mb-8">
                  {plan.subtitle}
                </p>

                {/* PRICE */}
                <div className="mb-8">

                  <div className="flex items-end gap-3">

                    <span
                      className={`
                        text-6xl
                        font-black

                        ${
                          plan.color === "green"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }
                      `}
                    >
                      {plan.price}
                    </span>

                    {plan.oldPrice && (
                      <span className="text-zinc-500 line-through text-2xl mb-2">
                        {plan.oldPrice}
                      </span>
                    )}

                  </div>

                  <p className="text-zinc-400 mt-3">
                    {plan.duration}
                  </p>

                </div>

                {/* FEATURES */}
                <div className="space-y-4 mb-10">

                  {plan.features.map((feature, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

                      <div
                        className={`
                          w-6
                          h-6
                          rounded-full
                          flex
                          items-center
                          justify-center
                          mt-0.5
                          flex-shrink-0

                          ${
                            plan.color === "green"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-400/20 text-yellow-400"
                          }
                        `}
                      >
                        <Check className="w-4 h-4" />
                      </div>

                      <span className="text-zinc-300 leading-relaxed">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                {/* BUTTON */}
                <Link
                  to="/trial"
                  className={`
                    group
                    w-full
                    py-5
                    rounded-2xl
                    font-black
                    text-lg
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition-all
                    duration-300

                    ${
                      plan.color === "green"
                        ? "bg-green-500 hover:bg-green-400 text-white"
                        : "bg-yellow-400 hover:bg-yellow-300 text-black"
                    }
                  `}
                >
                  {plan.color === "green"
                    ? "Start Free Trial"
                    : "Book Free Trial"}

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >

          {[
            {
              icon: Globe,
              title: "International ISLAMIC CENTER",
              desc: "Students from more than 50 countries trust our Quran learning platform.",
            },

            {
              icon: Clock3,
              title: "Flexible Timings",
              desc: "24/7 scheduling options designed for students worldwide.",
            },

            {
              icon: ShieldCheck,
              title: "Trusted Teachers",
              desc: "Certified male and female Quran tutors with professional experience.",
            },
          ].map((item, i) => {

            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-yellow-400/10
                    border
                    border-yellow-400/20
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </section>

    </div>
  );
}