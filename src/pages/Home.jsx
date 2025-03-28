// import React from "react";
// import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
// // import img1 from "../assets/myImg/pic1.jpg";
// import img1 from "../assets/myImg/newImg.webp"
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import About from "./About";
// import { div } from "framer-motion/client";
// import { useEffect } from "react";

// function Home() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
    
//     <section className="mt-22 bg-gray-900 min-h-screen flex items-center justify-center px-6 md:px-16">
//       <motion.div 
//         className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Image Section */}
//         <motion.div 
//           className="w-full md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
        
//           <img
//             src={img1}
//             alt="Tarun Kumar"
//             className="w-72 md:w-86  rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
//           />
        

//         </motion.div>

        

//         {/* Text Section */}
//         <motion.div 
//           className="w-full md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <motion.h2 
//             className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             Hey, I'm Tarun Kumar
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-gray-300 mb-3"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.7 }}
//           >
//             I'm a <span className="text-yellow-400 font-semibold">Web Developer</span>
//           </motion.p>
//           <motion.p 
//             className="text-gray-400 leading-relaxed mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.8 }}
//           >
//             Passionate about building modern and scalable web applications. I love coding, 
//             designing, and solving complex problems to create seamless user experiences.
//           </motion.p>

//           {/* Social Media Icons */}
//           <motion.div 
//             className="flex justify-center md:justify-start gap-4 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.9 }}
//           >
//             <a
//               href="https://www.linkedin.com/in/tarun-kumar-108a6a294/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-yellow-400 text-2xl hover:text-white transition duration-300"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/TarunKumar1212"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-yellow-400 text-2xl hover:text-white transition duration-300"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://www.instagram.com/tarun_shahh?igsh=Y2N0czV5eGtjaGhx"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-yellow-400 text-2xl hover:text-white transition duration-300"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="mailto:tarunkumar12122002@gmail.com"
//               className="text-yellow-400 text-2xl hover:text-white transition duration-300"
//             >
//               <FaEnvelope />
//             </a>
//           </motion.div>

//           {/* Call to Action Button */}
//           <motion.div 
//             className="flex justify-center md:justify-start"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             <Link to="/contact"
//               className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md 
//                      transition duration-300 hover:bg-white hover:text-gray-900"
//             >
//               Hire Me
//             </Link>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
    
    
//   );
// }

// export default Home;
