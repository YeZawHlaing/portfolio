import { motion } from "framer-motion";
import { FaJava, FaReact, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { SiMysql, SiSpringboot, SiPostgresql, SiApachekafka, SiRedis, SiTerraform, SiGithubactions } from "react-icons/si";

const Skills = () => {
  // Balanced 4-column layout categorized by engineering specialties
  const skillCategories = [
    {
      title: "Core Backend & Systems",
      description: "Building resilient distributed microservices and message queues.",
      items: [
        { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "Apache Kafka", icon: <SiApachekafka className="text-[#231F20] dark:text-white" /> },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description: "Provisioning dynamic cloud architecture and immutable infrastructure.",
      items: [
        { name: "AWS (ECS, EKS, IAM)", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Terraform (IaC)", icon: <SiTerraform className="text-[#844FBA]" /> },
        { name: "Docker Containers", icon: <FaDocker className="text-[#2496ED]" /> },
      ],
    },
    {
      title: "DevOps & Data pipelines",
      description: "Automating validation pipelines and maintaining persistent databases.",
      items: [
        { name: "GitHub Actions CI/CD", icon: <SiGithubactions className="text-[#2088FF]" /> },
        { name: "PostgreSQL / MySQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Redis Caching", icon: <SiRedis className="text-[#DC382D]" /> },
      ],
    },
    {
      title: "Frontend Ecosystem",
      description: "Crafting modular user interfaces and client-side applications.",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "GitHub", icon: <FaGithub className="text-slate-800 dark:text-slate-200" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto min-w-0 w-full">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3 px-1 min-w-0 w-full">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase block">
            Capabilities
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight break-words"
          >
            Technical Stack & DevOps
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base break-words">
            The infrastructure tools, automation workflows, and backend environments I manage.
          </p>
        </div>

        {/* Layout Grid - Responsive 4 columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-w-0 w-full"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="flex flex-col p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm min-w-0 w-full overflow-hidden"
            >
              {/* Category Header */}
              <div className="mb-5 min-h-[56px] min-w-0 w-full">
                <h3 className="text-base font-bold tracking-tight text-slate-800 dark:text-slate-100 break-words">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed break-words">
                  {category.description}
                </p>
              </div>

              {/* Flex Chips */}
              <div className="flex flex-col gap-2 mt-auto min-w-0 w-full">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/30 group hover:border-slate-200 dark:hover:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors min-w-0 w-full"
                  >
                    <span className="text-lg filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-200 shrink-0">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 break-words min-w-0 flex-1">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;