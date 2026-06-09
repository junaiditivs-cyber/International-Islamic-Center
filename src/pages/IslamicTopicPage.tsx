import { useParams, Link } from "react-router-dom";
import {
  BookOpen,
  ScrollText,
  MoonStar
} from "lucide-react";

type Pillar = {
  slug: string;
  title: string;
  desc: string;
  icon: any;
  image: string;
};

// Pillars data
const pillars: Pillar[] = [
  {
    slug: "quran",
    title: "Quran",
    desc: "Reading, Tajweed, Hifz, pronunciation, fluency and love for the Book of Allah.",
    icon: BookOpen,
    image: "/images/topics/quran-bg.jpg",
  },
  {
    slug: "sunnah",
    title: "Sunnah",
    desc: "Daily duas, Islamic manners, kindness, respect, Prophet stories and beautiful character.",
    icon: ScrollText,
    image: "/images/topics/sunnah-bg.jpg",
  },
  {
    slug: "salah",
    title: "Salah",
    desc: "Wudu, prayer positions, daily prayers, short Surahs and duas inside Salah.",
    icon: MoonStar,
    image: "/images/topics/salah-bg.jpg",
  },
];

export default function IslamicTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = pillars.find((p) => p.slug === slug);

  if (!pillar)
    return (
      <div className="p-10 text-white">
        <p>Pillar not found.</p>
        <Link to="/" className="text-yellow-400 font-bold">Back to Home</Link>
      </div>
    );

  const IconComponent = pillar.icon;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden mb-8"
        style={{ backgroundImage: `url(${pillar.image})`, height: "300px" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center rounded-xl mx-auto mb-4">
              <IconComponent className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-black">{pillar.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 text-lg">{pillar.desc}</p>

        {/* Add detailed content per pillar here */}
        <div className="mt-6 text-gray-400">
          <p>Here you can add lessons, videos, or extra content for {pillar.title}.</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}