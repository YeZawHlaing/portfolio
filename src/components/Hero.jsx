import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const texts = [
  "I build scalable APIs",
  "I build mobile apps",
  "I build modern web apps",
];


const Hero = () => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplay(texts[index].slice(0, i));
      i++;
      if (i > texts[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [index]);

  return (
 <section id="hero" className="min-h-screen flex items-center px-6 md:px-16 bg-white dark:bg-gray-950">
  <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
    
    {/* LEFT SIDE */}
    <div className="text-center md:text-left space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Ye Zaw Hlaing
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-500 dark:text-gray-300 h-10"
      >
        {display}
        <span className="animate-pulse">|</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-400 max-w-md mx-auto md:mx-0"
      >
        Passionate Full-Stack Developer specializing in scalable systems,
        modern UI, and high-performance APIs.
      </motion.p>

      {/* CTA Buttons (Dribbble style touch) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex gap-4 justify-center md:justify-start"
      >
    <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition"
>
  Contact Me
</button>

<button
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:scale-105 transition"
>
  View Work
</button>
      </motion.div>
    </div>

    {/* RIGHT SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center md:justify-end"
    >
      <div className="relative">
        
        {/* Soft glow background */}
        <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30 rounded-3xl"></div>

        {/* Glass card */}
        <div className="relative p-4 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
          <img
            // src="https://i.pinimg.com/736x/f0/e3/22/f0e322001c19a49910d11d046d79c388.jpg"
            src="/my_cha-removebg-preview.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
          />
        </div>
      </div>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;