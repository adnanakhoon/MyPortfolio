import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-6 md:px-20 bg-blackVibrant text-gray-500 relative">
      {/* Gradient blurred background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-200 via-red-200 to-blue-500 opacity-40 blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Hi, I’m <strong>Adnan Ashraf</strong>,a results-driven developer with experience in building and improving modern web applications. Known for quickly understanding project requirements, adapting to changing priorities, and consistently meeting deadlines with a high standard of work. I focus on delivering well-structured, efficient, and reliable solutions that enhance user experience and overall system performance. My approach involves clear planning, attention to detail, and a commitment to continuous improvement, allowing me to contribute effectively to team goals and project success.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
