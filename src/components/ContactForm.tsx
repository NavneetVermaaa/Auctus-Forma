import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  // Auto hide success message after 4 seconds
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

    // Honeypot spam protection
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

    // Validate environment variables
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS configuration on production');
      alert('Configuration error. Please contact support.');
      setError(true);
      setIsSubmitting(false);
      return;
    }

    // Debug logging (only in development)
    if (import.meta.env.DEV) {
      console.log('EmailJS Config:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 10) + '...'
      });
      console.log('Template Params:', templateParams);
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        if (import.meta.env.DEV) {
          console.log('Email sent successfully:', result.text);
        }
        form.reset();
        setSuccess(true);
      })
      .catch((err) => {
        if (import.meta.env.DEV) {
          console.error('Email send failed:', err);
          console.error('Error details:', {
            status: err.status,
            text: err.text,
            message: err.message
          });
        } else {
          console.error('Production email send error:', err.status || err.text);
        }
        setError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-48 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">

        {/* LEFT SIDE */}
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
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600 font-bold">
              Availability
            </p>
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-emerald-600 dark:text-emerald-500">
              Now Accepting Q3 Projects
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-12">

            {/* Honeypot Field (Hidden Spam Protection) */}
            <input type="text" name="website" className="hidden" />

            {/* Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent text-black dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Company
                </label>
                <input
                  name="company"
                  required
                  type="text"
                  className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent text-black dark:text-white"
                  placeholder="Venture or Brand"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent text-black dark:text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">
                  Phone
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent text-black dark:text-white"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">
                Budget Range
              </label>

              <div className="relative">
                <select
                  name="budget"
                  required
                  className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 pr-8 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent appearance-none text-black dark:text-white"
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

                {/* Custom Arrow */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 dark:text-neutral-500">
                  ▼
                </span>
              </div>
            </div>


            {/* Vision */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-bold">
                Project Vision
              </label>
              <textarea
                name="vision"
                required
                rows={4}
                className="w-full border-b border-neutral-200 dark:border-neutral-800 py-3 outline-none focus:border-black dark:focus:border-white transition-colors bg-transparent resize-none text-black dark:text-white"
                placeholder="Tell us about the intelligence you want to build..."
              />
            </div>

            {/* Success Message */}
            {success && (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 p-4 text-green-700 dark:text-green-300 text-sm text-center rounded-lg">
                ✓ Application received. We will review and respond within 24–48 hours.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-4 text-red-700 dark:text-red-300 text-sm text-center rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 bg-black text-white dark:bg-white dark:text-black text-[11px] uppercase tracking-[0.4em] font-medium hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Request a Collaboration'}
            </button>

            {/* WhatsApp Alternative */}
            <div className="text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                You can also contact us via WhatsApp
              </p>
              <a
                href="https://wa.me/919322962133"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-[11px] uppercase tracking-[0.4em] font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                Contact on WhatsApp
              </a>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
