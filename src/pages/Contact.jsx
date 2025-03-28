import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mdkelovy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonText("Message Sent! ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setButtonText("Send Message"), 3000);
      } else {
        setButtonText("Error! Try Again");
      }
    } catch (error) {
      setButtonText("Failed! Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="mt-22 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-center text-5xl font-extrabold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Work Together
      </motion.h2>

      <p className="text-center text-gray-400 mb-12 text-lg">
        Have a project in mind? Let's create something amazing together!
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Social Links */}
        <motion.div
          className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
          Passionate about building impactful and innovative web solutions that make a difference. Whether it's a startup idea, a side project, or a professional venture, I’d love to hear from you! Let's collaborate and turn ideas into reality with creativity, efficiency, and cutting-edge technology.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Connect with me</h3>
          <div className="flex space-x-5">
            <a
              href="https://www.instagram.com/tarun_shahh?igsh=Y2N0czV5eGtjaGhx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-4xl hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-kumar-108a6a294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-4xl hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/TarunKumar1212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-4xl hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:tarunkumar12122002@gmail.com"
              className="text-yellow-400 text-4xl hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-gray-300 text-sm mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-300 text-sm mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-300 text-sm mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-300 text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-lg font-bold rounded transition duration-300 transform ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed text-gray-300"
                  : "bg-yellow-400 text-gray-900 hover:bg-yellow-300 hover:scale-105"
              }`}
            >
              {buttonText}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
