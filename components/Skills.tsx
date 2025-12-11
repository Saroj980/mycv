import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              <span className="text-emerald-400">03.</span> Technical Skills
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I've worked with a diverse range of technologies, from CMS platforms like WordPress and Wix to modern JavaScript frameworks. I'm constantly learning and expanding my toolkit to build better digital products.
            </p>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
               <h3 className="text-xl font-semibold text-slate-200 mb-4">Core Competencies</h3>
               <ul className="space-y-2">
                  <li className="flex items-center text-slate-400">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                     Full Site Building (WP, Wix, Shopify)
                  </li>
                  <li className="flex items-center text-slate-400">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                     Custom Plugin & Theme Development
                  </li>
                  <li className="flex items-center text-slate-400">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                     Frontend UI/UX Implementation
                  </li>
                  <li className="flex items-center text-slate-400">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                     Server Automation & CI/CD
                  </li>
               </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {SKILLS_DATA.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, borderColor: '#10b981' }}
                className="bg-slate-900 border border-slate-800 p-4 rounded-lg text-center cursor-default transition-colors group"
              >
                <span className="text-slate-400 font-medium group-hover:text-white transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;