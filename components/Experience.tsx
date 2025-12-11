import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4"><span className="text-emerald-400">01.</span> Experience</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-900 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-200">{job.role}</h3>
                <span className="text-sm font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                  {job.period}
                </span>
              </div>
              
              <div className="text-lg text-slate-400 font-medium mb-4 flex items-center gap-2">
                <Briefcase size={16} />
                {job.company}
              </div>
              
              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400">
                {job.details.map((detail, idx) => (
                  <li key={idx} className="pl-1 hover:text-slate-300 transition-colors">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;