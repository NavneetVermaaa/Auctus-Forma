import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactForm: React.FC = () => {
  useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (formData.get('website')) {
      return;
    }

    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    const templateParams = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      budget: formData.get('budget'),
      vision: formData.get('vision'),
      to_email: 'navneet.v0000001@gmail.com'
    };

    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS configuration on production');
      alert('Configuration error. Please contact support.');
      setError(true);
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.reset();
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 lg:py-48 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50/50 to-transparent dark:from-neutral-900/20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-neutral-50/30 to-transparent dark:from-black/30 -z-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 md:gap-20 lg:gap-24">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <span className="text-[12px] tracking-[0.35em] uppercase text-neutral-400 dark:text-neutral-500 font-medium fade-in">Get in Touch</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-none text-black dark:text-white stagger-in">
              Let's Build Something <span className="italic text-neutral-400 dark:text-neutral-600">Intelligent</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-lg font-light max-w-sm tracking-tight leading-relaxed fade-in stagger-in" style={{ transitionDelay: '0.1s' }}>
              We partner with a limited number of businesses per quarter to ensure artisanal quality and technical precision.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 border-t border-neutral-100 dark:border-neutral-900 pt-6 sm:pt-8 md:pt-12 fade-in stagger-in" style={{ transitionDelay: '0.2s' }}>
            <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 dark:text-neutral-600 font-bold">
              Availability
            </p>
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Now Accepting Q3 Projects
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:w-1/2">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 md:space-y-12 premium-card rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">

            <input type="text" name="website" className="hidden" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3 fade-in stagger-in" style={{ transitionDelay: '0.1s' }}>
                <label className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full border-b border-neutral-200 dark:border-neutral-700 py-3 outline-none focus:border-black dark:focus:border-white transition-all bg-transparent text-black dark:text-white rounded-none"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-3 fade-in stagger-in" style={{ transitionDelay: '0.15s' }}>
                <label className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Company
                </label>
                <input
                  name="company"
                  required
                  type="text"
                  className="w-full border-b border-neutral-200 dark:border-neutral-700 py-3 outline-none focus:border-black dark:focus:border-white transition-all bg-transparent text-black dark:text-white rounded-none"
                  placeholder="Venture or Brand"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3 fade-in stagger-in" style={{ transitionDelay: '0.2s' }}>
                <label className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full border-b border-neutral-200 dark:border-neutral-700 py-3 outline-none focus:border-black dark:focus:border-white transition-all bg-transparent text-black dark:text-white rounded-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-3 fade-in stagger-in" style={{ transitionDelay: '0.25s' }}>
                <label className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Phone
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="w-full border-b border-neutral-200 dark:border-neutral-700 py-3 outline-none focus:border-black dark:focus:border-white transition-all bg-transparent text-black dark:text-white rounded-none"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="space-y-3 fade-in stagger-in" style={{ transitionDelay: '0.3s' }}>
              <label className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600 font-bold">
                Budget Range
              </label>

              <div className="relative">
                <select
                  name="budget"
                  required
                  className="w-full border-b border-neutral-200 dark:border-neutral-700 py-3 pr-8 outline-none focus:border-black dark:focus:border-white transition-all bg-transparent appearance-none text-black dark:text-white rounded-none"
                >
                  <option value="" className="bg-white dark:bg-black text-black dark:text-white">
                    Select a range
                  </option>
                  <option value="5k-10k" className="bg-white dark:bg-black text-black dark:text-white">
                    5k-10k
                  </option>
                  <option value="10k-15k" className="bg-white dark:bg-black text-black dark:text-white">
                    10k-15k
                  </option>
                  <option value="15k-20k" className="bg-white dark:bg-black text-black dark:text-white">
                    15k-20k
                  </option>
                </select>

                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 dark:text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>


            <div className="space-y-3 fade-in stagger-in" style={{ transitionDelay: '0.35s' }}>
              <label className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-600 font-bold">
                Project Vision
              </label>
              <textarea
                name="vision"
                required
                rows={4}
                className="w-full border-b border-neutral-200 dark:border-neutral-700 py-3 outline-none focus:border-black dark:focus:border-white transition-all bg-transparent resize-none text-black dark:text-white rounded-none"
                placeholder="Tell us about the intelligence you want to build..."
              />
            </div>

            {success && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/30 p-5 text-green-700 dark:text-green-300 text-sm text-center rounded-lg fade-in stagger-in">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Application received. We will review and respond within 24–48 hours.
                </span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200/50 dark:border-red-700/30 p-5 text-red-700 dark:text-red-300 text-sm text-center rounded-lg fade-in stagger-in">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 sm:py-6 bg-black text-white dark:bg-white dark:text-black text-[11px] uppercase tracking-[0.45em] font-medium hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-all disabled:opacity-50 shine-effect fade-in stagger-in"
              style={{ transitionDelay: '0.4s' }}
            >
              {isSubmitting ? 'Processing...' : 'Request a Collaboration'}
            </button>

            <div className="text-center fade-in stagger-in" style={{ transitionDelay: '0.45s' }}>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-4">
                Or connect with us directly
              </p>
              <a
                href="https://wa.me/919322962133"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-[10px] sm:text-[11px] uppercase tracking-[0.4em] font-medium transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
