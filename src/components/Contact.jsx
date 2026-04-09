import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Work Together
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            I’m always open to discussing new projects, ideas, or opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <FaEnvelope className="text-blue-500 text-2xl mx-auto mb-4" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-500 mt-2">yzaw3684@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <FaPhone className="text-green-500 text-2xl mx-auto mb-4" />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-500 mt-2">09683776164</p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <FaMapMarkerAlt className="text-red-500 text-2xl mx-auto mb-4" />
            <p className="font-semibold">Location</p>
            <p className="text-gray-500 mt-2">Mandalay, Myanmar</p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/YeZawHlaing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ye-zaw-hlaing-3b87b8299/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;