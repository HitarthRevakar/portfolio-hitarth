import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

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
      className="min-h-screen bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden py-20 px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
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
        <motion.div
          className="relative"
          variants={fadeIn}
          custom={3}
        >
          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-2xl"></div>

          <form
            className="relative z-10 p-8 md:p-12 space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-8">
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
                className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeIn}
          custom={4}
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg">
            Prefer email? Reach out directly at{' '}
            <a
              href="mailto:hitarthrevakar4@gmail.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
            >
              hitarthrevakar4@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
