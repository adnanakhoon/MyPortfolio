import { motion } from "framer-motion";

const skills = ["React", "Node.js", "MongoDB", "Express","HTML","CSS", "Tailwind CSS", "JavaScript","MySQL","Excel","Power BI","Python","Mongo DB","Wordpress", 'Excellent Problem Solving', 'Agile Methodologies', 'UI/UX Design Principles', 'Responsive Web Design'];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-10 
                 bg-gradient-to-br from-[#fdfbff] via-[#f7f2ff] to-[#f0f7ff]
                 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-10 text-center 
                       bg-gradient-to-r from-purple-600 to-pink-500 
                       bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow-md border 
                         bg-white/50 backdrop-blur-md
                         hover:scale-105 transition-all duration-300 
                         hover:shadow-xl hover:bg-gradient-to-r
                         hover:from-purple-100 hover:to-pink-100"
            >
              <p className="font-semibold text-gray-800 text-center">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
