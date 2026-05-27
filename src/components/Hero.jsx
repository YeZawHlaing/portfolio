import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const texts = [
  "I build scalable backend systems",
  "I design serverless cloud architecture",
  "I build high-performance APIs",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplay(texts[index].slice(0, i));
      i++;
      if (i > texts[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1800);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 w-full overflow-hidden pt-16 md:pt-0">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-6 min-w-0">
        
        {/* LEFT CONTENT COLUMNS (Balanced 6/12 Layout for clean spatial pairing) */}
        <div className="md:col-span-6 text-center md:text-left space-y-6 min-w-0 order-2 md:order-1">
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold tracking-widest text-blue-500 uppercase block font-mono"
            >
              Full Stack Software Engineer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white break-words"
            >
              Hi, I'm Ye Zaw Hlaing
            </motion.h1>
          </div>

          {/* Typing Container */}
          <div className="h-8 flex items-center justify-center md:justify-start min-w-0 w-full">
            <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 font-mono tracking-tight truncate">
              {display}
              <span className="animate-pulse ml-0.5 inline-block w-1.5 h-4 bg-blue-500"></span>
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed break-words"
          >
            Specializing in the Java ecosystem, robust microservice design pipelines, and automated cloud deployments. I focus on writing reliable code, optimized architectures, and fluid frontend user spaces.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 min-w-0 w-full"
          >
            <button
              onClick={() => {
                document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-sm font-mono uppercase"
            >
              Certifications
            </button>

            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition font-mono uppercase"
            >
              View Work
            </button>

            <div className="hidden sm:block h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 shrink-0" />

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://github.com/YeZawHlaing" 
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile Link"
                className="p-2.5 text-lg text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-100 dark:hover:border-slate-900 rounded-xl transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ye-zaw-hlaing-3b87b8299/" 
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile Link"
                className="p-2.5 text-lg text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 border border-transparent hover:border-slate-100 dark:hover:border-slate-900 rounded-xl transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT PHOTO LAYER (6/12 Layout — Intentionally Scaled Up Container) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-6 flex justify-center md:justify-end order-1 md:order-2 min-w-0"
        >
          {/* Increased boundaries significantly across all breakpoints */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] aspect-square shrink-0">
            
            {/* Elegant background ambient soft light */}
            <div className="absolute inset-4 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 blur-3xl rounded-full dark:opacity-30 pointer-events-none" />

            {/* Sharp Minimal Showcase Frame */}
            <div className="w-full h-full rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20 p-2 flex items-center justify-center relative overflow-hidden group shadow-sm">
              <img
                src="/profile.jpg"
                alt="Ye Zaw Hlaing Portrait"
                className="w-full h-full object-contain filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.05)] group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;