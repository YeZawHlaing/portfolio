import { motion } from "framer-motion";

const Services = () => {
  const skills = [
    {
      name: "Frontend Development",
      level: "Advanced",
      years: "2+ Years",
    },
    {
      name: "Backend Development",
      level: "Advanced",
      years: "3+ Years",
    },
    {
      name: "Devops",
      level: "Intermediate",
      years: "1 Years",
    },
    {
      name: "Cloud Computing",
      level: "Advanced",
      years: "1 Years",
    },
 
  ];

  return (
    <section id="skills" className="p-10 bg-gray-900 min-h-screen text-white overflow-x-hidden">
      <h2 className="text-4xl font-bold mb-16">What I have been learned</h2>

      <div className="relative">
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2 }}
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
        />

        <div className="space-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex items-center group"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Diamond (Centered on line using absolute positioning) */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15 }}
                className="absolute left-6 -translate-x-1/2 w-4 h-4 
                           bg-blue-500 rotate-45 z-10
                           shadow-md shadow-blue-500/30
                           group-hover:scale-110 transition"
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="ml-16 flex justify-between items-center w-full 
                           bg-gray-800 px-6 py-4 rounded-xl shadow-lg border border-gray-700"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <p className="text-lg font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="text-sm text-gray-400 font-medium">
                  {skill.years}
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