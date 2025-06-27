import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/bg-img.jpg";
import WaveEffect from "../components/WaveEffect";

const Home = () => {
  return (
    <section
      id="home"
      className="relative lg:h-screen h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80  z-0" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-blue-200 bg-clip-text text-transparent"
        >
          HITARTH REVAKAR
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "MERN Stack Enthusiast",
            2000,
            "Software Engineer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-2xl font-normal text-indigo-300 mt-5"
          repeat={Infinity}
        />

        <p className="text-lg md:text-2xl mt-10 text-neutral-300 dark:text-neutral-400 mb-6 max-w-3xl mx-auto text-center">
          I'm a passionate{" "}
          <span className="text-indigo-400 font-medium">
            Web & Software Developer
          </span>{" "}
          focused on crafting dynamic, scalable, and user-friendly digital
          solutions. I enjoy building intuitive interfaces and solving
          real-world problems through code.
        </p>

        <div className="mt-5 flex flex-row lg:flex-row sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block lg:px-8 lg:py-3 px-5 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block  lg:px-8 lg:py-3 px-5 py-4 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg font-semibold transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-10 h-10 text-indigo-400 group-hover:text-white transition-colors duration-300" />
        </motion.div>
        <span className="text-[10px] text-indigo-300 mt-1 group-hover:text-white transition duration-300">
          Scroll Down
        </span>
      </a>

    </section>
  );
};

export default Home;
