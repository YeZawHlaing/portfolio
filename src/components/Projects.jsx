import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const repoNames = [
  "Hotel-Management-System",
  "food-ordering-system-java",
  "edu-verse",
  "O_Way",
  "Disaster-Preparedness-Myanmar-V1",
  "Disaster-Relief-Management-System",
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

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ SINGLE FETCH (optimized)
  const fetchRepos = async () => {
    try {
      const res = await fetch(
        "https://api.github.com/users/YeZawHlaing/repos",
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        }
      );

      if (!res.ok) throw new Error(`GitHub error: ${res.status}`);

      const data = await res.json();

      // ✅ filter only your selected repos
      const filtered = data.filter((repo) =>
        repoNames.includes(repo.name)
      );

      // ✅ map clean data
      const formatted = filtered.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
      }));

      // ✅ cache
      localStorage.setItem("projects", JSON.stringify(formatted));

      setProjects(formatted);
    } catch (err) {
      console.error(err);

      // ✅ fallback to cache
      const cached = localStorage.getItem("projects");
      if (cached) {
        setProjects(JSON.parse(cached));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("projects");

    if (cached) {
      setProjects(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchRepos();
    }
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-400 animate-pulse">
          Loading projects...
        </p>
      </section>
    );
  }

  return (
    <section id="projects" className="px-4 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-center"
        >
          Projects
        </motion.h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] md:min-w-[340px] snap-center p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
            >
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {project.name.replace(/-/g, " ")}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[60px]">
                {project.description || "No description provided."}
              </p>

              {/* Language */}
              <div className="mb-4">
                {project.language && (
                  <span
                    className={`text-xs px-2 py-1 rounded text-white ${
                      techColors[project.language] ||
                      "bg-gray-500"
                    }`}
                  >
                    {project.language}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">
                  ⭐ {project.stars}
                </span>

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