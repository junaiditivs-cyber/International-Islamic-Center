import { useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Share2 } from 'lucide-react';

const faqs = [
  {
    question: "What subjects do you offer?",
    answer: "We offer a comprehensive range of subjects including Noorani Qaidah for beginners, Hifzul Quran for memorization, Tafsir for understanding meanings, and Tajweed Mastery for perfect recitation."
  },
  {
    question: "How does the 3-day free trial work?",
    answer: "Our 3-day free trial allows you and your child to experience our teaching methodology firsthand. Simply enroll, attend the first three days, and if you are completely satisfied, you can proceed with the regular classes. There is no obligation to continue if it's not the right fit."
  },
  {
    question: "Can I choose my own class timings?",
    answer: "Absolutely! We understand the importance of flexibility. You can select your preferred 30-minute block that fits into your daily schedule, depending on tutor availability in your timezone."
  },
  {
    question: "Are the classes suitable for my child's age?",
    answer: "Yes, all our classes are conducted on a 1-on-1 basis. This allows our expert tutors to personalize the teaching pace and style to perfectly match your child's age, understanding, and learning capabilities."
  },
  {
    question: "How do I start the enrollment process?",
    answer: "Just fill out the Enrollment form at the bottom of this page. Provide your preferred days and times, and our team will get back to you shortly to confirm your child's schedule and set up the free trial classes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'INTERNATIONAL Online Quran ISLAMIC CENTER - FAQ',
          text: 'Find answers to common queries about our courses, trial period, and enrollment.',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported on this device/browser.');
    }
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Frequently Asked Questions</h3>
          <p className="text-slate-600 text-lg mb-6">
            Find answers to common queries about our courses, trial period, and enrollment.
          </p>
          <button 
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors focus:ring-2 focus:ring-brand-500 outline-none"
            title="Share this page"
          >
            <Share2 className="w-4 h-4" />
            Share FAQ
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const contentId = `faq-content-${index}`;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'border-brand-200 bg-brand-50/50' : 'border-slate-200 bg-white hover:border-brand-200'
                }`}
              >
                <div id={buttonId}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-slate-50 focus:ring-2 focus:ring-inset focus:ring-brand-500 rounded-2xl"
                  >
                    <span className="font-semibold text-slate-900 font-serif text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-brand-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-slate-600">
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
