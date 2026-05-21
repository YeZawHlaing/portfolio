import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 w-full border-t border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Header Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let’s Work Together
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            I’m always open to discussing modern microservice systems, complex engineering challenges, or architectural integrations.
          </p>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          
          {/* Email */}
          <a 
            href="mailto:yzaw3684@gmail.com"
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-900/80 transition-all group shadow-sm"
          >
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors shrink-0">
              <FaEnvelope className="text-base" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-400 font-mono uppercase tracking-wider">Email</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">yzaw3684@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+959683776164"
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-900/80 transition-all group shadow-sm"
          >
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors shrink-0">
              <FaPhone className="text-base" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-400 font-mono uppercase tracking-wider">Phone</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">09683776164</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-900/40 shadow-sm">
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 shrink-0">
              <FaMapMarkerAlt className="text-base" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-400 font-mono uppercase tracking-wider">Location</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">Mandalay, Myanmar</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;