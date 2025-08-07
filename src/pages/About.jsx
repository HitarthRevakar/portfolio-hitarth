/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Photo from "../assets/photo.png";
import skills from "../components/SkillsData";
import { Code, Briefcase, GraduationCap, Download, MapPin, Calendar, Award } from "lucide-react";

const resumeLink = import.meta.env.VITE_RESUME_LINK;

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

  // Resume download function
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.setAttribute("download", "RESUME - HITARTH REVAKAR.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
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

      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Photo Section */}
        <motion.div
          className="lg:w-2/5 w-full flex flex-col items-center lg:sticky lg:top-24 self-start"
          variants={fadeIn}
          custom={1}
        >
          <div className="relative group">
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-4 h-4 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed opacity-60" />
            <div className="absolute top-1/3 -left-12 w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-60" />

            {/* Photo Card */}
            <div className="relative w-[300px] h-[400px] lg:w-[380px] lg:h-[450px] bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl overflow-hidden">
                    <img
                      src={Photo}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Vadodara, Gujarat</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-violet-400 text-sm">
                    <Award className="w-4 h-4" />
                    <span>Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <motion.button
            onClick={handleDownloadResume}
            className="group relative px-8 py-4 mt-8 overflow-hidden rounded-lg font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600" />
            <div className="absolute inset-[1px] bg-black rounded-lg" />
            <span className="relative z-10 flex items-center gap-2 text-white cursor-pointer">
              <Download className="w-5 h-5 group-hover:animate-bounce cursor-pointer" />
              Download Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="lg:w-3/5 w-full space-y-8"
          variants={fadeIn}
          custom={2}
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.div
              className="inline-block px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
              variants={fadeIn}
              custom={2}
            >
              <span className="text-sm text-gray-300">GET TO KNOW ME</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
              variants={fadeIn}
              custom={2.2}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
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
            className="flex flex-wrap gap-4"
            variants={fadeIn}
            custom={2.6}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  type="button"
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-tl from-violet-600 to-pink-600 rounded-lg" />
                  )}
                  {activeTab !== tab.id && (
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg group-hover:bg-white/10" />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
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
            className="bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 shadow-2xl"
          >
            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
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
                      <h4 className="text-lg font-semibold text-pink-400 capitalize">
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
                              className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-gray-300 text-sm hover:border-violet-500/50 hover:text-white transition-all duration-300 cursor-default group"
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
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional Experience
                </h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
                  <div className="space-y-12">
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <Calendar className="w-4 h-4" />
                          <span>2025</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                          Full Stack Developer Intern
                        </h4>
                        <p className="text-pink-400 font-medium text-lg">
                          Param Group of Companies
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          Contributed to full-stack development using the MERN
                          stack, building responsive frontends, integrating
                          secure APIs, and maintaining clean backend
                          architecture.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {["React", "Node.js", "MongoDB", "Express", "REST APIs"].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20"
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
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Education Background
                </h3>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
                  <div className="space-y-12">
                    {/* M.Tech */}
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <Calendar className="w-4 h-4" />
                          <span>2023 - 2025</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                          M.Tech in Computer Science & Engineering
                        </h4>
                        <p className="text-pink-400 font-medium text-lg">
                          Navrachna University
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          Gained deep understanding of software engineering
                          principles, advanced algorithms, and emerging
                          technologies.
                          <br />
                          <span className="font-medium text-violet-400">
                            Research work:
                          </span>{" "}
                          'Obesity Risk Prediction Through Machine Learning
                          Methods and Anthropometric Measures'
                        </p>
                      </div>
                    </div>

                    {/* B.Tech */}
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <Calendar className="w-4 h-4" />
                          <span>2020 - 2023</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                          B.Tech in Computer Science & Engineering
                        </h4>
                        <p className="text-pink-400 font-medium text-lg">
                          Sardar Vallabhbhai Patel Institute of Technology
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          Comprehensive study of computer science fundamentals,
                          programming languages, and software development
                          methodologies.
                        </p>
                      </div>
                    </div>

                    {/* Diploma */}
                    <div className="flex gap-8">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <Calendar className="w-4 h-4" />
                          <span>2017 - 2020</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">
                          Diploma in Computer Engineering
                        </h4>
                        <p className="text-pink-400 font-medium text-lg">
                          Parul University
                        </p>
                        <p className="text-gray-400 leading-relaxed">
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