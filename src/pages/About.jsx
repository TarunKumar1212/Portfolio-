import React from "react";
import img1 from "../assets/myImg/pic1.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mt-32 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-900 text-gray-300">
      
      {/* Text Section */}
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          I am a passionate <span className="text-yellow-400 font-semibold">Web Developer</span> who loves creating modern and 
          scalable applications. With a strong grasp of frontend and backend technologies, I strive 
          to build intuitive and visually appealing user experiences.
        </p>
        <p className="text-gray-400 leading-relaxed">
          My journey in web development started with a curiosity for coding, and today, I am dedicated to 
          solving complex problems and bringing ideas to life through technology.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
          <img
                    src={img1}
                    alt="Tarun Kumar"
                    className="w-72 md:w-86  rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
      </motion.div>

    </section>
  );
}

export default About;
