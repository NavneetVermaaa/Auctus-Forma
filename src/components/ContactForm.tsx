
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Application received. We will be in touch shortly.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-48 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2 space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none text-black dark:text-white">
              Let’s Build Something <span className="italic">Intelligent</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg font-light max-w-sm tracking-tight leading-relaxed">
              We partner with a limited number of businesses per quarter to ensure artisanal quality and technical precision.
            </p>
          </div>

          <div className="space-y-4 border-t border-neutral-100 dark:border-neutral-900 pt-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600 font-bold">Availability</p>
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-emerald-600 dark:text-emerald-500">Now Accepting Q3 Projects</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">Name</label>
                <input id="name" required type="text" className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent placeholder:text-neutral-200 dark:placeholder:text-neutral-800 text-black dark:text-white" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">Company</label>
                <input id="company" required type="text" className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent placeholder:text-neutral-200 dark:placeholder:text-neutral-800 text-black dark:text-white" placeholder="Venture or Brand" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">Budget Range</label>
              <select required className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent appearance-none text-black dark:text-white">
                <option value="" className="bg-white dark:bg-black">Select a range</option>
                <option value="15-25k" className="bg-white dark:bg-black">$15,000 – $25,000</option>
                <option value="25-50k" className="bg-white dark:bg-black">$25,000 – $50,000</option>
                <option value="50k+" className="bg-white dark:bg-black">$50,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">Project Vision</label>
              <textarea required rows={4} className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent resize-none placeholder:text-neutral-200 dark:placeholder:text-neutral-800 text-black dark:text-white" placeholder="Tell us about the intelligence you want to build..."></textarea>
            </div>

            <button 
              disabled={isSubmitting}
              className="w-full py-6 bg-black text-white dark:bg-white dark:text-black text-[11px] uppercase tracking-[0.4em] font-medium hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Request a Collaboration'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
