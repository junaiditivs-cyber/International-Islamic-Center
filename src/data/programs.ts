import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Droplets,
  HandHeart,
  HeartHandshake,
  MoonStar,
  ScrollText,
  Sparkles,
} from "lucide-react";

export type Program = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  icon: LucideIcon;
  link: string;
  heroTitle: string;
  description: string;
  highlights: string[];
  lessons: string[];
};

export const programs: Program[] = [
  {
    slug: "quran-reading",
    title: "Quran Reading",
    subtitle:
      "Learn to read the Holy Quran with confidence, fluency and correct pronunciation.",
    image: "/images/topics/quran-reading.png",
    icon: BookOpen,
    link: "/topic/quran-reading",
    heroTitle: "Learn Quran Reading Online",
    description:
      "This program helps students read the Holy Quran correctly from the beginning. Students improve pronunciation, fluency, confidence and basic reading skills with teacher guidance.",
    highlights: [
      "Beginner-friendly Quran reading classes",
      "Correct Arabic pronunciation",
      "One-to-one teacher attention",
      "Step-by-step learning for kids and adults",
    ],
    lessons: [
      "Arabic letters and sounds",
      "Joining letters correctly",
      "Reading short words and verses",
      "Fluency practice with teacher correction",
    ],
  },
  {
    slug: "tajweed-rules",
    title: "Tajweed Rules",
    subtitle:
      "Improve recitation with Makharij, Tajweed rules and teacher correction.",
    image: "/images/topics/tajweed.png",
    icon: Sparkles,
    link: "/topic/tajweed-rules",
    heroTitle: "Master Tajweed Rules",
    description:
      "This program teaches students how to recite the Quran beautifully and correctly with Tajweed rules, Makharij and regular correction from qualified teachers.",
    highlights: [
      "Learn Makharij clearly",
      "Understand basic and advanced Tajweed rules",
      "Improve Quran recitation style",
      "Teacher correction in every class",
    ],
    lessons: [
      "Makharij of Arabic letters",
      "Rules of Noon Sakin and Tanween",
      "Rules of Meem Sakin",
      "Qalqalah, Madd and stopping rules",
    ],
  },
  {
    slug: "hifz-quran",
    title: "Hifz Quran",
    subtitle:
      "Memorize Quran with revision, discipline, daily targets and progress tracking.",
    image: "/images/topics/hifz-quran.jpg",
    icon: BadgeCheck,
    link: "/topic/hifz-quran",
    heroTitle: "Online Hifz Quran Program",
    description:
      "This program is designed for students who want to memorize the Holy Quran with a proper schedule, daily targets, revision plan and teacher follow-up.",
    highlights: [
      "Daily memorization targets",
      "Strong revision system",
      "Progress tracking",
      "Supportive teacher guidance",
    ],
    lessons: [
      "New lesson memorization",
      "Daily previous lesson revision",
      "Weekly revision plan",
      "Mistake correction and fluency practice",
    ],
  },
  {
    slug: "how-to-perform-namaz",
    title: "How To Perform Namaz",
    subtitle:
      "Learn Wudu, Salah positions, duas in prayer and common prayer mistakes.",
    image: "/images/topics/namaz.png",
    icon: MoonStar,
    link: "/topic/how-to-perform-namaz",
    heroTitle: "Learn How To Perform Namaz",
    description:
      "This program teaches students the correct method of performing Salah step by step, including Wudu, prayer positions, duas and common mistakes.",
    highlights: [
      "Step-by-step Salah learning",
      "Correct prayer positions",
      "Duas inside Salah",
      "Common mistakes correction",
    ],
    lessons: [
      "Preparation for Salah",
      "Qiyam, Ruku and Sujood",
      "Tashahhud and Salam",
      "Daily prayer practice",
    ],
  },
  {
    slug: "wudu",
    title: "Wudu",
    subtitle:
      "Learn purification, cleanliness and how to prepare properly for Salah.",
    image: "/images/topics/wudu.png",
    icon: Droplets,
    link: "/topic/wudu",
    heroTitle: "Learn Wudu Step By Step",
    description:
      "This program explains the correct way of making Wudu, the importance of cleanliness and how to prepare properly before Salah.",
    highlights: [
      "Easy Wudu steps",
      "Cleanliness and purification",
      "Common Wudu mistakes",
      "Practical learning for children",
    ],
    lessons: [
      "Intention and washing hands",
      "Mouth, nose and face washing",
      "Arms, head and feet washing",
      "Things that break Wudu",
    ],
  },
  {
    slug: "daily-duas",
    title: "Daily Duas",
    subtitle:
      "Memorize duas for morning, evening, food, sleep, protection and parents.",
    image: "/images/topics/duas.jpg",
    icon: HandHeart,
    link: "/topic/daily-duas",
    heroTitle: "Daily Duas For Every Muslim",
    description:
      "This program helps students memorize important daily duas with meanings, correct pronunciation and regular revision.",
    highlights: [
      "Morning and evening duas",
      "Duas for food and sleep",
      "Duas for parents and protection",
      "Memorization with revision",
    ],
    lessons: [
      "Morning duas",
      "Evening duas",
      "Eating and sleeping duas",
      "Protection and forgiveness duas",
    ],
  },
  {
    slug: "akhlaq-adab",
    title: "Akhlaq & Adab",
    subtitle:
      "Build Islamic manners, respect, kindness, honesty and good character.",
    image: "/images/topics/manners.jpg",
    icon: HeartHandshake,
    link: "/topic/akhlaq-adab",
    heroTitle: "Islamic Manners And Good Character",
    description:
      "This program builds Islamic character in students by teaching respect, kindness, honesty, discipline and good manners.",
    highlights: [
      "Respect for parents and teachers",
      "Kindness and honesty",
      "Good speaking manners",
      "Islamic lifestyle habits",
    ],
    lessons: [
      "Respect and kindness",
      "Truthfulness and honesty",
      "Manners at home and school",
      "Good habits in daily life",
    ],
  },
  {
    slug: "islamic-studies",
    title: "Islamic Studies",
    subtitle:
      "Learn Seerah, Prophets’ stories, beliefs, Salah basics and Islamic lifestyle.",
    image: "/images/topics/islamic-studies.jpg",
    icon: ScrollText,
    link: "/topic/islamic-studies",
    heroTitle: "Islamic Studies For Kids And Adults",
    description:
      "This program teaches basic Islamic knowledge, Seerah, Prophets’ stories, beliefs, Salah basics and Islamic lifestyle in an easy way.",
    highlights: [
      "Basic Islamic beliefs",
      "Stories of Prophets",
      "Seerah of Prophet Muhammad ﷺ",
      "Islamic lifestyle learning",
    ],
    lessons: [
      "Five pillars of Islam",
      "Stories of Prophets",
      "Seerah lessons",
      "Basic Islamic knowledge",
    ],
  },
];