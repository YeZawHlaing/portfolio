import { motion } from "framer-motion";

const Experience = () => {
  // Hardcoded project URLs mapping directly to your GitHub endpoints
  const projectLinks = {
    "qr-mall": "https://github.com/YeZawHlaing/QR-Mall",
    "point-of-sale": "https://github.com/YeZawHlaing/point_of_sale",
  };

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 w-full overflow-hidden">
      {/* Container expanded to full site width limit with clean padding rules */}
      <div className="max-w-7xl mx-auto min-w-0 w-full lg:px-4">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-14 sm:mb-20 px-1">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-500 uppercase block font-mono">
            Journey & History
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Full-width Responsive Timeline Track */}
        <div className="w-full space-y-12 px-1">
          
          {/* PARENT COMPANY TRACK: ONE PROJECT ONE MONTH (OPOM) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 min-w-0 w-full group">
            
            {/* Left Timeline Rail - Adaptive layout shifts to hidden on tiny screen breaklines */}
            <div className="hidden sm:flex flex-col items-center shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center font-bold font-mono text-slate-800 dark:text-slate-200 text-base shadow-sm group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300">
                OPOM
              </div>
              <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-5 rounded-full group-last:hidden" />
            </div>

            {/* LinkedIn Company Roles Stack */}
            <div className="flex-1 min-w-0 space-y-10 pt-0 sm:pt-1.5">
              
              {/* Company Header Info */}
              <div className="min-w-0 flex items-center gap-4 sm:block">
                {/* Mobile-only company badge fallback display */}
                <div className="sm:hidden w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold font-mono text-slate-800 dark:text-slate-200 text-xs shrink-0">
                  OPOM
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white truncate tracking-tight">
                    One Project One Month (OPOM)
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 font-mono mt-0.5 sm:mt-1.5">
                    Freelance • 2 yrs
                  </p>
                </div>
              </div>

              {/* ROLE 1: JAVA TEAM LEAD */}
              <div className="relative pl-0 sm:pl-4 min-w-0 w-full space-y-3">
                {/* Visual node indicator hidden on mobile layout rows */}
                <div className="hidden sm:block absolute -left-[45px] top-3 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-950 z-10" />
                
                <div className="min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 truncate">
                    Java Team Lead
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-mono font-medium block mt-0.5">
                    Jun 2024 - 2025
                  </span>
                </div>

                {/* Clean, Scannable Skill Bullet Points */}
                <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-400 space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-500 mt-1.5 shrink-0 text-xs">◆</span>
                    <span>Drove core system design logic and coordinated sprint deliverables across active technical pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-500 mt-1.5 shrink-0 text-xs">◆</span>
                    <span>Supervised architecture workflows ensuring robust, production-ready microservice deployments.</span>
                  </li>
                </ul>
              </div>

              {/* ROLE 2: JUNIOR JAVA DEVELOPER */}
              <div className="relative pl-0 sm:pl-4 min-w-0 w-full space-y-4">
                {/* Visual node indicator */}
                <div className="hidden sm:block absolute -left-[45px] top-3 w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-950 z-10" />
                
                <div className="min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 truncate">
                    Junior Java Developer
                  </h4>
                  <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-mono font-medium block mt-0.5">
                    2024
                  </span>
                </div>
                
                <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-400 space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 dark:text-slate-600 mt-1.5 shrink-0 text-xs">◆</span>
                    <span>Contributed to enterprise engine development using core design patterns within the Java ecosystem.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 dark:text-slate-600 mt-1.5 shrink-0 text-xs">◆</span>
                    <span>Spearheaded application modules and database schemas for twin core commercial management platforms.</span>
                  </li>
                </ul>

                {/* COMPACT PROJECT HIGHLIGHT CHIPS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 max-w-4xl min-w-0 w-full">
                  
                  {/* Project 1: QR Mall */}
                  <a
                    href={projectLinks["qr-mall"]}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/10 hover:bg-blue-50/20 dark:hover:bg-blue-950/10 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group/chip shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        QR
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 group-hover/chip:text-blue-500 dark:group-hover/chip:text-blue-400 transition-colors block truncate">
                          QR-Mall
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 font-mono block mt-0.5">
                          GitHub Repository
                        </span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 group-hover/chip:text-blue-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* Project 2: Point of Sale */}
                  <a
                    href={projectLinks["point-of-sale"]}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/10 hover:bg-blue-50/20 dark:hover:bg-blue-950/10 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group/chip shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        PS
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 group-hover/chip:text-blue-500 dark:group-hover/chip:text-blue-400 transition-colors block truncate">
                          point_of_sale
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 font-mono block mt-0.5">
                          GitHub Repository
                        </span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 group-hover/chip:text-blue-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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