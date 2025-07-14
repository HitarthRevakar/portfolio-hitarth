import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  Code,
  Briefcase,
  GraduationCap,
  Download,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import Photo from "../assets/photo.png";

import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaCode
} from 'react-icons/fa';
import {
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiPostgresql,
  SiFirebase, SiPostman, SiKnexdotjs
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const skills = {
    frontend: [
      { name: "React", icon: FaReact, color: "text-blue-500" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap 5", icon: SiBootstrap, color: "text-purple-600" }
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
      { name: "Knex.js", icon: SiKnexdotjs, color: "text-orange-600" },
      { name: "REST API", icon: TbApi, color: "text-blue-500" }
    ],
    database: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" }
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, color: "text-red-500" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "VSCode", icon: FaCode, color: "text-blue-600" },  // Using FaCode instead
      { name: "Figma", icon: FaFigma, color: "text-purple-500" }
    ]
  };

  // PDF download function
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1BIthhvr9afRo61mx-lfN1o22vnqYyK4V/view?usp=sharing";
    link.download = "RESUME - HITARTH REVAKAR.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className=" w-full bg-[#FDFAF6] dark:bg-neutral-900 relative overflow-hidden pt-30 pb-30 px-4"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        className=" mx-auto w-full flex flex-col lg:flex-row gap-16 items-start relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left photo section */}
        <motion.div
          className="lg:w-2/5 w-full flex flex-col items-center lg:sticky lg:top-24 self-start"
          variants={fadeIn}
          custom={1}
        >
          <div className="relative group">
            {/* Background gradient circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-cyan-500/25 to-sky-500/25 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Clean card without gradient overlay */}
            <div className="relative w-[300px] h-[400px] lg:w-[380px] lg:h-[450px] bg-white dark:bg-neutral-800 backdrop-blur-lg rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden">
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={Photo}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-4 text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-indigo-500 dark:text-indigo-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Vadodara, Gujarat</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                    <Award className="w-4 h-4" />
                    <span>Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download button */}
          <motion.button
            onClick={handleDownloadResume}
            className="group flex items-center cursor-pointer justify-center gap-3 px-8 py-4 mt-8 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-indigo-700 hover:to-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right content section */}
        <motion.div
          className="lg:w-3/5 w-full lg:px-12 space-y-5"
          variants={fadeIn}
          custom={2}
        >
          {/* Header section */}
          <div className="space-y-6">
            <motion.span
              className="inline-block text-sm font-medium text-indigo-500 bg-indigo-100 dark:bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-300 dark:border-indigo-500/20"
              variants={fadeIn}
              custom={2}
            >
              GET TO KNOW ME
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white"
              variants={fadeIn}
              custom={2.2}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl"
              variants={fadeIn}
              custom={2.4}
            >
              I'm a passionate full-stack developer who loves crafting digital
              experiences that make a difference. With expertise in modern web
              technologies, I build scalable applications that solve real-world
              problems.
            </motion.p>
          </div>

          {/* Navigation Tabs */}
          <motion.div
            className="flex flex-wrap gap-3 border-b border-neutral-200 dark:border-white/10 pb-6"
            variants={fadeIn}
            custom={2.6}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeTab === tab.id
                    ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg scale-105"
                    : "bg-white/50 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:scale-102"
                    }`}
                  type="button"
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-neutral-200 dark:border-white/10 p-8 shadow-lg"
          >
            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                  Technical Skills
                </h3>
                <div className="grid gap-8">
                  {Object.entries(skills).map(([category, list]) => (
                    <motion.div
                      key={category}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300 capitalize">
                        {category === "frontend"
                          ? "Frontend Development"
                          : category === "backend"
                            ? "Backend Development"
                            : category === "database"
                              ? "Database & Storage"
                              : "Development Tools"}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {list.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-800 dark:text-indigo-200 rounded-full text-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 cursor-default group hover:shadow-lg hover:shadow-indigo-500/20"
                            >
                              <Icon className={`w-4 h-4 ${item.color} group-hover:rotate-12 transition-transform duration-200`} />
                              {item.name}
                            </motion.span>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                  Professional Experience
                </h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
                  <div className="space-y-12">
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-500 dark:text-indigo-300">
                          <Calendar className="w-4 h-4" />
                          <span>2025</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                          Full Stack Developer Intern
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-300 font-medium text-lg">
                          Param Group of Companies
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          Contributed to full-stack development using the MERN
                          stack, building responsive frontends, integrating
                          secure APIs, and maintaining clean backend
                          architecture.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {[
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Express",
                            "REST APIs",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                  Education Background
                </h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
                  <div className="space-y-12">
                    {/* M.Tech */}
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-indigo-500 dark:text-indigo-300">
                          <Calendar className="w-4 h-4" />
                          <span>2023 - 2025</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                          M.Tech in Computer Science & Engineering
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-300 font-medium text-lg">
                          Navrachna University
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          Gained deep understanding of software engineering
                          principles, advanced algorithms, and emerging
                          technologies.
                          <br />
                          <span className="font-medium">
                            Research work:
                          </span>{" "}
                          'Obesity Risk Prediction Through Machine Learning
                          Methods and Anthropometric Measures'
                        </p>
                      </div>
                    </div>

                    {/* B.Tech */}
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-indigo-500 dark:text-indigo-300">
                          <Calendar className="w-4 h-4" />
                          <span>2020 - 2023</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                          B.Tech in Computer Science & Engineering
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-300 font-medium text-lg">
                          Sardar Vallabhbhai Patel Institute of Technology
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          Comprehensive study of computer science fundamentals,
                          programming languages, and software development
                          methodologies.
                        </p>
                      </div>
                    </div>

                    {/* Diploma */}
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-indigo-500 dark:text-indigo-300">
                          <Calendar className="w-4 h-4" />
                          <span>2017 - 2020</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                          Diploma in Computer Engineering
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-300 font-medium text-lg">
                          Parul University
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          Foundation in computer engineering principles,
                          programming concepts, and technical problem-solving
                          skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
