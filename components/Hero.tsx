import React, { Suspense } from 'react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
// import { SplineScene } from './ui/spline-scene'; // Removed sync import
import { Spotlight } from './ui/spotlight';
import { DotScreenShader } from './ui/dot-shader-background';
import { Typewriter } from './ui/typewriter';
import { Loader2 } from 'lucide-react';

const SplineScene = React.lazy(() => import('./ui/spline-scene').then(module => ({ default: module.SplineScene })));

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-brand-petrol text-white overflow-hidden pt-20 md:pt-0">

      {/* Background Interactive Shader - Removed as per request to clear robot view */}
      {/* <div className="absolute inset-0 z-0 opacity-40 pointer-events-none md:pointer-events-auto">
        <DotScreenShader />
      </div> */}

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-0 opacity-60"
        fill="#4ADE80"
      />

      <div className="max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center relative z-10 h-full">

        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pb-12 lg:pb-0 z-20">
          <Reveal>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-lime/50 bg-brand-petrol/80 backdrop-blur-md text-brand-lime text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(74,222,128,0.2)]">
              Inteligencia Artificial para Negocios Reales
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-[1.15] text-white drop-shadow-lg">
              Automatiza <br />
              <span className="text-brand-action md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-brand-action md:to-brand-lime font-extrabold block min-h-[1.2em]">
                <Typewriter
                  words={["Conversaciones", "Procesos", "Ventas", "Soportes"]}
                  speed={100}
                  delayBetweenWords={2000}
                  cursor={true}
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium drop-shadow-md">
              En ZyrIA transformamos la operativa de tu negocio con soluciones de IA prácticas, claras y diseñadas para ahorrar tiempo y recursos.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#contact">
                <Button variant="primary" withArrow className="!px-8 !py-4 text-lg shadow-[0_4px_20px_rgba(74,222,128,0.4)] hover:shadow-[0_4px_30px_rgba(74,222,128,0.6)] border-2 border-transparent">
                  Empezar ahora
                </Button>
              </a>
              <a href="#services">
                <Button variant="secondary" className="!px-8 !py-4 text-lg bg-black/40 border-white/20 hover:bg-black/60 hover:border-brand-action text-white font-semibold backdrop-blur-md">
                  Ver servicios
                </Button>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Content - 3D Robot */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] w-full order-1 lg:order-2 flex items-center justify-center z-10">

          {/* Bottom Fade only - Increased height for smoother transition */}
          <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 z-20 bg-gradient-to-t from-brand-petrol via-brand-petrol/60 to-transparent pointer-events-none"></div>

          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-brand-action animate-spin" />
            </div>
          }>
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-100 md:scale-110 lg:scale-125"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};