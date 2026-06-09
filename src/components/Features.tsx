import { motion } from 'motion/react';
import { Book, Star, Heart, Scroll } from 'lucide-react';

const features = [
  {
    title: 'Noorani Qaidah',
    description: 'The foundational course for beginners to learn Arabic letters, pronunciation, and basic Tajweed rules perfectly.',
    icon: Star,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Hifzul Quran',
    description: 'Memorize the Holy Quran with expert tutors through a structured, easy-to-follow retention program.',
    icon: Heart,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Tafsir & Translation',
    description: 'Understand the profound meanings, context, and wisdom of the verses of the Holy Quran.',
    icon: Scroll,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Tajweed Mastery',
    description: 'Refine your recitation skills with advanced rules to read exactly as it was revealed.',
    icon: Book,
    color: 'bg-blue-100 text-blue-600',
  },
];

export default function Features() {
  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Comprehensive Learning Paths</h3>
          <p className="text-slate-600 text-lg">
            We provide specialized classes tailored to your child's age and learning pace. Every subject is available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mix-blend-multiply ${feature.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <Icon className="w-24 h-24" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
