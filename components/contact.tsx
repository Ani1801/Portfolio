'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import ShinyText from './ShinyText';
import RotatingText from './RotatingText';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdaoyrd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          toast.error(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          toast.error("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aniruddha-yeole-b5ba472a7', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Ani1801', label: 'GitHub' },
    { icon: Mail, href: 'mailto:yeoleaniruddha2006@gmail.com', label: 'Email' },
  ];

  return (
    <section id="connect" className="min-h-[100dvh] flex items-center py-12 sm:py-16 bg-black dark border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <div className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 flex items-center gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start tracking-tight">
            Let's
            <RotatingText
              texts={['Connect ', 'Collaborate ', 'Create ', 'Innovate ']}
              mainClassName="px-8 bg-orange-500 text-white overflow-hidden py-2 justify-center rounded-xl font-black italic"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div className="h-1.5 bg-orange-500 rounded-full animated-underline w-32"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left - Narrative & Socials */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Have a vision? Let’s bring it to life.</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                I specialize in building <span className="text-white">high-performance web systems</span> and <span className="text-orange-500">intelligent user experiences</span>. Whether you're a recruiter looking for a disciplined engineer or a founder with a bold idea, my inbox is always open.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Currently based in Pune, India. Available for <span className="text-white">Full-time roles</span> and <span className="text-white">strategic freelance collaborations</span>.
              </p>
            </div>

            {/* Social Connectivity */}
            <div className="pt-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Social Connectivity</p>
              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-900 border border-white/5 rounded-2xl group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300">
                        <Icon size={18} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Recruiter Inquiry Form */}
          <div className="relative group scale-[0.98] lg:scale-100 origin-top lg:origin-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0A0A0B] border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="mb-6">
                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1 block">Direct Inquiry</span>
                <h4 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h4>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="E.g. John Doe"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-gray-700 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Professional Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-gray-700 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Project Details/Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Tell me about your project or role..."
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-gray-700 resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-3.5 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] ${isSuccess
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40'
                    }`}
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle2 size={18} />
                      Email Sent!
                    </>
                  ) : isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
