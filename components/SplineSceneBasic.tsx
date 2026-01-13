'use client'

import React from 'react';
import { SplineScene } from "./ui/spline-scene";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6">
    <Card className="w-full h-[500px] bg-brand-petrol relative overflow-hidden border-border-subtle">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Experiencia 3D Interactiva
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Dale vida a tu interfaz con escenas 3D hermosas. Crea experiencias inmersivas 
            que capturan la atención y mejoran tu diseño.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] md:min-h-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
    </section>
  )
}