import React, { useState } from 'react';
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

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

         if (response.ok) {
            setIsSubmitted(true);
            setFormData({
               nombre: '',
               empresa: '',
               email: '',
               telefono: '',
               mensaje: ''
            });
         } else {
            throw new Error('Error en el servidor');
         }
      } catch (err) {
         console.error('Error al enviar formulario:', err);
         setError('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section
         id="contact"
         className="relative min-h-screen flex items-center justify-center bg-brand-petrol py-24 px-6"
      >
         {/* Fondo simple con gradientes */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-petrol via-brand-petrol to-black/50"></div>
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-action/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl"></div>
         </div>

         {/* Contenido */}
         <div className="relative z-10 w-full max-w-[900px] mx-auto">

            {/* Encabezado */}
            <div className="text-center mb-12">
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Empecemos a automatizar.
               </h2>
               <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  ¿Tienes una idea en mente o un proceso que te quita demasiado tiempo? Cuéntanos y busquemos la mejor solución.
               </p>
            </div>

            {/* Formulario */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">

               {isSubmitted ? (
                  // Mensaje de éxito
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                     <CheckCircle className="w-16 h-16 text-brand-lime mb-6" />
                     <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje enviado!</h3>
                     <p className="text-white/70 mb-6">Gracias por contactarnos. Te responderemos pronto.</p>
                     <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
                     >
                        Enviar otro mensaje
                     </button>
                  </div>
               ) : (
                  // Formulario
                  <form onSubmit={handleSubmit} className="space-y-6">

                     {/* Fila 1: Nombre y Empresa */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label
                              htmlFor="nombre"
                              className="block text-sm font-semibold text-white mb-2"
                           >
                              Nombre *
                           </label>
                           <input
                              type="text"
                              id="nombre"
                              name="nombre"
                              required
                              value={formData.nombre}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-action focus:border-transparent transition-all"
                              placeholder="Tu nombre"
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="empresa"
                              className="block text-sm font-semibold text-white mb-2"
                           >
                              Empresa
                           </label>
                           <input
                              type="text"
                              id="empresa"
                              name="empresa"
                              value={formData.empresa}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-action focus:border-transparent transition-all"
                              placeholder="Nombre de tu negocio"
                           />
                        </div>
                     </div>

                     {/* Fila 2: Email y Teléfono */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label
                              htmlFor="email"
                              className="block text-sm font-semibold text-white mb-2"
                           >
                              Email *
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-action focus:border-transparent transition-all"
                              placeholder="tu@email.com"
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="telefono"
                              className="block text-sm font-semibold text-white mb-2"
                           >
                              Teléfono (Opcional)
                           </label>
                           <input
                              type="tel"
                              id="telefono"
                              name="telefono"
                              value={formData.telefono}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-action focus:border-transparent transition-all"
                              placeholder="+52..."
                           />
                        </div>
                     </div>

                     {/* Mensaje */}
                     <div>
                        <label
                           htmlFor="mensaje"
                           className="block text-sm font-semibold text-white mb-2"
                        >
                           ¿Cómo podemos ayudarte? *
                        </label>
                        <textarea
                           id="mensaje"
                           name="mensaje"
                           required
                           rows={4}
                           value={formData.mensaje}
                           onChange={handleInputChange}
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-action focus:border-transparent transition-all resize-none"
                           placeholder="Describe brevemente tus necesidades..."
                        />
                     </div>

                     {/* Error */}
                     {error && (
                        <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm">
                           {error}
                        </div>
                     )}

                     {/* Botón Submit */}
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-action hover:bg-brand-action/90 disabled:bg-brand-action/50 text-brand-petrol font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-action/25 disabled:cursor-not-allowed"
                     >
                        {isSubmitting ? (
                           <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Enviando...
                           </>
                        ) : (
                           <>
                              Enviar mensaje
                              <ArrowRight className="w-5 h-5" />
                           </>
                        )}
                     </button>
                  </form>
               )}
            </div>

            {/* Contacto alternativo */}
            <div className="mt-12 text-center">
               <p className="text-white/60 text-sm mb-4">También puedes escribirnos directamente:</p>
               <a
                  href="mailto:hola@zyria.com"
                  className="inline-flex items-center gap-2 text-white hover:text-brand-lime transition-colors font-medium text-lg"
               >
                  <Mail className="w-5 h-5" />
                  hola@zyria.com
               </a>
            </div>

         </div>
      </section>
   );
};