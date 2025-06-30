import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col justify-center items-center bg-[#FDFAF6] dark:bg-neutral-900 relative overflow-hidden py-20 lg:px-25 px-5"
    >
      <motion.div
        className="w-full mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        custom={1}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-10"
            variants={fadeIn}
            custom={1}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={fadeIn}
            custom={2}
          >
            Ready to bring your ideas to life? I'm here to help you create something amazing. Let's start a conversation.
          </motion.p>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Side - Contact Information */}
          <motion.div
            className="space-y-8"
            variants={fadeIn}
            custom={2}
          >
            <div>
              <h3 className="text-3xl font-bold text-neutral-800 dark:text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 p-4 rounded-2x ">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-white">Email</h4>
                  <a
                    href="mailto:hitarthrevakar4@gmail.com"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-400"
                  >
                    hitarthrevakar4@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl ">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-white">Phone</h4>
                  <a
                    href="tel:+919106377782"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-400"
                  >
                    +91 91063 77782
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-white">Location</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">Vadodara, Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Social Links (Optional) */}
            <div className="pt-4 px-5">
              <p className="font-semibold text-neutral-800 dark:text-white mb-4 text-xl">Follow Me</p>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/HitarthRevakar"
                  target="_blank"
                  className="w-10 h-10 bg-[#f0f0f0] dark:bg-[#24292e]/40 rounded-lg flex items-center justify-center hover:bg-[#e0e0e0] dark:hover:bg-[#24292e]/60 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-[#333] dark:text-white" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hitarth-revakar-334245186/"
                  target="_blank"
                  className="w-10 h-10 bg-[#e1f3ff] dark:bg-[#0a66c2]/30 rounded-lg flex items-center justify-center hover:bg-[#d0ebff] dark:hover:bg-[#0a66c2]/50 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-[#0077b5] dark:text-white" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919106377782" // Replace with your number
                  target="_blank"
                  className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-300"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="relative"
            variants={fadeIn}
            custom={3}
          >
            <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-2xl"></div>

            <form
              className="relative z-10 p-6 md:p-8 lg:p-12 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                    <User className="w-4 h-4 mr-2 text-indigo-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                    <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                  <MessageSquare className="w-4 h-4 mr-2 text-indigo-500" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  className="w-full px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <motion.button
                  type="submit"
                  className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;
