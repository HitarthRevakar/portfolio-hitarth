import { TypeAnimation } from "react-type-animation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/bg-img.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full  h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60  z-0" />

      {/* Center Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-blue-200 bg-clip-text text-transparent"
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

        <p className="text-lg md:text-2xl mt-10 text-neutral-300 dark:text-neutral-400 mb-6 max-w-5xl mx-auto text-center">
          I'm a passionate{" "}
          <span className="text-indigo-400 font-bold">
            Web & Software Developer
          </span>{" "}
          focused on crafting dynamic, scalable, and user-friendly digital
          solutions. I enjoy building intuitive interfaces and solving
          real-world problems through code.
        </p>

        <div className="mt-5 flex flex-row flex-wrap gap-4 justify-center items-center">
          {/* Filled Gradient Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-block px-6 py-3 rounded-xl font-semibold bg-gradient-to-br from-[#4f46e5] via-[#5f77f9] to-[#3b82f6] text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
          >
            <span className="inline-block group-hover:tracking-wider transition-all duration-300">
              View Projects
            </span>
          </motion.a>

          {/* Gradient Border Button with Glow */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block p-[2px] rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] shadow-md hover:shadow-blue-500/40 transition-all duration-300"
          >
            <span className="block px-6 py-3 rounded-[10px] bg-[#0f0f0f] text-white font-semibold group-hover:tracking-wider transition-all duration-300">
              Contact Me
            </span>
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

        </span>
      </a>

    </section>
  );
};

export default Home;
