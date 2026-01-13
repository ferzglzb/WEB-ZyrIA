import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { UseCases } from './components/UseCases';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { LumaSpin } from './components/ui/luma-spin';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced simulated loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-petrol"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
             <div className="flex flex-col items-center gap-6">
                <LumaSpin />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-white font-bold text-xl tracking-widest">ZyrIA</span>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Layout>
          <Hero />
          <About />
          <Services />
          <UseCases />
          <Process />
          <Contact />
        </Layout>
      </motion.div>
    </>
  );
}

export default App;