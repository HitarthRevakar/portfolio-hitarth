import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a responsive e-commerce web app with cart, checkout, and admin dashboard using React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    category: "Full Stack",
    image: "/api/placeholder/400/250",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a modern portfolio site using Vite, Tailwind CSS, and Framer Motion animations.",
    tech: ["React", "TailwindCss","SPA","Framer Motion"],
    category: "Frontend",
    image: "/portfolio-img.png",
    liveUrl: "#",
    githubUrl: "https://github.com/HitarthRevakar/portfolio-hitarth.git",
    featured: false,
  },
  {
    title: "My Task App",
    description:
      "Created a RESTful API with Express and PostgreSQL for task tracking, full CRUD operations.",
    tech: ["React", "tailwindcss", "Express.js", "PostgreSQL", "Knex.js"],
    category: "Backend",
    image: "/my-task-app.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and responsive design.",
    tech: ["Html", "CSS", "Javascript (ES6+)", "OpenWeather API"],
    category: "Frontend",
    image: "/weather-app.png",
    liveUrl: "https://weather-app-hitarth-dev.netlify.app/",
    githubUrl: "https://github.com/HitarthRevakar/weather-app-hitarth-dev",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  }),
};

const hoverVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden py-20 px-4"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-indigo-500 mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full"
          >
            MY WORK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-neutral-800 dark:text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
          >
            A curated selection of my recent work, demonstrating frontend and
            backend development skills.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden shadow-xl"
                variants={hoverVariants}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    {/* <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                      FEATURED
                    </span> */}
                  </div>
                )}

                {/* <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
                    {project.category}
                  </span>
                </div> */}

                <div className="relative h-50 p-3 bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full min-w-[50px] min-h-[50px] object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700"
                    style={{ display: "none" }}
                  >
                    <ExternalLink className="w-10 h-10 text-neutral-400 dark:text-neutral-300" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center text-neutral-600 dark:text-neutral-300 hover:underline text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </motion.a>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-indigo-500 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              View All Projects
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
