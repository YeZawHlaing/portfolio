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

  // Flattened array containing all skills exclusively for the mobile carousel infinite slider track
  const allSkills = skillCategories.flatMap((category) => category.items);
  // Doubled array track to guarantee seamless loop layout tracking without white spaces
  const sliderSkills = [...allSkills, ...allSkills, ...allSkills];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto min-w-0 w-full">

        {/* Section Header */}
        <div className="mb-16 space-y-2 px-1 min-w-0 w-full">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-500 uppercase block font-mono">
            Capabilities
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white break-words"
          >
            Technical Skills
          </motion.h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl block break-words leading-relaxed">
            The infrastructure tools, automation workflows, and backend environments I manage.
          </p>
        </div>

      
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 min-w-0 w-full"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="flex flex-col p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/20 dark:bg-slate-900/10 min-w-0 w-full overflow-hidden"
            >
              {/* Category Header */}
              <div className="mb-6 min-h-[48px] min-w-0 w-full">
                <h3 className="text-base font-bold tracking-tight text-slate-800 dark:text-slate-100 break-words">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 leading-relaxed break-words font-medium">
                  {category.description}
                </p>
              </div>

              {/* Flex Chips */}
              <div className="flex flex-col gap-2.5 mt-auto min-w-0 w-full">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40 bg-white dark:bg-slate-950/40 group hover:border-blue-200 dark:hover:border-blue-900/40 transition-colors duration-200 min-w-0 w-full"
                  >
                    <span className="text-lg shrink-0 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.03)] group-hover:scale-105 transition-transform duration-200">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 break-words min-w-0 flex-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

   
        <div className="block md:hidden relative w-full overflow-hidden py-4 mask-horizontal-fades">
          {/* Fading overlay gradients for a high-end carousel look */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
          >
            {sliderSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/20 shadow-sm shrink-0"
              >
                <span className="text-base shrink-0">
                  {skill.icon}
                </span>
                <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-300 font-mono">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;