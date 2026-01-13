import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { Mail, ArrowRight } from 'lucide-react';
import { TubesBackground } from './ui/neon-flow';

export const Contact: React.FC = () => {
   return (
      <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-petrol">

         <div className="absolute inset-0 z-0">
            <TubesBackground />
         </div>

         <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10 py-24">
            <Reveal>
               <div className="text-center mb-12 pointer-events-auto">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Empecemos a automatizar.</h2>
                  <p className="text-white/90 text-lg max-w-xl mx-auto drop-shadow-md">
                     ¿Tienes una idea en mente o un proceso que te quita demasiado tiempo? Cuéntanos brevemente y busquemos la mejor solución para tu negocio.
                  </p>
               </div>
            </Reveal>

            <Reveal delay={200}>
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] pointer-events-auto">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-white ml-1">Nombre</label>
                           <input
                              type="text"
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-action transition-all backdrop-blur-sm"
                              placeholder="Tu nombre"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-white ml-1">Empresa</label>
                           <input
                              type="text"
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-action transition-all backdrop-blur-sm"
                              placeholder="Nombre de tu negocio"
                           />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-white ml-1">Email</label>
                           <input
                              type="email"
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-action transition-all backdrop-blur-sm"
                              placeholder="tu@email.com"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-white ml-1">Teléfono (Opcional)</label>
                           <input
                              type="tel"
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-action transition-all backdrop-blur-sm"
                              placeholder="+34..."
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-white ml-1">¿Cómo podemos ayudarte?</label>
                        <textarea
                           rows={4}
                           className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-action transition-all resize-none backdrop-blur-sm"
                           placeholder="Describe brevemente tus necesidades..."
                        ></textarea>
                     </div>

                     <div className="pt-2">
                        <Button type="submit" variant="primary" className="w-full justify-center text-base py-4 font-bold tracking-wide shadow-lg hover:shadow-brand-action/25">
                           Enviar mensaje <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                     </div>
                  </form>
               </div>
            </Reveal>

            <Reveal delay={300} className="mt-12 flex flex-col items-center gap-4 pointer-events-auto">
               <p className="text-white/60 text-sm">También puedes escribirnos directamente:</p>
               <a href="mailto:hola@zyria.com" className="inline-flex items-center gap-2 text-white hover:text-brand-lime transition-colors font-medium text-lg">
                  <Mail className="w-5 h-5" /> hola@zyria.com
               </a>
            </Reveal>
         </div>
      </section>
   );
};