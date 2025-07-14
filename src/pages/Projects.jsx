/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Param Group (PCSIONWEB)",
    description:
      "Developed a responsive full-stack company website with a admin panel using React, Node.js, PostgreSQL, and Knex.js. Features include secure APIs, express-validation, and mobile-respoisve design.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Knex.js", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    image: "/pcsionweb-img.png",
    liveUrl: "https://pcsionweb.com",
    githubUrl: "#",
    codeLinks: [
      { name: "Frontend Repository", url: "#" },
      { name: "Backend Repository", url: "#" },
    ],
    featured: true,
  }
  ,
  {
    title: "TaskFlow - The Todo App",
    description:
      "Created a RESTful API with Express and PostgreSQL for task tracking, full CRUD operations.",
    tech: ["React", "Express.js", "PostgreSQL", "Knex.js"],
    category: "Frontend & Backend",
    image: "/my-task-app.png",
    liveUrl: "https://taskflow-the-todo-app.vercel.app/",
    githubUrl: "https://github.com/HitarthRevakar/MyTaskApp",
    codeLinks: [
      { name: "Frontend Repository", url: "https://github.com/HitarthRevakar/mytaskapp-frontend" },
      { name: "Backend Repository", url: "https://github.com/HitarthRevakar/mytaskapp-backend" },
    ],
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
    codeLinks: [
      { name: "Main Repository", url: "https://github.com/HitarthRevakar/weather-app-hitarth-dev" },
    ],
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
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section
      id="projects"
      className="bg-[#FDFAF6] dark:bg-neutral-900 relative overflow-hidden lg:px-20 py-20 px-4"
    >
      <div className="max-w-full mx-auto relative z-10">
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="h-full flex flex-col bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden shadow-xl"
                variants={hoverVariants}
              >
                {/* Optional Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    {/* Add badge here if needed */}
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-50 p-3 bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full min-w-[50px] min-h-[50px] object-contain"
                    onError={(e) => {
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

                {/* Content Section */}
                <div className="p-6 space-y-4 flex-grow">
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
                </div>

                {/* Footer (Pinned to Bottom) */}
                <div className="flex items-center justify-between pt-4 px-6 pb-6 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </motion.a>

                    <motion.button
                      onClick={() => openModal(project)}
                      className="flex items-center text-neutral-600 dark:text-neutral-300 hover:underline text-sm font-medium cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </motion.button>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-indigo-500 transition-all duration-300" />
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

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-1"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-lg"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl border border-neutral-200 dark:border-neutral-700"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                </button>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Choose a repository to view:
                </p>

                {selectedProject.codeLinks?.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Github className="w-5 h-5 mr-3 text-neutral-600 dark:text-neutral-300" />
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {link.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-indigo-500 transition-colors" />
                  </motion.a>
                ))}

                {/* Fallback if no codeLinks */}
                {(!selectedProject.codeLinks || selectedProject.codeLinks.length === 0) && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Github className="w-5 h-5 mr-3 text-neutral-600 dark:text-neutral-300" />
                      <span className="font-medium text-neutral-900 dark:text-white">
                        Main Repository
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-indigo-500 transition-colors" />
                  </motion.a>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={closeModal}
                  className="w-full px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;