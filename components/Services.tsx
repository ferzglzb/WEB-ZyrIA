import React from 'react';
import { Reveal } from './ui/Reveal';
import { MessageSquare, Share2, Workflow, Link2, Cpu } from 'lucide-react';

const SERVICES = [
  {
    icon: <MessageSquare size={28} />,
    title: "Chatbots Inteligentes",
    description: "Asistentes virtuales entrenados para atención al cliente, ventas y agendamientos. Resuelven dudas frecuentes 24/7 de forma natural."
  },
  {
    icon: <Share2 size={28} />,
    title: "Automatización de Conversaciones",
    description: "Centralizamos tus canales (WhatsApp, Instagram, Web) para que ningún mensaje quede sin respuesta y la captación sea automática."
  },
  {
    icon: <Workflow size={28} />,
    title: "Procesos Internos",
    description: "Eliminamos lo repetitivo. Automatizamos gestión de documentos, reportes y flujos administrativos para liberar a tu equipo."
  },
  {
    icon: <Link2 size={28} />,
    title: "Integración de Herramientas",
    description: "Conectamos tu ecosistema actual (CRM, Calendarios, Email, ERP) para que los datos fluyan solos sin errores manuales."
  },
  {
    icon: <Cpu size={28} />,
    title: "Soluciones Personalizadas",
    description: "Diseñamos arquitecturas de automatización a medida, analizando las necesidades únicas de tu modelo de negocio."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white border-y border-border-subtle relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-sm font-bold text-brand-action uppercase tracking-widest mb-3">Qué Hacemos</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Soluciones aplicables y directas</h3>
             <p className="text-text-secondary text-lg">
               No ofrecemos todo, ofrecemos lo que funciona. Nos especializamos en tecnologías que generan impacto inmediato en la operativa diaria.
             </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {SERVICES.map((service, index) => (
             <Reveal key={index} delay={index * 100}>
               <div className="clean-card rounded-2xl p-8 h-full flex flex-col items-start group hover:border-brand-action transition-all duration-300">
                 <div className="w-14 h-14 rounded-xl bg-surface-secondary flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-petrol group-hover:text-brand-lime transition-colors duration-300 shadow-sm">
                    {service.icon}
                 </div>
                 <h4 className="text-xl font-bold text-text-primary mb-3">{service.title}</h4>
                 <p className="text-text-secondary text-sm leading-relaxed">
                   {service.description}
                 </p>
               </div>
             </Reveal>
           ))}
           
           {/* CTA Card in Grid */}
           <Reveal delay={500}>
             <div className="rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center bg-brand-petrol text-white relative overflow-hidden shadow-lg border border-white/10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-lime via-transparent to-transparent"></div>
                <h4 className="text-xl font-bold mb-4 z-10">¿Buscas algo específico?</h4>
                <p className="text-white/70 text-sm mb-6 z-10">
                  Exploremos juntos cómo adaptar la IA a tus objetivos particulares.
                </p>
                <a href="#contact" className="z-10 inline-block px-6 py-3 rounded-full bg-brand-action hover:bg-brand-teal transition-colors text-white font-semibold text-sm">
                   Consultar solución
                </a>
             </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
};