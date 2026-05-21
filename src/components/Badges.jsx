import { motion } from "framer-motion";

const Badges = () => {
  // Configured to represent your technical certifications and cloud competencies
  const verifiedBadges = [
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services",
      issuedDate: "May 21 2026",
      image: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob", // Fallback to live public image assets
      credlyUrl: "https://www.credly.com/badges/3bcfbdb8-bd8a-45fb-bc83-6c2034dda829/public_url",
    }
    // {
    //   title: "HashiCorp Certified: Terraform Associate (003/004)",
    //   issuer: "HashiCorp",
    //   issuedDate: "Nov 2025",
    //   image: "https://images.credly.com/images/a0a16c70-6da4-4363-bda1-fcbf74c2f1f4/image.png",
    //   credlyUrl: "https://www.credly.com/org/hashicorp/badge/hashicorp-certified-terraform-associate-003",
    // },
    // {
    //   title: "Oracle Certified Professional: Java SE Developer",
    //   issuer: "Oracle",
    //   issuedDate: "Aug 2025",
    //   image: "https://images.credly.com/images/737edda0-06f1-4dbf-8181-42e1df284793/image.png",
    //   credlyUrl: "https://www.credly.com/org/oracle/badge/oracle-certified-professional-java-se-11-developer",
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
  };

  return (
    <section id="badges" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto min-w-0 w-full">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3 px-1 min-w-0 w-full">
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase block">
            Digital Achievements
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white break-words"
          >
            Verified Badges
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-sm md:text-base break-words">
            Publicly verifiable metadata tokens validating technical proficiency in specialized infrastructure platforms.
          </p>
        </div>

        {/* Badges Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-0 w-full"
        >
          {verifiedBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group flex items-start sm:items-center gap-5 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 min-w-0 w-full overflow-hidden"
            >
              {/* Increased Badge Visual Image Frame */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 aspect-square rounded-xl bg-slate-50 dark:bg-slate-950/40 flex items-center justify-center p-2 border border-slate-100 dark:border-slate-800 shrink-0 relative overflow-hidden">
                <img
                  src={badge.image}
                  alt={`${badge.title} Official Metadata Badge`}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Badge Context Details */}
              <div className="flex-1 min-w-0 w-full flex flex-col justify-between min-h-[96px] sm:min-h-[112px] py-0.5">
                <div className="min-w-0 w-full">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase block mb-1">
                    {badge.issuer} • {badge.issuedDate}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors break-words">
                    {badge.title}
                  </h3>
                </div>

                {/* Verification Credly Outbound Link */}
                <div className="pt-3 min-w-0 w-full">
                  <a
                    href={badge.credlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors uppercase tracking-wider font-mono"
                  >
                    Verify via Credly
                    <svg className="w-3 h-3 stroke-current fill-none shrink-0" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Badges;