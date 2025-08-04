/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + window.innerHeight / 3;

      if (scrollY > lastScrollY && scrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(scrollY);

      for (const { href } of navLinks) {
        const section = document.querySelector(href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 text-white md:top-5 md:left-1/2 md:-translate-x-1/2 lg:max-w-screen-lg md:max-w-screen-md md:rounded-2xl"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : "-110%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Gradient Border */}
        <div className="hidden md:block absolute inset-0 bg-gray-900/70 rounded-2xl"></div>

        <div className="relative md:m-[1px] md:rounded-2xl bg-black/90 md:bg-black/20 md:backdrop-blur-xl border-b border-white/10 md:border-none">

          <div className="relative z-10 w-full mx-auto px-5 md:px-10 py-4 flex justify-between items-center">
            <motion.a
              href="#home"
              onClick={() => setActiveLink("#home")}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.90 }}
              className="relative"
            >
              <div className="text-2xl font-extrabold tracking-wide">
                <span className="text-white">
                  &lt; HR /&gt;
                </span>
              </div>
            </motion.a>


            <nav className="hidden md:flex gap-8 font-medium tracking-wide">
              {navLinks.map(({ href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  className="relative group transition-all duration-300"
                >
                  <span
                    className={`transition-all duration-300 ${activeLink === href
                      ? "text-indigo-400 font-semibold"
                      : "text-gray-300 group-hover:text-white"
                      }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-400 transition-all duration-300 ease-in-out ${activeLink === href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-emerald-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
                </motion.a>
              ))}
            </nav>

            <motion.button
              onClick={() => setMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:border-indigo-500/50 transition-all duration-300 group"
              aria-label="Open Menu"
            >
              <Menu size={24} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-[300px] z-50 shadow-2xl flex flex-col bg-black"
            >
              <div className="relative z-10 px-6 py-8 h-full">
                <div className="flex justify-end mb-10">
                  <motion.button
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close Menu"
                    className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500/50 transition-all duration-300 group"
                  >
                    <X size={24} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300" />
                  </motion.button>
                </div>

                <nav className="flex flex-col gap-6 text-xl font-medium">
                  {navLinks.map(({ href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={() => handleLinkClick(href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 10 }}
                      className={`relative group p-3 rounded-lg transition-all duration-300 ${activeLink === href
                        ? "bg-white/5 border border-white/10"
                        : "hover:bg-white/5"
                        }`}
                    >
                      <span
                        className={`transition-all duration-300 ${activeLink === href
                          ? "text-indigo-400 font-semibold"
                          : "text-gray-300 group-hover:text-white"
                          }`}
                      >
                        {label}
                      </span>

                      {activeLink === href && (
                        <motion.div
                          layoutId="mobileActiveLink"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 rounded-r"
                        />
                      )}
                    </motion.a>

                  ))}
                </nav>

                <div className="absolute bottom-10 left-6 right-6">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Crafted with passion</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/80"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
