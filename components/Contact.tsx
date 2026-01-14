import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://n8n-n8n.1qsfn3.easypanel.host/webhook/e7fd61a8-7bdc-47b3-b4c8-bd4973ee64f2';

export const Contact: React.FC = () => {
   const [formData, setFormData] = useState({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      mensaje: ''
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
         const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            throw new Error('Error al enviar el formulario');
         }

         setIsSubmitted(true);
         setFormData({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' });
      } catch (err) {
         setError('Hubo un problema al enviar tu mensaje. Intenta de nuevo.');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-petrol">

         {/* Simple gradient background instead of NeonFlow */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-petrol via-brand-petrol to-black/40"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-action/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
         </div>

         <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10 py-24">
            <Reveal>
               <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Empecemos a automatizar.</h2>
                  <p className="text-white/90 text-lg max-w-xl mx-auto drop-shadow-md">
                     ¿Tienes una idea en mente o un proceso que te quita demasiado tiempo? Cuéntanos brevemente y busquemos la mejor solución para tu negocio.
                  </p>
               </div>
            </Reveal>

            <Reveal delay={200}>
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">

                  {isSubmitted ? (
                     <div className="flex flex-col items-center justify-center py-12 text-center">
                        <CheckCircle className="w-16 h-16 text-brand-lime mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje enviado!</h3>
                        <p className="text-white/70 mb-6">Gracias por contactarnos. Te responderemos pronto.</p>
                        <Button
                           variant="secondary"
                           onClick={() => setIsSubmitted(false)}
                           className="border-white/20 text-white"
                        >
                           Enviar otro mensaje
                        </Button>
                     </div>
                  ) : (
                     <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label htmlFor="nombre" className="text-sm font-semibold text-white ml-1">Nombre *</label>
                              <input
                                 id="nombre"
                                 name="nombre"
                                 type="text"
                                 required
                                 value={formData.nombre}
                                 onChange={handleChange}
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-action transition-all"
                                 placeholder="Tu nombre"
                              />
                           </div>
                           <div className="space-y-2">
                              <label htmlFor="empresa" className="text-sm font-semibold text-white ml-1">Empresa</label>
                              <input
                                 id="empresa"
                                 name="empresa"
                                 type="text"
                                 value={formData.empresa}
                                 onChange={handleChange}
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-action transition-all"
                                 placeholder="Nombre de tu negocio"
                              />
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-semibold text-white ml-1">Email *</label>
                              <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 required
                                 value={formData.email}
                                 onChange={handleChange}
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-action transition-all"
                                 placeholder="tu@email.com"
                              />
                           </div>
                           <div className="space-y-2">
                              <label htmlFor="telefono" className="text-sm font-semibold text-white ml-1">Teléfono (Opcional)</label>
                              <input
                                 id="telefono"
                                 name="telefono"
                                 type="tel"
                                 value={formData.telefono}
                                 onChange={handleChange}
                                 className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-action transition-all"
                                 placeholder="+34..."
                              />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label htmlFor="mensaje" className="text-sm font-semibold text-white ml-1">¿Cómo podemos ayudarte? *</label>
                           <textarea
                              id="mensaje"
                              name="mensaje"
                              rows={4}
                              required
                              value={formData.mensaje}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-brand-action focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-action transition-all resize-none"
                              placeholder="Describe brevemente tus necesidades..."
                           ></textarea>
                        </div>

                        {error && (
                           <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm">
                              {error}
                           </div>
                        )}

                        <div className="pt-2">
                           <Button
                              type="submit"
                              variant="primary"
                              disabled={isSubmitting}
                              className="w-full justify-center text-base py-4 font-bold tracking-wide shadow-lg hover:shadow-brand-action/25 disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                    Enviando...
                                 </>
                              ) : (
                                 <>
                                    Enviar mensaje <ArrowRight className="ml-2 w-5 h-5" />
                                 </>
                              )}
                           </Button>
                        </div>
                     </form>
                  )}
               </div>
            </Reveal>

            <Reveal delay={300} className="mt-12 flex flex-col items-center gap-4">
               <p className="text-white/60 text-sm">También puedes escribirnos directamente:</p>
               <a href="mailto:hola@zyria.com" className="inline-flex items-center gap-2 text-white hover:text-brand-lime transition-colors font-medium text-lg">
                  <Mail className="w-5 h-5" /> hola@zyria.com
               </a>
            </Reveal>
         </div>
      </section>
   );
};