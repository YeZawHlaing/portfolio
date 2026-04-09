import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const repoList = [
  
    "YeZawHlaing/Hotel-Management-System",
  "YeZawHlaing/food-ordering-system-java",
  "one-project-one-month/edu-verse",
  "YeZawHlaing/O_Way",
  "YeZawHlaing/Disaster-Preparedness-Myanmar-V1",
  "YeZawHlaing/Disaster-Relief-Management-System",

];

const techColors = {
  JavaScript: "bg-yellow-500",
  Java: "bg-red-500",
  PHP: "bg-indigo-500",
  Dart: "bg-blue-400",
  Go: "bg-cyan-500",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await Promise.all(
          repoList.map(async (repoFullName) => {
            const repoRes = await fetch(
              `https://api.github.com/repos/${repoFullName}`
            );
            const repo = await repoRes.json();

            const langRes = await fetch(repo.languages_url);
            const langsData = await langRes.json();

            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              stars: repo.stargazers_count,
              languages: Object.keys(langsData),
            };
          })
        );

        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Loading projects...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-hide">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] md:min-w-[350px] snap-center p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {project.name.replace(/-/g, " ")}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[60px]">
                {project.description || "Readme provided."}
              </p>

              {/* Languages */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-1 rounded text-white ${
                      techColors[lang] || "bg-gray-500"
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">⭐ {project.stars}</span>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;