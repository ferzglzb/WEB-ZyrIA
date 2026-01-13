import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-petrol relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

       <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <Reveal>
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Empecemos a automatizar.</h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                 ¿Tienes una idea en mente o un proceso que te quita demasiado tiempo? Cuéntanos brevemente y busquemos la mejor solución para tu negocio.
              </p>
           </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-semibold text-text-primary ml-1">Nombre</label>
                   <input type="text" className="w-full bg-background border border-border-subtle rounded-lg p-3 text-text-primary focus:border-brand-action focus:outline-none focus:ring-1 focus:ring-brand-action transition-all" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-semibold text-text-primary ml-1">Empresa</label>
                   <input type="text" className="w-full bg-background border border-border-subtle rounded-lg p-3 text-text-primary focus:border-brand-action focus:outline-none focus:ring-1 focus:ring-brand-action transition-all" placeholder="Nombre de tu negocio" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-semibold text-text-primary ml-1">Email</label>
                   <input type="email" className="w-full bg-background border border-border-subtle rounded-lg p-3 text-text-primary focus:border-brand-action focus:outline-none focus:ring-1 focus:ring-brand-action transition-all" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-semibold text-text-primary ml-1">Teléfono (Opcional)</label>
                   <input type="tel" className="w-full bg-background border border-border-subtle rounded-lg p-3 text-text-primary focus:border-brand-action focus:outline-none focus:ring-1 focus:ring-brand-action transition-all" placeholder="+34..." />
                </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-semibold text-text-primary ml-1">¿Cómo podemos ayudarte?</label>
                 <textarea rows={4} className="w-full bg-background border border-border-subtle rounded-lg p-3 text-text-primary focus:border-brand-action focus:outline-none focus:ring-1 focus:ring-brand-action transition-all resize-none" placeholder="Describe brevemente tus necesidades..."></textarea>
              </div>

              <div className="pt-2">
                 <Button type="submit" variant="primary" className="w-full justify-center text-base py-4">
                    Enviar mensaje <ArrowRight className="ml-2 w-4 h-4"/>
                 </Button>
              </div>
            </form>
          </div>
        </Reveal>
        
        <Reveal delay={300} className="mt-12 flex flex-col items-center gap-4">
           <p className="text-white/50 text-sm">También puedes escribirnos directamente:</p>
           <a href="mailto:hola@zyria.com" className="inline-flex items-center gap-2 text-white hover:text-brand-lime transition-colors font-medium">
              <Mail className="w-5 h-5" /> hola@zyria.com
           </a>
        </Reveal>
      </div>
    </section>
  );
};