import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const technicalSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "ReactJS", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "MySQL", level: 70 },
  { name: "Express.js", level: 65 },
  { name: "Java", level: 70 },
  { name: "DSA", level: 70 },
];

const professionalSkills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 85 },
  { name: "Leadership", level: 80 },
  { name: "Problem Solving", level: 85 },
  { name: "Time Management", level: 75 },
];

function Skill() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-32 px-6 md:px-16 bg-gray-900 text-gray-300 min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
            Technical Skills
          </h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium">{skill.name}</p>
                <motion.div
                  className="w-full bg-gray-700 rounded-full h-3"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="h-3 bg-yellow-400 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      textColor: "#FACC15",
                      pathColor: "#FACC15",
                      trailColor: "#374151",
                      textSize: "16px",
                    })}
                  />
                </div>
                <p className="text-lg font-medium mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
