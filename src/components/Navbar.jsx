import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "Projects", "About", "Contact",'Skills'];

  // Scroll effect to darken navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      bg-gradient-to-r from-purple-600/80 to-pink-500/80 backdrop-blur-md
      ${scrolled ? "shadow-xl from-purple-700/90 to-pink-600/90" : ""}
    `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          Adnan Ashraf
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-white">
          {links.map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer relative"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>

              {/* Hover underline animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-3xl">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col items-center gap-6 text-white py-6 bg-gradient-to-r from-purple-700 to-pink-600"
        >
          {links.map((link) => (
            <li
              key={link}
              className="text-lg font-medium cursor-pointer hover:scale-105 transition-all"
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
