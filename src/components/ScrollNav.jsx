import React, { useEffect, useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ScrollNav = () => {
  const [show, setShow] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const atTop = scrollTop < 100;
      const atBottom = scrollTop + windowHeight >= documentHeight - 900;

      setShow(!atTop && !atBottom);
      setShowUp(scrollTop > windowHeight / 5);

      // User is active → reset idle state
      setIsIdle(false);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);

      // Start new idle timer (e.g. 2s)
      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  const scrollBehavior = () => {
    if (showUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const about = document.getElementById("about");
      if (about) {
        about.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!show || isIdle) return null;

  return (
    <button
      onClick={scrollBehavior}
      className="fixed bottom-6 right-6 z-50 group w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-800 dark:bg-gray-800 text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label={showUp ? "Scroll to Top" : "Scroll to Next Section"}
    >
      <span className="transition-transform duration-300 group-hover:animate-pulse group-hover:translate-y-1">
        {showUp ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </span>
    </button>
  );
};

export default ScrollNav;
