import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const jobs = [
    {
      role: "Full Stack Developer",
      company: "BuySauda",
      duration: "Jun 2024 – Present",
      desc: "At BuySauda, I played an active role in enhancing and maintaining the company’s digital ecosystem. My work focused not only on ensuring smooth day-to-day functionality but also on elevating the overall user experience. I collaborated closely with cross-functional teams to implement new features, optimize existing components, and troubleshoot issues with precision and speed.",
    },
    {
      role: "Full Stack Developer Trainee",
      company: "ThinkNEXT Technologies Pvt Ltd",
      duration: " Feb 2024 - Jun 2024",
      desc: "As a Full Stack Developer Trainee at ThinkNext, I contributed to developing and enhancing key features across various web applications. I supported day-to-day development tasks, assisted in debugging and refining code, and gained hands-on experience with both frontend and backend technologies.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-10 md:px-20 py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50 backdrop-blur-xl"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
        bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 rounded-xl bg-gradient-to-br from-indigo-700/40 to-purple-700/40 shadow-lg border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              {job.role}
            </h3>
            <p className="text-indigo-50 font-medium">{job.company}</p>
            <p className="text-indigo-100 text-sm mt-1">{job.duration}</p>
            <p className="mt-3 text-gray-500">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
