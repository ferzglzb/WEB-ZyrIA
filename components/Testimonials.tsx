import React from 'react';
import { Reveal } from './ui/Reveal';

const TESTIMONIALS = [
  {
    quote: "\"Nebula's development has increased our productivity by 54%\"",
    author: "John Fisher",
    role: "CEO - T&S Real Estate",
    image: "https://picsum.photos/48/48?random=1"
  },
  {
    quote: "\"Nebula's chatbot now handles 95% of our customer service\"",
    author: "Sarah Johnson",
    role: "CXO - Doodle",
    image: "https://picsum.photos/48/48?random=2"
  },
  {
    quote: "\"We're delighted with the development subscription from Nebula\"",
    author: "Peter Davis",
    role: "Atomic",
    image: "https://picsum.photos/48/48?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">What our <span className="text-brand-green">clients</span> say</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between hover:bg-white/5 transition-colors">
              <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  loading="lazy" 
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-full border border-white/10" 
                />
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-text-tertiary">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};