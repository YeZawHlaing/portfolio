import { motion } from "framer-motion";

const DevopsProject = () => {
  // Categorized by infrastructure and automation layers to showcase a true DevOps workflow
  const devopsStack = {
    "Infrastructure as Code": ["Terraform", "HCL", "AWS Provider", "State Locking"],
    "CI/CD Automation": ["GitHub Actions", "Build Workflows", "Automated Testing", "Secret Masking"],
    "Containerization": ["Docker", "Multi-stage Builds", "Docker Compose", "Image Optimization"],
    "Cloud Resources": ["Amazon EC2", "Amazon ECR", "AWS IAM Roles", "Security Groups"]
  };

  return (
    <section id="devops-project" className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto min-w-0 w-full">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3 px-1">
          <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase block">
            Automation & Delivery Focus
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            DevOps Practice Project
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed break-words">
            An automated, production-ready implementation of the Job-Finder ecosystem. This workspace shifts the focus from simple manual app compilation to complete delivery pipeline automation, configuration locking, and resilient system deployment.
          </p>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start min-w-0 w-full">
          
          {/* Columns 1 & 2: Architectural Deep Dive */}
          <div className="lg:col-span-2 min-w-0 w-full">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm backdrop-blur-md min-w-0 w-full overflow-hidden">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                The Automated Delivery Pipeline
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 break-words">
                The objective of this project was to establish an immutable runtime lifecycle where human intervention is completely removed from the delivery cycle. Every code modification undergoes rigorous, isolated automated screening before deploying directly onto containerized, cloud-allocated compute engines.
              </p>
              
              {/* Repository Source Code Callout */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 min-w-0 w-full">
                <span className="text-xs text-slate-400 font-mono break-all">
                  github.com/YeZawHlaing/Job-Finder
                </span>
                <a
                  href="https://github.com/YeZawHlaing/Job-Finder.git"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors shrink-0 w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                  Inspect Pipeline Configuration
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Tools & Control Panel Matrix */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md space-y-6 lg:h-full shadow-sm min-w-0 w-full overflow-hidden">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
              Tooling Integration
            </h3>
            
            {Object.entries(devopsStack).map(([category, items]) => (
              <div key={category} className="space-y-2 min-w-0 w-full">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5 min-w-0 w-full">
                  {items.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 shadow-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DevopsProject;