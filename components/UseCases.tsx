import React from 'react';
import { Reveal } from './ui/Reveal';
import { Store, Stethoscope, Utensils, Briefcase } from 'lucide-react';

const CASES = [
  {
    icon: <Utensils size={24} />,
    title: "Restaurantes y Hostelería",
    desc: "Sistemas automáticos que gestionan reservas de mesas, responden dudas sobre menús y horarios, reduciendo drásticamente las llamadas perdidas."
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Clínicas y Salud",
    desc: "Agendamiento de citas 24/7 y envío de recordatorios automáticos a pacientes, optimizando la agenda de los doctores y reduciendo el ausentismo."
  },
  {
    icon: <Store size={24} />,
    title: "Tiendas y E-commerce",
    desc: "Soporte inmediato para consultas sobre estado de pedidos, devoluciones y recomendaciones de productos personalizadas sin intervención humana."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Servicios Profesionales",
    desc: "Para abogados, asesores y consultores: cualificación automática de clientes potenciales (leads) y programación de reuniones en calendarios sincronizados."
  }
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-surface-secondary/30 border-b border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="mb-16">
             <h2 className="text-sm font-bold text-brand-action uppercase tracking-widest mb-3">Aplicaciones Reales</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Casos de Uso</h3>
             <p className="text-text-secondary max-w-2xl text-lg">
               La automatización es versátil. Aquí algunos ejemplos hipotéticos de cómo ayudamos a distintos sectores a ser más eficientes.
             </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((item, index) => (
             <Reveal key={index} delay={index * 150}>
                <div className="clean-card rounded-2xl p-8 border border-border-subtle hover:border-brand-action/50 transition-colors shadow-sm flex flex-col sm:flex-row gap-6 items-start h-full">
                   <div className="shrink-0 w-12 h-12 rounded-full bg-brand-petrol/5 flex items-center justify-center text-brand-teal border border-brand-teal/10">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-text-primary mb-2">{item.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
             </Reveal>
          ))}
        </div>
        
        {/* Benefits Summary - Beneficios */}
        <Reveal delay={600}>
           <div className="mt-20">
               <h3 className="text-2xl font-bold text-center mb-10">Beneficios Claros</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-white border border-border-subtle">
                     <h5 className="font-bold text-brand-petrol mb-2 text-lg">Ahorro de Tiempo</h5>
                     <p className="text-sm text-text-secondary">Libera a tu equipo de tareas manuales y repetitivas.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white border border-border-subtle">
                     <h5 className="font-bold text-brand-petrol mb-2 text-lg">Disponibilidad Total</h5>
                     <p className="text-sm text-text-secondary">Tu negocio atendiendo y captando clientes 24/7.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white border border-border-subtle">
                     <h5 className="font-bold text-brand-petrol mb-2 text-lg">Cero Errores</h5>
                     <p className="text-sm text-text-secondary">Procesos estandarizados que funcionan siempre igual.</p>
                  </div>
               </div>
           </div>
        </Reveal>
      </div>
    </section>
  );
};