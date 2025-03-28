import React from "react";
import { motion } from "framer-motion";
import restImg from "../assets/projects/resutarant.png";
import eduImg from "../assets/projects/education.png";
import painttImg from "../assets/projects/paintball.png";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    image: restImg,
    link: "https://dumyresturant.netlify.app/",
    description: "A modern and responsive restaurant website with an online menu and booking system."
  },
  {
    id: 2,
    title: "Education Platform",
    image: eduImg,
    link: "https://dumyeducationconsultancy.netlify.app/",
    description: "An e-learning platform offering courses, quizzes, and student management features."
  },
  {
    id: 3,
    title: "Paintball Booking System",
    image: painttImg,
    link: "https://demopaintballbattlefiledgame.netlify.app/",
    description: "A paintball battlefield web app with slot booking and online payments."
  },
];

function Projects() {
  return (
    <motion.section
      className="bg-gray-900 mt-22 py-12 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }} // Ensures animation triggers properly
    >
      {/* Title Animation */}
      <motion.h2
        className="text-center text-4xl font-bold text-yellow-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-yellow-400 font-semibold hover:text-white transition duration-300"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
