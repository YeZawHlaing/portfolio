import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const featuredRepositories = [
  { owner: "one-project-one-month", name: "edu-verse" },
  { owner: "one-project-one-month", name: "food-ordering-system-java" },
  { owner: "YeZawHlaing", name: "video-streaming-system" },
  { owner: "YeZawHlaing", name: "gRPC_starter" },
  { owner: "YeZawHlaing", name: "O_Way" },
  { owner: "YeZawHlaing", name: "Disaster-Preparedness-Myanmar-V1" },
];

const techColors = {
  JavaScript: "text-yellow-500 border-yellow-500/20 bg-yellow-500/10",
  Java: "text-red-500 border-red-500/20 bg-red-500/5",
  PHP: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
  Dart: "text-blue-400 border-blue-400/20 bg-blue-400/10",
  Go: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  TypeScript: "text-blue-500 border-blue-500/20 bg-blue-500/10",
};

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    try {
      const headers = {
        Accept: "application/vnd.github+json",
        ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
      };

      const repoPromises = featuredRepositories.map((repo) =>
        fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}`, { headers })
          .then((res) => {
            if (!res.ok) throw new Error(`Could not load ${repo.name}`);
            return res.json();
          })
      );

      const rawResults = await Promise.all(repoPromises);

      const formatted = rawResults.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        language: repo.language,
        topics: repo.topics || [],
      }));

      localStorage.setItem("featured-portfolio-repos", JSON.stringify(formatted));
      setProjects(formatted);
    } catch (err) {
      console.error("Error fetching explicit repositories:", err);
      const cached = localStorage.getItem("featured-portfolio-repos");
      if (cached) setProjects(JSON.parse(cached));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("featured-portfolio-repos");
    if (cached) {
      setProjects(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchRepos();
    }
  }, []);

  if (loading) {
    return (
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-16 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 animate-pulse p-6 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
              <div className="pt-4 flex gap-2"><div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16" /></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-50/50 dark:bg-slate-950/20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            A curated selection of backend architectures, systems engineering, and full-stack applications.
          </p>
        </div>

        {/* Grid Container with Width Safety Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-fr">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 min-w-0 w-full overflow-hidden"
            >
              <div className="min-w-0 w-full">
                {/* Header elements wrapped to eliminate flex width pushing */}
                <div className="flex justify-between items-start gap-3 mb-3 min-w-0 w-full">
                  <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors break-words min-w-0 flex-1">
                    {project.name.replace(/[-_]/g, " ")}
                  </h3>
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                      ★ {project.stars}
                    </span>
                  )}
                </div>

                {/* Description Text Boundary Block */}
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 leading-relaxed min-h-[60px] break-words">
                  {project.description || "No description provided. Explore the source repository for implementation details."}
                </p>
              </div>

              {/* Bottom Layout Element Context */}
              <div className="min-w-0 w-full">
                {/* Safe Tag Overflow Layout Wrapping */}
                <div className="flex flex-wrap gap-1.5 mb-6 min-w-0 w-full overflow-hidden">
                  {project.language && (
                    <span className={`text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md border shrink-0 ${techColors[project.language] || "text-slate-400 border-slate-500/20 bg-slate-500/5"}`}>
                      {project.language}
                    </span>
                  )}
                  {project.topics.slice(0, 2).map((topic) => (
                    <span key={topic} className="text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded-md max-w-[120px] truncate">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Dynamic Footer Actions Wrap safely on microscopic layouts */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-sm font-medium min-w-0 w-full">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    Source Code
                  </a>
                  
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors sm:ml-auto shrink-0"
                    >
                      Live Demo 
                      <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;