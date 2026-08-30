"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Zap, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    categories: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to send to contact@coromandel-productions.com
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Enquiry sent to contact@coromandel-productions.com:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const toggleCategory = (cat: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(cat) 
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat]
    }));
  };

  const contactInfo = [
    { id: "email", icon: Mail, label: "Email Us", value: "contact@coromandel-productions.com" },
    { id: "location", icon: MapPin, label: "Our Studio", value: "176, Orchard Road, SG" },
  ];

  return (
    <section id="contact" className="py-20 md:py-40 bg-background relative overflow-hidden">
      {/* Dynamic Background Noise & Gradients */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute -bottom-1/2 -right-1/4 w-[80%] h-full bg-accent/5 blur-[160px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-10 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
            >
              <Zap size={12} className="text-primary animate-pulse" />
              <span className="text-primary uppercase tracking-[0.5em] text-[9px] font-black py-1">
                Start a Conversation
              </span>
            </motion.div>

            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-foreground tracking-tighter leading-[0.85] mb-12">
              LET&apos;S BUILD <br />
              YOUR <span className="italic text-primary">LEGACY.</span>
            </h2>

            <p className="text-muted text-xl mb-10 max-w-sm leading-relaxed font-light">
              Booking for Q4 2026. Join the ranks of global brands shaping narratives with us.
            </p>
            <p className="text-[9px] uppercase tracking-[0.5em] text-muted font-bold mb-16">
              Prefer email for all initial enquiries.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info) => (
                <motion.div 
                  key={info.id}
                  onMouseEnter={() => setHoveredInfo(info.id)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  onClick={() => info.id === 'location' && window.open('https://maps.app.goo.gl/BFdDVKrCqVfYS7iT6', '_blank')}
                  className="group flex items-center gap-8 cursor-pointer"
                >
                  <div className="relative w-16 h-16 shrink-0 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary/5 overflow-hidden">
                    <info.icon size={20} className="text-foreground group-hover:text-primary transition-colors duration-500" />
                    {hoveredInfo === info.id && (
                      <motion.div 
                        layoutId="contact-glow"
                        className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-1">{info.label}</p>
                    <p className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                      {info.value}
                      {info.id === 'location' && <ArrowUpRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-surface-2 border border-white/5 p-12 md:p-20 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group min-h-[600px] flex flex-col justify-center">
              {/* Internal Accent Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-12 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="YOUR NAME" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-transparent border-b border-border pb-6 focus:outline-none focus:border-primary transition-colors text-foreground font-serif text-2xl placeholder:text-muted/30"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="YOUR@EMAIL.COM" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b border-border pb-6 focus:outline-none focus:border-primary transition-colors text-foreground font-serif text-2xl placeholder:text-muted/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">What are we building?</label>
                      <div className="flex flex-wrap gap-4 pt-2">
                        {["Sports", "Corporate", "Social", "Doc", "Scripted"].map((cat) => (
                          <label key={cat} className="group relative cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer" 
                              checked={formData.categories.includes(cat)}
                              onChange={() => toggleCategory(cat)}
                            />
                            <div className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-muted transition-all duration-500 peer-checked:bg-primary peer-checked:text-background peer-checked:border-primary peer-checked:shadow-[0_0_20px_rgba(241,111,36,0.4)]">
                              {cat}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">Tell us about your project</label>
                      <textarea 
                        required
                        rows={4} 
                        placeholder="Tell us what you're thinking..." 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-b border-border pb-6 focus:outline-none focus:border-primary transition-colors text-foreground font-serif text-2xl placeholder:text-muted/30 resize-none"
                      />
                    </div>

                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-background py-5 md:py-6 rounded-full text-[12px] font-black hover:bg-accent transition-all duration-700 flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(241,111,36,0.3)] hover:shadow-[0_0_40px_rgba(240,195,83,0.3)] disabled:opacity-50"
                    >
                      <span className="uppercase tracking-[0.5em] pl-[0.5em] leading-none pt-[2px]">
                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                      </span>
                      <Send size={18} className={isSubmitting ? "animate-pulse" : "animate-[bounce_2s_infinite]"} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8 py-20"
                  >
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/30">
                      <Zap size={40} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-5xl md:text-6xl text-foreground tracking-tighter">
                      MESSAGE <span className="italic text-primary">SENT.</span>
                    </h3>
                    <p className="text-muted text-xl max-w-sm mx-auto leading-relaxed">
                      Your vision has been received. We'll be in touch with you at <span className="text-foreground font-bold">{formData.email}</span> shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] uppercase tracking-[0.4em] text-primary font-black hover:text-accent transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cinematic Maps Embed */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 w-full h-64 rounded-3xl overflow-hidden border border-white/5 relative group"
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2100868843946!2d-0.13788548422998348!3d51.50749007963503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d3e75069a1%3A0xc4ab5fb45b59eb6e!2s11%20St%20James&#39;s%20Sq%2C%20St.%20James&#39;s%2C%20London%20SW1Y%204LB%2C%20UK!5e0!3m2!1sen!2suk!4v1713767000000!5m2!1sen!2suk" 
                  className="w-full h-full grayscale invert opacity-60 contrast-125"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-surface-2/90 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-3">
                    <MapPin size={12} className="text-primary" />
                    <span className="text-[9px] uppercase tracking-widest text-foreground/80 font-bold">176, Orchard Road, SG</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
