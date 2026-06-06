import { motion } from "framer-motion";

const Experience = () => {
  // Hardcoded project URLs mapping directly to the endpoints in your Projects component
  const projectLinks = {
    "edu-verse": "https://github.com/one-project-one-month/edu-verse",
    "food-ordering-system": "https://github.com/one-project-one-month/food-ordering-system-java",
  };

  return (
    <section id="experience" className="py-32 px-4 sm:px-8 lg:px-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 w-full overflow-hidden">
      {/* Container expanded to full site width limit with increased breathing room */}
      <div className="max-w-7xl mx-auto min-w-0 w-full lg:px-4">
        
        {/* Section Heading with significantly larger typography */}
        <div className="space-y-3 mb-20 px-1">
          <span className="text-sm font-bold tracking-widest text-blue-500 uppercase block font-mono">
            Journey & History
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Full-width Seamless Timeline Track */}
        <div className="w-full space-y-16 px-1">
          
          {/* PARENT COMPANY TRACK: ONE PROJECT ONE MONTH (OPOM) */}
          <div className="flex gap-8 min-w-0 w-full group">
            
            {/* Left Timeline Rail - Upscaled for heavy visual presence */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center font-bold font-mono text-slate-800 dark:text-slate-200 text-base shadow-sm group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300">
                OPOM
              </div>
              <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-5 rounded-full group-last:hidden" />
            </div>

            {/* LinkedIn Company Roles Stack */}
            <div className="flex-1 min-w-0 space-y-12 pt-1.5">
              
              {/* Company Header Info */}
              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white truncate tracking-tight">
                  One Project One Month (OPOM)
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 font-mono mt-1.5">
                  Freelance • 2 yrs
                </p>
              </div>

              {/* ROLE 1: JAVA TEAM LEAD */}
              <div className="relative pl-4 min-w-0 w-full space-y-3">
                {/* Visual node indicator upscaled and aligned perfectly over rail line */}
                <div className="absolute -left-[45px] top-3 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-950 z-10" />
                
                <div className="min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 truncate">
                    Java Team Lead
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-mono font-medium block mt-1">
                    Jun 2024 - 2025
                  </span>
                </div>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-5xl break-words">
                  Stepping up to drive system design logic, coordinating sprint deliverables, and supervising architectural workflows for production-ready microservice implementations within our project pipelines.
                </p>
              </div>

              {/* ROLE 2: JUNIOR JAVA DEVELOPER */}
              <div className="relative pl-4 min-w-0 w-full space-y-6">
                {/* Visual node indicator */}
                <div className="absolute -left-[45px] top-3 w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950 z-10" />
                
                <div className="min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 truncate">
                    Junior Java Developer
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-mono font-medium block mt-1">
                    2024
                  </span>
                </div>
                
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-5xl break-words">
                  Contributed to the core architectural design and implementation patterns for high-performance enterprise engines. Spearheaded robust code contributions across two primary enterprise systems:
                </p>

                {/* PROJECT HIGHLIGHT CHIPS - Expanded padding and sizing for a larger vertical layout frame */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 max-w-5xl min-w-0 w-full">
                  
                  {/* Project 1: Food Ordering System */}
                  <a
                    href={projectLinks["food-ordering-system"]}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 flex flex-col justify-between gap-6 py-8 px-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/10 hover:bg-blue-50/20 dark:hover:bg-blue-950/10 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group/chip shadow-sm"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-14 h-14 rounded-xl bg-orange-500/10 text-orange-500 dark:text-orange-400 flex items-center justify-center font-mono text-base font-bold shrink-0 mt-0.5">
                        FO
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-base sm:text-lg font-bold text-slate-700 dark:text-slate-300 group-hover/chip:text-blue-500 dark:group-hover/chip:text-blue-400 transition-colors block truncate">
                            food-ordering-system-java
                          </span>
                          <svg className="w-4 h-4 text-slate-400 group-hover/chip:text-blue-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 font-mono block mt-0.5">
                          GitHub Repository
                        </span>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                          A high-performance enterprise backend system designed around microservices and optimized data pipelines.
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Project 2: Edu Verse */}
                  <a
                    href={projectLinks["edu-verse"]}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 flex flex-col justify-between gap-6 py-8 px-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/10 hover:bg-blue-50/20 dark:hover:bg-blue-950/10 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group/chip shadow-sm"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center font-mono text-base font-bold shrink-0 mt-0.5">
                        EV
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-base sm:text-lg font-bold text-slate-700 dark:text-slate-300 group-hover/chip:text-blue-500 dark:group-hover/chip:text-blue-400 transition-colors block truncate">
                            edu-verse
                          </span>
                          <svg className="w-4 h-4 text-slate-400 group-hover/chip:text-blue-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 font-mono block mt-0.5">
                          Project Initiation: Nov 2024
                        </span>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                          An educational ecosystem built to streamline digital class management, resource streaming, and student collaboration tracks.
                        </p>
                      </div>
                    </div>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;