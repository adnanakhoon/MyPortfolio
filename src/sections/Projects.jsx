import React from "react";
import { motion } from "framer-motion";

const projects = [
{
  title: "E-Commerce Store",
  desc: "A modern, fully responsive online shopping platform with product search, cart, filters, and secure checkout flow.",
  tech: ["React", "Redux Toolkit", "Tailwind CSS"],
},
{
  title: "Blog Web App",
  desc: "A clean and minimal blog application with categories, search, and dynamic post rendering.",
  tech: ["React", "Node", "MongoDB"],
},
{
  title: "Refer & Earn Landing Page",
  desc: "A visually appealing landing page with referral popup, animations, and smooth UI interactions.",
  tech: ["React", "Material UI", "Framer Motion"],
},
{
  title: "Leaderboard System",
  desc: "A responsive leaderboard listing real-time rankings with smooth auto-scroll and animated score updates.",
  tech: ["React", "CSS Animations"],
},
{
  title: "School Listing Website",
  desc: "A directory-style platform with pagination, advanced filters, and SEO-friendly UI for school details.",
  tech: ["Next.js", "Tailwind", "TypeScript"],
},
{
  title: "Drag & Drop Card Builder",
  desc: "A dynamic drag-and-drop UI canvas where users can place cards, show more text, and open detailed popups.",
  tech: ["React", "React DnD", "Framer Motion"],
},
{
  title: "To-Do App",
  desc: "A polished task manager featuring star-marked important tasks, category filters, and clean animations.",
  tech: ["React", "Redux", "Tailwind"],
},
{
  title: "Weather Forecast App",
  desc: "A weather dashboard with animated icons, location search, and real-time API updates.",
  tech: ["React", "OpenWeather API", "CSS"],
},
{
  title: "Real-Time Chat App",
  desc: "A modern chat interface with live messaging, typing indicators, and smooth UI animations.",
  tech: ["React", "Firebase", "Tailwind"],
},

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-24 px-6 md:px-20 
      bg-gradient-to-b from-white via-pink-50 to-purple-50 text-gray-900"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
        bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-[2px] rounded-2xl 
            bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 shadow-xl"
          >
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl h-full">
              <h3 className="text-2xl font-bold mb-3 
                bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {p.title}
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full 
                    bg-gradient-to-r from-purple-200 to-pink-200 text-gray-900 font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Glow */}
            <div className="absolute -inset-1 rounded-2xl blur-xl 
            bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-40"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
