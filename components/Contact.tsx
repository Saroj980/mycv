import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-mono mb-4 block">04. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question about WordPress, need a custom website, or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-slate-300">
                <Mail className="text-emerald-400" size={20} />
                <span>{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
                <Phone className="text-emerald-400" size={20} />
                <span>{PERSONAL_INFO.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
                <MapPin className="text-emerald-400" size={20} />
                <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-block px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400/10 transition-colors"
          >
            Say Hello
          </motion.a>
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-slate-800/50 text-slate-500 text-sm">
            <p>Designed & Built by {PERSONAL_INFO.name}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;