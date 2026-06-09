import {
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock3,
  GraduationCap,
} from "lucide-react";

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { name: "Germany", flag: "🇩🇪", region: "Europe" },
  { name: "France", flag: "🇫🇷", region: "Europe" },
  { name: "Switzerland", flag: "🇨🇭", region: "Europe" },
  { name: "Netherlands", flag: "🇳🇱", region: "Europe" },
  { name: "Sweden", flag: "🇸🇪", region: "Europe" },
  { name: "United States", flag: "🇺🇸", region: "North America" },
  { name: "Canada", flag: "🇨🇦", region: "North America" },
  { name: "Australia", flag: "🇦🇺", region: "Oceania" },
  { name: "UAE", flag: "🇦🇪", region: "Middle East" },
  { name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
  { name: "Qatar", flag: "🇶🇦", region: "Middle East" },
  { name: "Kuwait", flag: "🇰🇼", region: "Middle East" },
  { name: "Pakistan", flag: "🇵🇰", region: "South Asia" },
  { name: "India", flag: "🇮🇳", region: "South Asia" },
  { name: "Malaysia", flag: "🇲🇾", region: "Southeast Asia" },
];

export default function Location() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* BIG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-400/10 blur-[160px] rounded-full" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          {/* BADGE */}
          <div
            className="
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
            "
          >
            <Sparkles className="w-4 h-4" />
            Trusted By Students Worldwide
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
            Global
            <span className="block text-yellow-400 mt-2">
              Quran ISLAMIC CENTER
            </span>
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-zinc-400
              text-lg
              leading-relaxed
              max-w-3xl
              mx-auto
              mt-8
            "
          >
            Delivering professional online Quran education to students
            across Europe, North America, the Middle East, Asia,
            and beyond with certified teachers and flexible schedules.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

            {[
              {
                number: "10K+",
                label: "Students",
              },

              {
                number: "50+",
                label: "Countries",
              },

              {
                number: "24/7",
                label: "Availability",
              },

              {
                number: "4.9/5",
                label: "Student Rating",
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

                <h3 className="text-4xl font-black text-yellow-400">
                  {item.number}
                </h3>

                <p className="text-zinc-400 mt-2">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* COUNTRIES SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

        {/* HEADING */}
        <div className="text-center mb-16">

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
            <Globe className="w-4 h-4" />
            International Presence
          </div>

          <h2 className="text-4xl md:text-5xl font-black">
            Countries We
            <span className="text-yellow-400"> Serve</span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto text-lg">
            Our online Quran classes are trusted by families and students
            around the world.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {countries.map((country, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-400/30
                hover:bg-yellow-400/[0.03]
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 blur-[80px]" />

              <div className="relative z-10">

                {/* FLAG */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-5xl
                    mb-8
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  {country.flag}
                </div>

                {/* COUNTRY */}
                <h3 className="text-2xl font-black mb-2">
                  {country.name}
                </h3>

                {/* REGION */}
                <p className="text-yellow-400 font-medium mb-5">
                  {country.region}
                </p>

                {/* TEXT */}
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Premium online Quran classes available for students
                  in {country.name}.
                </p>

                {/* LINE */}
                <div className="mt-8 h-[2px] w-14 bg-yellow-400 rounded-full group-hover:w-24 transition-all duration-500" />

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* STUDY FROM ANYWHERE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

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
            md:p-16
          "
        >

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

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
                <GraduationCap className="w-4 h-4" />
                Learn From Anywhere
              </div>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  leading-tight
                "
              >
                Study Quran
                <span className="block text-yellow-400">
                  Worldwide
                </span>
              </h2>

              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                  mt-8
                "
              >
                Whether you are living in Europe, America, the Middle East,
                or Asia — our ISLAMIC CENTER brings authentic Quran education
                directly to your home through modern online learning.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                {[
                  {
                    icon: Clock3,
                    title: "24/7 Classes",
                  },

                  {
                    icon: ShieldCheck,
                    title: "Certified Teachers",
                  },

                  {
                    icon: Users,
                    title: "Male & Female Tutors",
                  },

                  {
                    icon: Globe,
                    title: "Global Access",
                  },
                ].map((item, i) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >

                      <div
                        className="
                          w-12
                          h-12
                          rounded-2xl
                          bg-yellow-400/10
                          border
                          border-yellow-400/20
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>

                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* RIGHT CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-yellow-400/20
                bg-gradient-to-br
                from-yellow-400/10
                to-yellow-300/[0.03]
                p-10
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-400/20 blur-[100px]" />

              <div className="relative z-10">

                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-yellow-400
                    text-black
                    flex
                    items-center
                    justify-center
                    mb-8
                    shadow-[0_0_40px_rgba(250,204,21,0.35)]
                  "
                >
                  <Users className="w-10 h-10" />
                </div>

                <h3 className="text-5xl font-black text-yellow-400">
                  10,000+
                </h3>

                <p className="text-2xl font-bold mt-3">
                  Global Students
                </p>

                <p className="text-zinc-300 leading-relaxed mt-6">
                  Thousands of students and families trust our online Quran
                  ISLAMIC CENTER for professional Islamic education, flexible
                  schedules, and certified Quran tutors.
                </p>

                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    mt-10
                    bg-yellow-400
                    hover:bg-yellow-300
                    text-black
                    font-bold
                    px-8
                    py-4
                    rounded-2xl
                    transition-all
                  "
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 pb-28 px-6">

        <div
          className="
            max-w-5xl
            mx-auto
            text-center
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-10
            md:p-16
            overflow-hidden
            relative
          "
        >

          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/10 blur-[120px]" />

          <div className="relative z-10">

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
              "
            >
              Ready To Begin
              <span className="block text-yellow-400 mt-2">
                Your Quran Journey?
              </span>
            </h2>

            <p
              className="
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-2xl
                mx-auto
                mt-8
              "
            >
              Join thousands of students learning Quran online
              from the comfort of their homes.
            </p>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                bg-yellow-400
                hover:bg-yellow-300
                text-black
                font-black
                px-10
                py-5
                rounded-2xl
                transition-all
                text-lg
              "
            >
              Book Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}