/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import {
  Send, User, Mail, MessageSquare, Phone, MapPin, Github, Linkedin, CheckCircle
} from 'lucide-react';
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
  const [state, handleSubmit] = useForm("xwpbyyqv");

  // Auto-reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden py-20 px-4"
    >
      {/* Holographic Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-violet-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed opacity-60" />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-60" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        custom={1}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6"
            variants={fadeIn}
            custom={1}
          >
            <span className="text-sm text-gray-300">GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
            variants={fadeIn}
            custom={1}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
            variants={fadeIn}
            custom={2}
          >
            Ready to bring your ideas to life? I'm here to help you create something amazing. Let's start a conversation and turn your vision into reality.
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Info */}
          <motion.div className="space-y-8" variants={fadeIn} custom={2}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/20 hover:border-violet-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:hitarthrevakar4@gmail.com" 
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    hitarthrevakar4@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+919106377782" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    +91 91063 77782
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/20 hover:border-pink-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Vadodara, Gujarat, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="pt-4"
              variants={fadeIn}
              custom={3}
            >
              <p className="font-semibold text-pink-400 mb-4 text-lg">Follow Me</p>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/HitarthRevakar" 
                  target="_blank" 
                  className="w-12 h-12 bg-gray-900/70 backdrop-blur-2xl border border-white/20 rounded-lg flex items-center justify-center hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/hitarth-revakar-334245186/" 
                  target="_blank" 
                  className="w-12 h-12 bg-gray-900/70 backdrop-blur-2xl border border-white/20 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                </motion.a>
                <motion.a 
                  href="https://wa.me/919106377782" 
                  target="_blank" 
                  className="w-12 h-12 bg-gray-900/70 backdrop-blur-2xl border border-white/20 rounded-lg flex items-center justify-center hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-6 h-6 text-green-400" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div className="relative" variants={fadeIn} custom={3}>
            <div className="bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">

            {state.succeeded ? (
              <motion.div
                className="p-8 md:p-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col lg:mt-20 my-10 items-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>

                  <div className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                    >
                      Message Sent Successfully!
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-gray-400 max-w-sm mx-auto leading-relaxed"
                    >
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="text-sm text-gray-500"
                    >
                      Redirecting back to form in 3 seconds...
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-12 space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-white mb-3">
                    <User className="w-4 h-4 mr-2 text-violet-400" />
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500/50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-white mb-3">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-300"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-white mb-3">
                    <MessageSquare className="w-4 h-4 mr-2 text-pink-400" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500/50 transition-all duration-300 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
                </div>

                <div className="flex justify-center pt-4">
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="group relative px-8 py-4 overflow-hidden rounded-lg font-medium transition-all duration-300 w-full sm:w-auto disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600" />
                    <div className="absolute inset-[1px] bg-black rounded-lg" />
                    <span className="relative z-10 flex items-center justify-center text-white cursor-pointer">
                      {state.submitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </form>
            )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;