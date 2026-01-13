import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { Check, X } from 'lucide-react';
import { PricingPlan } from '../types';
import { SpotlightCard } from './ui/spotlight-card';

const PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '€1.997',
    period: 'Al mes',
    features: [
      { text: '2 desarrolladores dedicados', included: true },
      { text: 'Automatización de flujos', included: true },
      { text: 'Peticiones ilimitadas', included: true },
      { text: 'Revisiones ilimitadas', included: true },
      { text: 'Consultoría de negocio', included: false },
      { text: 'Chatbots a medida', included: false },
      { text: 'Pausa o cancela cuando quieras', included: true },
    ]
  },
  {
    name: 'Pro',
    price: '€3.997',
    period: 'Al mes',
    isPopular: true,
    features: [
      { text: '2 desarrolladores dedicados', included: true },
      { text: 'Automatización de flujos', included: true },
      { text: 'Peticiones ilimitadas', included: true },
      { text: 'Revisiones ilimitadas', included: true },
      { text: 'Consultoría de negocio', included: true },
      { text: 'Chatbots a medida', included: true },
      { text: 'Pausa o cancela cuando quieras', included: true },
    ]
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    period: 'Al mes',
    features: [
      { text: 'X desarrolladores dedicados', included: true },
      { text: 'Automatización de flujos', included: true },
      { text: 'Peticiones ilimitadas', included: true },
      { text: 'Revisiones ilimitadas', included: true },
      { text: 'Consultoría de negocio', included: true },
      { text: 'Chatbots a medida', included: true },
      { text: 'Pausa o cancela cuando quieras', included: true },
    ]
  },
];

export const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-24 max-w-[1200px] mx-auto px-6">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-action uppercase tracking-widest mb-3">Precios Claros</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary">Planes a tu medida</h3>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PLANS.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 150} className="h-full">
            <SpotlightCard 
              customSize
              glowColor={plan.isPopular ? "lime" : "teal"}
              className="h-full p-8"
            >
              
              {plan.isPopular && (
                <div className="absolute top-8 right-8 px-3 py-1 bg-brand-lime/20 text-brand-lime text-xs font-semibold rounded-full border border-brand-lime/30 z-20">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-medium text-text-secondary mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                <div className="text-xs text-text-tertiary">{plan.period}</div>
              </div>

              <div className="border-t border-white/10 my-6"></div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-text-primary' : 'text-text-tertiary line-through'}`}>
                    {feature.included ? (
                      <Check className={`w-4 h-4 mt-0.5 ${plan.isPopular ? 'text-brand-lime' : 'text-brand-action'}`} />
                    ) : (
                      <X className="w-4 h-4 text-text-tertiary mt-0.5" />
                    )}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'primary' : 'secondary'} 
                className={`w-full text-sm ${plan.isPopular ? 'bg-brand-lime hover:shadow-[0_4px_12px_rgba(158,220,59,0.3)]' : ''}`}
              >
                {plan.price === 'A medida' ? 'Contáctanos' : `Empezar con ${plan.name}`}
              </Button>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};