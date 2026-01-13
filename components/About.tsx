import React from 'react';
import { Reveal } from './ui/Reveal';
import { CheckCircle2, Lightbulb, Target, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-[1200px] mx-auto px-6 bg-background relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <Reveal>
          <h2 className="text-sm font-bold text-brand-action uppercase tracking-widest mb-3">Sobre ZyrIA</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
            Automatización accesible <br/> para resultados reales.
          </h3>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            ZyrIA es una agencia de automatización con inteligencia artificial enfocada en la practicidad. No vendemos tecnología por moda, vendemos soluciones que funcionan.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Nuestro objetivo es ayudar a negocios locales y empresas a delegar lo repetitivo a la IA, permitiéndoles centrarse en lo que realmente importa: crecer y atender mejor a sus clientes.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-action w-6 h-6 shrink-0" />
                <span className="text-text-primary font-medium">Enfoque claro y sin tecnicismos complejos</span>
             </div>
             <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-action w-6 h-6 shrink-0" />
                <span className="text-text-primary font-medium">Soluciones bien pensadas y personalizadas</span>
             </div>
             <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-action w-6 h-6 shrink-0" />
                <span className="text-text-primary font-medium">Orientación a la utilidad y el retorno de tiempo</span>
             </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="clean-card p-6 rounded-2xl flex flex-col gap-4">
                 <div className="w-10 h-10 rounded-full bg-brand-petrol/10 flex items-center justify-center text-brand-petrol">
                    <Target size={20} />
                 </div>
                 <h4 className="font-bold text-text-primary">Claridad</h4>
                 <p className="text-sm text-text-secondary">Explicamos qué hacemos y cómo te beneficia, sin promesas vacías.</p>
              </div>
              <div className="clean-card p-6 rounded-2xl flex flex-col gap-4 mt-0 sm:mt-8">
                 <div className="w-10 h-10 rounded-full bg-brand-action/10 flex items-center justify-center text-brand-action">
                    <Zap size={20} />
                 </div>
                 <h4 className="font-bold text-text-primary">Utilidad</h4>
                 <p className="text-sm text-text-secondary">Herramientas que resuelven problemas diarios desde el primer día.</p>
              </div>
              <div className="clean-card p-6 rounded-2xl flex flex-col gap-4">
                 <div className="w-10 h-10 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-petrol">
                    <Lightbulb size={20} />
                 </div>
                 <h4 className="font-bold text-text-primary">Simplicidad</h4>
                 <p className="text-sm text-text-secondary">Automatizar no tiene por qué ser complicado ni doloroso.</p>
              </div>
           </div>
        </Reveal>

      </div>
    </section>
  );
};