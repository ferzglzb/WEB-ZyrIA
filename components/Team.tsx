import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

const TEAM = [
  { name: 'Liam Davis', role: 'CEO', image: 'https://picsum.photos/100/100?random=4' },
  { name: 'Elliot Jones', role: 'CCO', image: 'https://picsum.photos/100/100?random=5' },
  { name: 'Rob Smith', role: 'CTO', image: 'https://picsum.photos/100/100?random=6' },
  { name: 'Bella Garcia', role: 'Head of content', image: 'https://picsum.photos/100/100?random=7' },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 max-w-[1200px] mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">Meet the <span className="text-brand-green">team</span></h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={i * 100}>
            <div className="glass-card rounded-3xl p-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-brand-green/50 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-xs text-text-tertiary uppercase tracking-wider mb-4">{member.role}</p>
              
              <div className="flex items-center gap-1 text-xs text-text-secondary group-hover:text-brand-green transition-colors">
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};