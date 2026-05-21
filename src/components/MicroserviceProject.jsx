import { motion } from "framer-motion";

const MicroserviceProject = () => {
  // Organized by infrastructural layer to show deep engineering intent
  const techStack = {
    "Backend & Frameworks": ["Java", "Spring Boot", "Spring Cloud", "Netflix Eureka"],
    "Data & Caching": ["PostgreSQL", "Spring Data JPA", "Hibernate", "Redis (Caching)"],
    "Event Streaming & Communication": ["Apache Kafka", "gRPC", "RESTful APIs"],
    "DevOps & Security": ["Docker", "Cloudflare", "Spring Security JWT"]
  };

  const coreServices = [
    {
      name: "API Gateway & Discovery",
      desc: "Centralized entry point utilizing Netflix Eureka for service registration, dynamic routing, and load balancing across instances."
    },
    {
      name: "User & Auth Service",
      desc: "Handles secure user onboarding, identity verification, and issues stateless, cryptographically signed JWT tokens."
    },
    {
      name: "Wallet & Ledger Service",
      desc: "Manages individual balances and processes transactional debits/credits using double-entry bookkeeping principles for financial integrity."
    },
    {
      name: "Payment & Transaction Processor",
      desc: "An event-driven transaction pipeline built on Kafka to guarantee asynchronous processing, eventual consistency, and zero-loss message delivery."
    }
  ];

  return (
    <section id="microservice-project" className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto min-w-0 w-full">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3 px-1">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase block">
            Architectural Focus
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Microservice Architecture Project
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed break-words">
            A high-performance, distributed E-Wallet application designed to handle high-throughput financial transactions safely, reliably, and with eventual consistency across services.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start min-w-0 w-full">
          
          {/* Column 1 & 2: Project Blueprint & Services */}
          <div className="lg:col-span-2 space-y-8 min-w-0 w-full">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-md min-w-0 w-full overflow-hidden">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                System Architecture & Design
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 break-words">
                This project shifts away from tight monolithic couplings to leverage a loosely coupled microservices mesh. High-speed internal communications are offloaded to **gRPC** for low-latency binary serialization, while system-wide side effects—like transaction ledgers and notifications—are entirely decoupled using an asynchronous **Apache Kafka** event pipeline.
              </p>
              
              {/* Repository Link Callout */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 min-w-0 w-full">
                <span className="text-xs text-slate-400 font-mono break-all">
                  github.com/YeZawHlaing/E-Wallet
                </span>
                <a
                  href="https://github.com/YeZawHlaing/E-Wallet.git"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shrink-0 w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                  Inspect Architecture
                </a>
              </div>
            </div>

            {/* Service Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0 w-full">
              {coreServices.map((service, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 min-w-0 w-full overflow-hidden">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1.5 font-mono break-words">
                    {service.name}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed break-words">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Professional Tech Stack Panel */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-md space-y-6 lg:h-full min-w-0 w-full overflow-hidden">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
              System Breakdown
            </h3>
            
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="space-y-2 min-w-0 w-full">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5 min-w-0 w-full">
                  {items.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm whitespace-nowrap"
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

export default MicroserviceProject;