import { motion } from "framer-motion";

const Services = () => {
  const skills = [
    {
      name: "01 Html, Css, Bootstrap, JavaScript",
      level: "2021-2022",
      // years: "1st year",
    },
    {
      name: "02 Database Management System, JavaSE, J2EE, Software Engineering",
      level: "2022-2023",
      // years: "2nd year",
    },
    {
      name: "03 Internet of Things, PHP, C#, Software Requirement Specification, Software Design",
      level: "2023-2024",
      // years: "3rd year",
    },
    {
      name: "04 Cloud Computing, OOP Design, Software Testing, Information Security",
      level: "2024-2025",
      // years: "4th year",
    },
  ];

  return (
    <section className="p-10 bg-gray-900 min-h-screen text-white overflow-x-hidden">
      <h2 className="text-4xl font-bold mb-16">
        My Computer Science Journey
      </h2>

      <div className="relative">
        {/* Animated Vertical Line */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "100%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
        />

        <div className="space-y-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex items-center group"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.25 + 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* FIXED Diamond Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59,130,246,0.3)",
                    "0 0 12px rgba(59,130,246,0.8)",
                    "0 0 0px rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{
                  delay: index * 0.25 + 0.6,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                  },
                }}
                whileHover={{ scale: 1.3 }}
                style={{ transform: "rotate(45deg)" }}
                className="absolute left-6 -translate-x-1/2 w-4 h-4 bg-blue-500 z-10"
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="ml-16 w-full bg-gray-800 px-6 py-5 rounded-2xl shadow-xl border border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">
                      {skill.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {skill.level}
                    </p>
                  </div>

                  {/* <div className="text-sm text-gray-400">
                    {skill.years}
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;