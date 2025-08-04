/* eslint-disable no-unused-vars */

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[115vh] mx-auto bg-black text-white overflow-hidden"
    >
      {/* Holographic Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl"></div> */}
          {/* <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div> */}
        </div>
      </div>

      {/* Holographic Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 w-full  h-full min-h-screen flex items-center">
        <div className="w-full  mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-25 items-center">

            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="order-2 lg:order-1"
            >
              {/* Status Badge */}
              <div className="mb-8 inline-block">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Open to work</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
                <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  HITARTH
                </span>
                <span className="block mt-2 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  REVAKAR
                </span>
              </h1>

              {/* Role */}
              <div className="mb-6">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "MERN Stack",
                    2000,
                    "Web Developer",
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-400"
                  repeat={Infinity}
                />
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                Building next-generation web experiences with cutting-edge technologies.
                Passionate about creating scalable solutions that push the boundaries of what's possible.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 overflow-hidden rounded-lg font-medium transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600"></div>
                  <div className="absolute inset-[1px] bg-black rounded-lg"></div>
                  <span className="relative z-10 flex items-center gap-2 text-[#ff8bcbdd] group-hover:text-white transition-all duration-300">
                    View Projects
                    <ArrowUpRight className="w-4 h-4 text-[#00F5D4] group-hover:text-white transition-colors duration-300" />
                  </span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Mail, href: "mailto:email@example.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:border-violet-500/50 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              className="hidden lg:flex lg:order-1 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="hidden lg:flex lg:order-1 relative mx-auto">
                <div className="relative w-full max-w-xl mx-auto h-96">
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl animate-gradient"></div>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ top: '15%', left: '25%' }}></div>
                    <div className="absolute w-3 h-3 bg-purple-400 rounded-full animate-float-delayed" style={{ top: '35%', left: '65%' }}></div>
                    <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-float-slow" style={{ top: '55%', left: '45%' }}></div>
                    <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ top: '75%', left: '30%' }}></div>
                  </div>

                  {/* Main Terminal Window */}
                  <div className="relative bg-gray-900/70 backdrop-blur-2xl rounded-xl border border-white/20 p-5 shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                      <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 bg-red-500 rounded-full transition-transform duration-200 hover:scale-125 cursor-pointer"></div>
                        <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full transition-transform duration-200 hover:scale-125 cursor-pointer"></div>
                        <div className="w-3.5 h-3.5 bg-green-500 rounded-full transition-transform duration-200 hover:scale-125 cursor-pointer"></div>
                      </div>
                      <span className="text-xs text-gray-300 ml-3 font-mono tracking-wide">portfolio.js</span>
                    </div>

                    {/* Static Code */}
                    <div className="space-y-2 text-sm font-mono leading-relaxed">
                      <div className="text-purple-300">
                        <span className="text-blue-400">const</span> <span className="text-white">developer</span> = {"{"}
                      </div>
                      <div className="text-gray-200 pl-4">
                        name: <span className="text-green-400">'Hitarth Revakar'</span>,
                      </div>
                      <div className="text-gray-200 pl-4">
                        skills: [
                        <span className="text-yellow-400">'React'</span>,
                        <span className="text-cyan-400">'Node.js'</span>,
                        <span className="text-blue-400">'Express.js'</span>,
                        <span className="text-green-400">'MongoDB'</span>,
                        <span className="text-purple-400">'Tailwind CSS'</span>
                        ],
                      </div>
                      <div className="text-gray-200 pl-4">
                        passion: <span className="text-pink-400">'Digital Creation'</span>,
                      </div>
                      <div className="text-purple-300">
                        {"}"};
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;