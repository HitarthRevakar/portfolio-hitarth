import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/* eslint-disable no-unused-vars */
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


    // ---------------- Stop scrolling while open slider ---------- //
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  // Automatically update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

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
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full lg:bg-[#0f172a]/70 bg-[#0f172a] lg:backdrop-blur-lg text-white z-50">
      <div className="w-full mx-auto lg:px-14 px-5 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={() => setActiveLink("#home")}
          className="text-2xl lg:text-2xl font-extrabold tracking-wide text-white hover:text-gray-400 transition custom-title"
        >
          &lt; HR /&gt;
        </a>

        <nav className="hidden md:flex gap-10 font-medium uppercase tracking-wide">
          {navLinks.map(({ href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              onClick={() => handleLinkClick(href)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.3 }}
              className={`relative transition duration-300 ${activeLink === href ? "text-white" : "text-gray-300 dark:text-gray-400 "
                } hover:text-gray-400`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-violet-500 transition-all duration-300 ease-in-out ${activeLink === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </motion.a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden cursor-pointer text-gray-200 hover:text-white transition"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 right-0 h-full w-full max-w-[300px] bg-[#0f172a] text-white z-50 px-6 py-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                  className="text-white  cursor-pointer hover:text-violet-500 "
                >
                  <X
                    size={28}
                    className="border  border-gray-800 rounded-md p-1 size-9"
                  />
                </button>
              </div>

              <nav className="flex flex-col gap-8 mt-10 text-[24px] font-medium ">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => handleLinkClick(href)}
                    className={`transition-colors duration-300 ${activeLink === href
                      ? "text-violet-400 font-semibold"
                      : "text-gray-300 hover:text-violet-500"
                      }`}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
