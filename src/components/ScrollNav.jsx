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

      setIsIdle(false);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);

      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 3000);
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
      className="fixed bottom-6 right-6 z-50 group w-14 h-14 flex items-center justify-center rounded-[50%] bg-gray-800 text-white shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-xl animate-fadeInUp cursor-pointer"
      aria-label={showUp ? "Scroll to Top" : "Scroll to Next Section"}
    >
      <span
        className={`transition-transform duration-300 group-hover:animate-wiggle`}
      >
        {showUp ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <ChevronDown className="w-6 h-6" />
        )}
      </span>
    </button>
  );
};

export default ScrollNav;
