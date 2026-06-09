import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Info } from 'lucide-react';

export default function EnrollmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string | null> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      utms[param] = params.get(param);
    });

    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    try {
      await fetch('https://n8n.srv756914.hstgr.cloud/webhook-test/316db688-9adc-4aa8-9aff-48fbbec36d2b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'enrollment_submission',
          data: formValues,
          utms,
          timestamp: new Date().toISOString()
        }),
      });
    } catch (error) {
      console.error('Failed to send webhook:', error);
    }

    // Send data to Email via FormSubmit
    try {
      await fetch('https://formsubmit.co/ajax/mustafauetnet@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Student Enrollment - INTERNATIONAL ISLAMIC CENTER",
          _template: "table",
          "Student Name": formValues.studentName,
          "Parent Name": formValues.parentName,
          "WhatsApp": formValues.whatsapp,
          "Country": formValues.country,
          "Preferred Days": formValues.days,
          "Preferred Time": formValues.time,
          ...utms
        }),
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    }

    setSubmitted(true);
  };

  return (
    <section id="enroll" className="py-24 bg-brand-50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584260269785-5028448ebf37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-5 mix-blend-multiply" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Enrollment & Free Trial</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to begin? Fill out the form below to register. If you are a new student, your first 3 days are completely free!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-900/5 border border-slate-100"
        >
          {submitted ? (
             <div className="text-center py-16">
               <motion.div 
                 initial={{ scale: 0 }} 
                 animate={{ scale: 1 }} 
                 className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6"
               >
                 <CheckCircle2 className="w-12 h-12 text-brand-600" />
               </motion.div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Alhamdulillah! Request Received</h3>
               <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                 We've received your enrollment details. Our team will contact you within <strong className="text-brand-600 font-semibold">2-4 hours</strong> to confirm your class schedule and begin your free trial.
               </p>
               <button onClick={() => setSubmitted(false)} className="text-brand-600 font-medium hover:underline">
                 Submit another response
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 mb-8">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong>3-Day Guarantee:</strong> Start with confidence. If you decide to continue after 3 days, your selected schedule will remain locked.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="studentName" className="block text-sm font-medium text-slate-700">Student Name *</label>
                  <input required name="studentName" id="studentName" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Enter student name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="parentName" className="block text-sm font-medium text-slate-700">Parent Name</label>
                  <input name="parentName" id="parentName" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Enter parent name (if applicable)" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">WhatsApp Number *</label>
                  <input required name="whatsapp" id="whatsapp" type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="+1 (234) 567-8900" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country *</label>
                  <input required name="country" id="country" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="e.g. USA, UK, UAE" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="days" className="block text-sm font-medium text-slate-700">Preferred Days *</label>
                  <select required name="days" id="days" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none">
                    <option value="">Select an option</option>
                    <option value="weekend">Weekends only (Sat-Sun)</option>
                    <option value="mon-wed-fri">3 Days (Mon-Wed-Fri)</option>
                    <option value="tue-thu">2 Days (Tue-Thu)</option>
                    <option value="regular">5 Days (Mon-Fri)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-medium text-slate-700">Preferred Time (30m blocks) *</label>
                  <input required name="time" id="time" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="e.g. 4:00 PM EST" />
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full py-4 px-8 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all active:scale-[0.98]">
                  Submit Enrollment Request
                </button>
              </div>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
