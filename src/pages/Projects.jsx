/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/ProjectData.json";

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
    scale: 1.02,
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
      className="relative w-full min-h-screen bg-black text-white overflow-hidden py-20 px-4"
    >
      {/* Holographic Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-violet-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed opacity-60" />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6"
          >
            <span className="text-sm text-gray-300">MY WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            A curated selection of my recent work, demonstrating frontend and
            backend development skills that solve real-world problems.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-2 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.10 }}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="h-full flex flex-col bg-gray-900/70 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300"
                variants={hoverVariants}
              >
                {/* Optional Badge */}
                {/* {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )} */}

                {/* Image Section */}
                <div className="relative  h-58 p-4 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-4 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-lg"
                    style={{ display: "none" }}
                  >
                    <ExternalLink className="w-10 h-10 text-gray-400" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4 flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-violet-500/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 px-6 pb-6 border-t border-white/20">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </motion.a>

                    <motion.button
                      onClick={() => openModal(project)}
                      className="flex items-center text-violet-400 hover:text-violet-300 text-sm font-medium cursor-pointer transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </motion.button>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900/90 backdrop-blur-2xl rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl border border-white/20"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {selectedProject.category}
                  </p>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
                </motion.button>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <p className="text-sm text-gray-300 mb-4">
                  Choose a repository to view:
                </p>

                {selectedProject.codeLinks?.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Github className="w-5 h-5 mr-3 text-gray-400 group-hover:text-violet-400 transition-colors duration-300" />
                      <span className="font-medium text-white">
                        {link.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </motion.a>
                ))}

                {/* Fallback if no codeLinks */}
                {(!selectedProject.codeLinks || selectedProject.codeLinks.length === 0) && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Github className="w-5 h-5 mr-3 text-gray-400 group-hover:text-violet-400 transition-colors duration-300" />
                      <span className="font-medium text-white">
                        Main Repository
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </motion.a>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <motion.button
                  onClick={closeModal}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:border-violet-500/50 hover:text-white transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </section>
  );
};

export default Projects;