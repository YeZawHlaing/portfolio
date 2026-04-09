import { motion } from "framer-motion";
import { FaJava, FaReact, FaGithub, FaDocker } from "react-icons/fa";
import { SiMysql, SiSpringboot } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      icon: <FaJava className="text-[#f89820]" />,
      level: 90,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-[#6DB33F]" />,
      level: 85,
    },
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      level: 80,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-[#4479A1]" />,
      level: 85,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-[#2496ED]" />,
      level: 60,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-black dark:text-white" />,
      level: 85,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build scalable and modern applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className="text-2xl">
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>

                <span className="text-sm text-gray-500">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;