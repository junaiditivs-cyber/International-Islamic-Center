import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Begin Free Trial',
    description: 'Start with 3 days of absolutely free classes to experience our teaching methodology.',
  },
  {
    number: '02',
    title: 'Choose Your Time',
    description: 'Select flexible 30-minute slots that fit perfectly into your daily schedule.',
  },
  {
    number: '03',
    title: 'Learn & Grow',
    description: 'Begin 1-on-1 personalized sessions with our certified and expert tutors.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-800/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
              A Seamless Journey to <br/>
              <span className="text-gold-400 font-serif italic">Quranic Excellence</span>
            </h2>
            <p className="text-brand-100/80 text-lg max-w-md">
              We've made starting your Quranic education easier than ever. Follow these simple steps and begin your spiritual journey.
            </p>
          </div>

          <div className="flex-1 w-full space-y-6">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-5xl font-bold text-brand-500/50 font-serif">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-brand-100/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
