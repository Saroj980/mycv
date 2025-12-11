import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Folder } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof PROJECTS_DATA[0]; index: number }> = ({ project, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group rounded-xl bg-slate-900 border border-slate-800 p-8 overflow-hidden transition-all hover:border-slate-700"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-slate-800 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <Folder size={24} />
          </div>
          <a 
            href={`https://${project.url}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-800">
          <span className="text-xs font-mono text-slate-500 group-hover:text-emerald-400/70 transition-colors">
             {project.url}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <span className="text-emerald-400">02.</span> Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl">
            A selection of projects ranging from WordPress optimizations to React applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;