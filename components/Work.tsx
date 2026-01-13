import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { WorkItem } from '../types';

const PROJECTS: WorkItem[] = [
  { year: '2023', client: 'Doodle', description: 'customer support chatbot', link: '#' },
  { year: '2024', client: 'Dash', description: 'AI calling system', link: '#' },
  { year: '2024', client: 'Atomic', description: 'AI driven outreach', link: '#' },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 max-w-[1200px] mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">Our Work</h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.client} delay={index * 100}>
              <a href={project.link} className="group block py-8 border-b border-white/10 hover:border-white/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-xs font-mono text-text-tertiary">{project.year}</span>
                   <ArrowUpRight className="w-5 h-5 text-text-tertiary group-hover:text-brand-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div className="text-xl md:text-2xl font-medium">
                  {project.client} <span className="text-text-tertiary mx-2">–</span> <span className="text-text-secondary group-hover:text-white transition-colors">{project.description}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="hidden lg:block relative h-[400px]">
           {/* Abstract Visual for Work Section */}
           <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary to-black border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
             <div className="w-[80%] h-[80%] relative">
               <div className="absolute inset-0 border border-brand-green/20 rounded-lg transform rotate-[-6deg] scale-95" />
               <div className="absolute inset-0 border border-white/10 bg-black/50 backdrop-blur-sm rounded-lg flex flex-col p-6 shadow-2xl">
                 <div className="w-full h-40 bg-gradient-to-r from-brand-green/10 to-transparent rounded mb-4 animate-pulse"></div>
                 <div className="space-y-2">
                   <div className="w-3/4 h-3 bg-white/10 rounded"></div>
                   <div className="w-1/2 h-3 bg-white/10 rounded"></div>
                 </div>
               </div>
             </div>
           </div>
        </Reveal>
      </div>
    </section>
  );
};