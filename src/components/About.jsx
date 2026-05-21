import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase } from "react-icons/fa";

const About = () => {
  // Synthesizing details beautifully inside a code-block scheme
  const developerProfile = {
    "Full Name": "Ye Zaw Hlaing",
    "Date of Birth": "2002-10-30",
    "Gender": "Male",
    "Education": "Bachelor of Computer Science",
    "University": "University of Computer Studies (Mandalay)"
  };

  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-hidden border-t border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-6xl mx-auto min-w-0 w-full">
        
        {/* Title Block Header */}
        <div className="space-y-3 mb-12 text-left">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase font-mono">
            Introduction
          </span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
        </div>

        {/* Dynamic Dual Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-w-0 w-full">
          
          {/* LEFT: Premium Custom IDE/JSON Representation Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full font-mono text-xs sm:text-sm rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-900 shadow-sm overflow-hidden flex flex-col"
          >
            {/* Terminal Window Chrome bar buttons */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/60 border-b border-slate-800/60 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 inline-block" />
              </div>
              <span className="text-[10px] tracking-wide font-bold uppercase text-slate-500 font-mono">
                profile.json
              </span>
            </div>

            {/* Structured Raw String Mappings with clear token coloring syntax */}
            <div className="p-5 sm:p-6 text-slate-300 space-y-1 overflow-x-auto leading-relaxed select-text">
              <p className="text-slate-500">{"{"}</p>
              {Object.entries(developerProfile).map(([key, value], idx, arr) => (
                <p key={key} className="pl-5 whitespace-pre">
                  <span className="text-blue-400">"{key}"</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-400">"{value}"</span>
                  {idx < arr.length - 1 && <span className="text-slate-400">,</span>}
                </p>
              ))}
              <p className="text-slate-500">{"}"}</p>
            </div>
          </motion.div>

          {/* RIGHT: Unaltered Functional Domain Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6 min-w-0 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-900 hover:shadow-md transition">
              <FaServer className="text-blue-500 text-xl mt-1 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold text-base text-slate-800 dark:text-slate-200">Backend Development</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Building scalable APIs with Spring Boot and clean architecture.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-900 hover:shadow-md transition">
              <FaCode className="text-green-500 text-xl mt-1 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold text-base text-slate-800 dark:text-slate-200">Junior Soultion Architect</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  String understand with cloud provider such as AWS and hand on experience with cloud services like EC2, S3, SecurityGroup, VPCs, etc.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-900 hover:shadow-md transition">
              <FaDatabase className="text-purple-500 text-xl mt-1 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold text-base text-slate-800 dark:text-slate-200">DevOps</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Understanding CI/CD workflow and delivering project from scratch to production. 
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;