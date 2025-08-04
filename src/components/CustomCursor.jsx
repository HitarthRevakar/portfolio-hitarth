/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden md:flex"
      animate={{
        x: mousePosition.x - 20, // Center the ring
        y: mousePosition.y - 20,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.6,
      }}
    >
      {/* Main Ring */}
      <div className="w-8 h-8 rounded-full border-2 border-blue-900/70 shadow-[0_0_15px_rgba(59,130,246,0.5)] bg-transparent transition-all duration-300"></div>
      {/* Inner Pulse Effect */}
      <div className="absolute top-0 left-0 w-8 h-8 rounded-full border border-blue-400/30 animate-pulse scale-110"></div>
      {/* Trail Effect */}
      <motion.div
        className="absolute top-0 left-0 w-10 h-10 rounded-full bg-blue-500/10 blur-md"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
      ></motion.div>
    </motion.div>
  );
};

export default CustomCursor;