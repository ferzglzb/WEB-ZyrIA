import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { NavBar } from './ui/tubelight-navbar';
import { MinimalFooter } from './ui/minimal-footer';
import { Home, User, Briefcase, FileText, Settings, Send } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode; hideFooter?: boolean }> = ({ children, hideFooter = false }) => {

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
              width="165"
              height="48"
              fetchpriority="high"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 20px rgba(74, 222, 128, 0.7)) brightness(1.3) saturate(1.2)" }}
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
      {!hideFooter && <MinimalFooter />}
    </div>
  );
};