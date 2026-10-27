import {
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";



import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type CountryMarker = {
  name: string;
  coordinates: [number, number];
};

const countries: CountryMarker[] = [
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "USA", coordinates: [-98.5795, 39.8283] },
  { name: "UK", coordinates: [-3.436, 55.3781] },
  { name: "UAE", coordinates: [54.3773, 24.4539] },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  { name: "Pakistan", coordinates: [69.3451, 30.3753] },
];

const reviews = [
  {
    country: "Parent from UK",
    review:
      "The teacher is patient and professional. My son improved his Quran reading and confidence within a few weeks.",
  },
  {
    country: "Parent from USA",
    review:
      "Flexible timings helped our family a lot. The trial class was smooth and very well organized.",
  },
  {
    country: "Parent from UAE",
    review:
      "My daughter enjoys her Quran class. The tutor focuses on Tajweed and Islamic manners.",
  },
];

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "3 Days Free Trial",
    text: "Experience before you decide.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    text: "Trained Quran teachers.",
  },
  {
    icon: MessageCircle,
    title: "Parent Feedback",
    text: "Regular progress support.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    text: "Classes that fit your schedule.",
  },
];

export default function GlobalParentMapReviews() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_35%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.12)] backdrop-blur-xl">
             
            Parent Reviews
          </div>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Trusted By Parents
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Across The World
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Families from different countries trust our ISLAMIC CENTER for Quran
            learning, Tajweed, Salah, Duas, and Islamic manners in a safe and
            structured online environment.
          </p>
        </div>

        {/* Real Map Panel */}
        <div className="relative overflow-hidden rounded-[52px] border border-yellow-400/25 bg-white/[0.04] p-4 shadow-[0_0_110px_rgba(0,0,0,0.50)] backdrop-blur-2xl md:p-6">
          <div className="relative overflow-hidden rounded-[42px] border border-yellow-400/15 bg-black">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),transparent_55%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

            <div className="relative z-10 h-[430px] md:h-[540px]">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 145,
                  center: [15, 25],
                }}
                className="h-full w-full"
              >
                <defs>
                  <filter id="goldGlow">
                    <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <linearGradient id="goldStroke" x1="0" x2="1">
                    <stop offset="0%" stopColor="#facc15" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#facc15" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#facc15" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <Geographies geography={geoUrl}>
                  {({ geographies }: any) =>
                    geographies.map((geo: any) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: "#14110A",
                            stroke: "rgba(250,204,21,0.20)",
                            strokeWidth: 0.45,
                            outline: "none",
                          },
                          hover: {
                            fill: "#241C08",
                            stroke: "rgba(250,204,21,0.45)",
                            strokeWidth: 0.6,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#241C08",
                            outline: "none",
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Connection lines */}
                <path
                  d="M245 210 C360 125, 500 135, 590 175"
                  fill="none"
                  stroke="url(#goldStroke)"
                  strokeWidth="2"
                  filter="url(#goldGlow)"
                />

                <path
                  d="M590 175 C690 145, 790 180, 890 230"
                  fill="none"
                  stroke="url(#goldStroke)"
                  strokeWidth="2"
                  filter="url(#goldGlow)"
                />

                <path
                  d="M590 175 C635 245, 650 285, 635 330"
                  fill="none"
                  stroke="url(#goldStroke)"
                  strokeWidth="2"
                  filter="url(#goldGlow)"
                />

                {countries.map((country) => (
                  <Marker key={country.name} coordinates={country.coordinates}>
                    <g filter="url(#goldGlow)">
                      <circle r={8} fill="#facc15" opacity={0.25} />
                      <circle r={4} fill="#facc15" />
                    </g>

                    <foreignObject x="-54" y="-44" width="116" height="36">
                      <div className="flex items-center justify-center gap-2 rounded-full border border-yellow-400/45 bg-black/80 px-3 py-2 text-xs font-black text-white shadow-[0_0_25px_rgba(250,204,21,0.24)] backdrop-blur-xl">
                        <MapPin className="h-4 w-4 text-yellow-400" />
                        {country.name}
                      </div>
                    </foreignObject>
                  </Marker>
                ))}
              </ComposableMap>
            </div>

            <div className="absolute bottom-6 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-full border border-yellow-400/25 bg-black/75 px-6 py-3 text-center text-xs font-black text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.18)] backdrop-blur-xl md:w-fit md:text-sm">
              Families trust us before admission through our 3-day free trial
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {reviews.map((item) => (
            <div
              key={item.country}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-yellow-400/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <Quote className="h-10 w-10 text-yellow-400/70" />

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="min-h-[105px] text-base leading-8 text-zinc-200">
                  “{item.review}”
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-yellow-400/50 via-yellow-400/10 to-transparent" />

                <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-yellow-400/25 bg-black/45 px-4 py-3 text-sm font-black text-yellow-300">
                  <Users className="h-5 w-5" />
                  {item.country}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-4">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;

            return (
              <div
                key={badge.title}
                className="flex items-center gap-4 rounded-[26px] border border-yellow-400/20 bg-yellow-400/10 p-5 shadow-[0_0_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-yellow-400/45"
              >
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.35)]">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-base font-black text-white">
                    {badge.title}
                  </h4>
                  <p className="mt-1 text-sm text-zinc-400">{badge.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}