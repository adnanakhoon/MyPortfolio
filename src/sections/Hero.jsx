import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-[#0f0f0f]">
      
      {/* LEFT CONTENT */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Hi, I'm  
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Adnan Ashraf
          </span>
        </h1>

        <p className="mt-5 text-xl md:text-2xl text-gray-300">
          Full Stack Developer • MERN • UI/UX Enthusiast
        </p>

        <motion.a
          href="#contact"
          className="inline-block mt-10 px-10 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* RIGHT SIDE — IMAGE BOX */}
      <motion.div
        className="relative mt-10 md:mt-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-3xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-1 bg-linear-to-br from-purple-500 via-pink-500 to-blue-500">
          <div className="w-full h-full bg-[#0f0f0f] rounded-3xl overflow-hidden">
            <img
              src="/myProfile.jpg"
              alt="Adnan Ashraf"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Glow Animation */}
        <motion.div
          className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 blur-3xl opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
