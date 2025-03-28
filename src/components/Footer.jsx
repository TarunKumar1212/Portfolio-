import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-bold text-yellow-400">Tarun Kumar</h2>
          <p className="text-gray-400 text-sm mt-1">
            Building impactful and innovative web solutions.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-5 mt-4 md:mt-0"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a
            href="https://www.instagram.com/tarun_shahh?igsh=Y2N0czV5eGtjaGhx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 text-2xl hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-kumar-108a6a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 text-2xl hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/TarunKumar1212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 text-2xl hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:tarunkumar12122002@gmail.com"
            className="text-yellow-400 text-2xl hover:text-white transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        &copy; {new Date().getFullYear()} @TarunKumar. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
