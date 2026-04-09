import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}   // 🔥 reduced from -60
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
              I'm a{" "}
              <span className="font-semibold text-blue-500">
                backend-focused developer
              </span>{" "}
              from Myanmar, passionate about building scalable systems and modern applications.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
              I specialize in <span className="font-semibold">Spring Boot</span>,
              RESTful APIs, and database design, with hands-on experience across both frontend and backend technologies.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I enjoy solving real-world problems and continuously improving my development workflow to write clean, efficient, and maintainable code.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 30 }}   // 🔥 reduced from 60
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <FaServer className="text-blue-500 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Backend Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Building scalable APIs with Spring Boot and clean architecture.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <FaCode className="text-green-500 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Fullstack Knowledge</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience with React, Flutter, and modern UI development.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <FaDatabase className="text-purple-500 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Database Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Designing efficient schemas and optimizing queries in MySQL.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;