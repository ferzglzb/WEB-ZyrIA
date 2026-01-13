import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { NavBar } from './ui/tubelight-navbar';
import { Home, User, Briefcase, FileText, Settings, Send } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const navItems = [
    { name: 'Inicio', url: '#', icon: Home },
    { name: 'Sobre ZyrIA', url: '#about', icon: User },
    { name: 'Servicios', url: '#services', icon: Settings },
    { name: 'Casos de Uso', url: '#use-cases', icon: Briefcase },
    { name: 'Contacto', url: '#contact', icon: Send }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background font-sans text-text-primary">
      
      {/* Top Bar for Logo (Navbar is now floating/tubelight) */}
      <div className="fixed top-0 left-0 w-full z-40 px-6 py-6 pointer-events-none">
          <div className="flex items-center justify-between max-w-[1200px] mx-auto">
            <div className="pointer-events-auto">
                <img 
                  src="https://fbmqjdjpjfvtadcahzcw.supabase.co/storage/v1/object/sign/ZyrIA%20WEB/LOGO%20PNG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcyOWU2MS0zMTAwLTQyYTYtYjMwZC01NDQ2NzcxZDNiMDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaeXJJQSBXRUIvTE9HTyBQTkcucG5nIiwiaWF0IjoxNzY4MjcxNjM3LCJleHAiOjE3OTk4MDc2Mzd9.MbNyCqgdEQ5GrBiiHF1e0faOL2GgKEpTcveL34j8tLg" 
                  alt="ZyrIA Logo" 
                  fetchpriority="high"
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                  style={{ filter: "drop-shadow(0 0 15px rgba(20, 163, 154, 0.6)) brightness(1.2)" }}
                />
            </div>
          </div>
      </div>

      {/* New Tubelight Navbar */}
      <NavBar items={navItems} className="fixed" />

      {/* Main Content */}
      <main className="flex-grow z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="z-10 bg-brand-petrol text-white pt-20 pb-24 md:pb-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
             <div>
                <img 
                  src="https://fbmqjdjpjfvtadcahzcw.supabase.co/storage/v1/object/sign/ZyrIA%20WEB/LOGO%20PNG.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcyOWU2MS0zMTAwLTQyYTYtYjMwZC01NDQ2NzcxZDNiMDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaeXJJQSBXRUIvTE9HTyBQTkcucG5nIiwiaWF0IjoxNzY4MjcxNjM3LCJleHAiOjE3OTk4MDc2Mzd9.MbNyCqgdEQ5GrBiiHF1e0faOL2GgKEpTcveL34j8tLg" 
                  alt="ZyrIA Logo" 
                  loading="lazy"
                  className="h-8 mb-6 opacity-90"
                  style={{ filter: "drop-shadow(0 0 8px rgba(20, 163, 154, 0.4))" }}
                />
                <h2 className="text-3xl font-bold mb-4">Automatización sin complicaciones.</h2>
                <p className="text-white/60 max-w-sm">
                  Ayudamos a negocios locales y empresas a integrar inteligencia artificial para mejorar su día a día.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-8 text-sm text-white/60">
               <div className="flex flex-col gap-3">
                 <span className="text-white font-semibold mb-2 text-brand-lime">Navegación</span>
                 <a href="#about" className="hover:text-brand-action transition-colors">Sobre ZyrIA</a>
                 <a href="#services" className="hover:text-brand-action transition-colors">Servicios</a>
                 <a href="#use-cases" className="hover:text-brand-action transition-colors">Casos de Uso</a>
                 <a href="#process" className="hover:text-brand-action transition-colors">Proceso</a>
               </div>
               <div className="flex flex-col gap-3">
                 <span className="text-white font-semibold mb-2 text-brand-lime">Contacto</span>
                 <a href="#contact" className="hover:text-brand-action transition-colors">Iniciar conversación</a>
                 <a href="mailto:hola@zyria.com" className="hover:text-brand-action transition-colors">hola@zyria.com</a>
               </div>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 pt-8 border-t border-white/10">
             <p>© {new Date().getFullYear()} ZyrIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};