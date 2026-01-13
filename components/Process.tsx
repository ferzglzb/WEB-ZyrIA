import React from 'react';
import { Reveal } from './ui/Reveal';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 max-w-[1200px] mx-auto px-6 bg-background">
      <Reveal>
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold text-brand-action uppercase tracking-widest mb-3">Cómo trabajamos</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Un camino sencillo hacia la automatización</h3>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-border-subtle -z-10"></div>

        {[
           { num: "01", title: "Entendimiento", desc: "Analizamos a fondo tu negocio, tus puntos de dolor y detectamos dónde la IA aporta valor real." },
           { num: "02", title: "Propuesta", desc: "Diseñamos una solución clara y estratégica, priorizando la utilidad y la facilidad de implementación." },
           { num: "03", title: "Implementación", desc: "Desarrollamos, integramos y configuramos la automatización asegurando que funcione sin fricciones." },
           { num: "04", title: "Optimización", desc: "Acompañamos en la puesta en marcha, monitoreamos resultados y ajustamos para la mejora continua." }
        ].map((step, i) => (
           <Reveal key={i} delay={i * 150} className="h-full">
              <div className="clean-card rounded-2xl p-8 h-full hover:shadow-lg transition-shadow bg-white flex flex-col items-center md:items-start text-center md:text-left">
                 <div className="w-12 h-12 rounded-full bg-brand-petrol text-white flex items-center justify-center font-bold mb-6 shadow-lg shadow-brand-petrol/20 text-lg border-4 border-white">
                    {step.num}
                 </div>
                 <h4 className="text-lg font-bold text-text-primary mb-3">{step.title}</h4>
                 <p className="text-text-secondary text-sm leading-relaxed">
                    {step.desc}
                 </p>
              </div>
           </Reveal>
        ))}
      </div>
    </section>
  );
};