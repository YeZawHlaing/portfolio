import { motion } from "framer-motion";

const experiences = [
  {
    title: "Early Frontend Development",
    desc: "Developed scalable frontend projects during school years.",
  },
  {
    title: "Project Competition Winner",
    desc: "Participated and won in school project showcase.",
  },
  {
    title: "Freelance J2EE Projects",
    desc: "Built 6+ J2EE projects during 2nd year as freelance work.",
  },
  {
    title: "PHP Development",
    desc: "Developed multiple PHP-based systems in 3rd year.",
  },
  {
    title: "Spring Boot Intensive",
    desc: "Built several projects in one project one month program under mentorship of Ko San Lin Htun and other senior developers.",
  },
  {
    title: "Backend Engineering Journey",
    desc: "Developed scalable RESTful APIs using Spring Boot, applied SDLC, optimized databases, and collaborated with teams.",
  },
];

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="min-h-screen px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-4xl font-bold mb-12 text-center"
        >
          Experiences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-500">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;