import { motion } from "framer-motion";

const Certificates = () => {
  // Tailored to your engineering, cloud, and security focus areas
  const credentials = [
    {
      title: "AWS Serverless Mindset",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued May 2026",
      image: "/serverless.jpg", 
      pdfUrl: "/serverless mindset.pdf",
    },
    {
      title: "AWS Lambda Foundation",
      issuer: "Amazon Web Service (AWS)",
      date: "Issued May 2026",
      image: "/lambda.jpg", 
      pdfUrl: "/AWS lambda foundation.pdf", // Fixed route mapping out of public folder
    },
    {
      title: "Amazon API Gateway for Serverless Application",
      issuer: "Amazon Web Service (AWS)",
      date: "Issued May 2026",
      image: "/api gateway.jpg", 
      pdfUrl: "/api gateway.pdf",
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto min-w-0 w-full">
        
        {/* Section Header with Carousel Navigation Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 px-1">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase block">
              Verified Credentials
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              AWS Serverless Completion Certificates
            </motion.h2>
          </div>
          
          {/* Subtle hint for desktop/mobile users */}
          <div className="text-xs font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1.5 font-mono shrink-0">
            Swipe / Scroll horizontally 
            <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Isolated Horizontal Scrollable Track - Adjusted card baselines to be more compact */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent min-w-0 w-full">
          {credentials.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="min-w-[260px] sm:min-w-[320px] md:min-w-[340px] max-w-[350px] flex-1 snap-start shrink-0 group flex flex-col rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Certificate Image Frame (A4 Aspect Preserved - Scaled down along with the card) */}
              <div className="w-full aspect-[1.414/1] bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60 relative">
                <img
                  src={cert.image}
                  alt={`${cert.title} Visual Copy`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Info & URL Layout Container */}
              <div className="p-5 flex flex-col justify-between flex-1 min-w-0 w-full">
                <div className="min-w-0 w-full mb-5">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase block mb-1">
                    {cert.issuer} • {cert.date}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug break-words">
                    {cert.title}
                  </h3>
                </div>

                {/* PDF Redirection Link */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 min-w-0 w-full">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors uppercase tracking-wider font-mono"
                  >
                    View Verification PDF
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;