import React from 'react';
import { motion } from "framer-motion";

export default function Game() {
  // Categorized data architecture mapped directly to your portfolio workflow styling
  const gameData = {
    title: "My Game Development in Roblox",
    subtitle: "Immersive Systems & Framework Design",
    icon: "https://i.pinimg.com/736x/f1/41/8b/f1418bc2c68f7978bf1604bd9c0c1303.jpg", 
    playLink: "https://www.roblox.com/share?code=6c8228b0a7276f4c950a178c3174fc46&type=ExperienceDetails&stamp=1780759150628",
    // videoUrl: "src/assets/video_2026-06-06_21-52-10.mp4", 
    images: [
      "https://i.pinimg.com/736x/28/68/6d/28686de9d88b8f9d60ec6de546e295b9.jpg",
      "https://i.pinimg.com/736x/95/ee/06/95ee065295d9d196883f5f2df3a41b8e.jpg",
      "https://i.pinimg.com/736x/0f/bc/4a/0fbc4ac51f5ecea0449133f47a02af2a.jpg",
      "https://i.pinimg.com/736x/f1/41/8b/f1418bc2c68f7978bf1604bd9c0c1303.jpg",
    ],
    techStack: {
      "Core Tech": ["Roblox Engine", "Lua", "Luau Type Checker"],
      "External Tooling": ["Rojo", "Git", "Blender"],
      "Frameworks & Patterns": ["OOP Architecture", "Roact", "DataStore v2"],
      "Networking": ["Client-Server Replication", "RemoteEvents", "Deferred Events"]
    },
    implementation: [
      "Designed and optimized modular OOP frameworks in Lua for scalable gameplay systems.",
      "Utilized Rojo and Git for local development, version control, and professional engineering workflows.",
      "Created custom assets and environments in Blender, optimizing triangle counts for low-end mobile devices.",
      "Implemented optimized client-server network payload schemes to secure up to 50 concurrent players per instance."
    ]
  };

  return (
    <section 
      id="roblox-game" 
      className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/50 w-full overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto min-w-0 w-full">
        
        {/* Section Header - Styled like devops.jsx */}
        <div className="mb-16 space-y-3 px-1">
          <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase block">
            {gameData.subtitle}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {gameData.title}
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed break-words">
            A fully realized multiplayer experience highlighting advanced network architecture, system optimization, and UI state responsiveness inside the Roblox Ecosystem. This project bridges standard game design with professional software engine principles.
          </p>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start min-w-0 w-full">
          
          {/* Columns 1 & 2: Main Playstore Content Area */}
          <div className="lg:col-span-2 min-w-0 w-full space-y-8">
            
            {/* Core Game Info Block */}
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm backdrop-blur-md min-w-0 w-full overflow-hidden">
              
              {/* Play Store Profile Header */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6 border-b border-slate-100 dark:border-slate-800">
                <img 
                  src={gameData.icon} 
                  alt="Game Icon" 
                  className="w-24 h-24 rounded-2xl object-cover shadow-sm border border-slate-100 dark:border-slate-800"
                />
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Thingyan Festival (Mandalay)</h3>
                    <p className="text-xs font-medium text-emerald-500 font-mono mt-0.5">Engine: Roblox Engine (Lua)</p>
                  </div>
                  <div>
                     <a
                      href={gameData.playLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-10 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shrink-0 w-full sm:w-auto shadow-sm"
                    >
                      Play Live Experiment
                    </a>
                  </div>
                </div>
              </div>

              {/* Media Gallery Horizontal Carousel */}
              <div className="py-6">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">Media Gallery</h4>
                <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-none">
                  {/* Highlight Video Clip */}
                  {/* <div className="flex-shrink-0 w-[280px] sm:w-[360px] aspect-video rounded-xl overflow-hidden bg-black snap-start border border-transparent dark:border-slate-800 shadow-sm">
                    <video 
                      src={gameData.videoUrl} 
                      controls 
                      muted
                      className="w-full h-full object-cover"
                      poster={gameData.images[0]}
                    />
                  </div> */}
                  {/* Image Slides */}
                  {gameData.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 w-[280px] sm:w-[360px] aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 snap-start border border-transparent dark:border-slate-800 shadow-sm"
                    >
                      <img 
                        src={img} 
                        alt={`Gameplay View ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Bullet Details */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4">Implementation Milestones</h4>
                <ul className="space-y-3">
                  {gameData.implementation.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Column 3: Tools & Integration Matrix */}
          {/* <div className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md space-y-6 lg:h-full shadow-sm min-w-0 w-full overflow-hidden">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
              Stack Architecture
            </h3>
            
            {Object.entries(gameData.techStack).map(([category, items]) => (
              <div key={category} className="space-y-2 min-w-0 w-full">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5 min-w-0 w-full">
                  {items.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 shadow-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

        </div>
      </div>
    </section>
  );
}