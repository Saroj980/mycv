import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-emerald-400 font-medium tracking-wider text-lg block mb-4">Hello, I'm</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-slate-400 mb-8"
        >
          I build <span className="text-emerald-400">digital experiences</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed"
        >
          {PERSONAL_INFO.role}. {PERSONAL_INFO.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-8 py-3 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;