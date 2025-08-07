/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/HitarthRevakar',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hitarth-revakar-334245186/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:hitarthrevakar4@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919106377782',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.002 3.2c-7.066 0-12.8 5.734-12.8 12.8 0 2.261.59 4.466 1.711 6.398L3.2 28.8l6.672-1.729a12.738 12.738 0 006.13 1.574h.001c7.066 0 12.8-5.734 12.8-12.8S23.068 3.2 16.002 3.2zm0 23.2a10.4 10.4 0 01-5.378-1.477l-.385-.23-3.962 1.025 1.062-3.872-.25-.396a10.405 10.405 0 01-1.65-5.607c0-5.734 4.666-10.4 10.4-10.4s10.4 4.666 10.4 10.4-4.666 10.4-10.4 10.4zm5.705-7.815c-.313-.156-1.847-.914-2.135-1.017s-.494-.156-.703.156-.805 1.017-.988 1.227-.363.234-.676.078c-.313-.156-1.323-.488-2.519-1.558-.93-.828-1.558-1.849-1.742-2.162s-.02-.481.137-.637c.141-.14.313-.363.469-.547.156-.184.208-.313.312-.519.105-.208.053-.39-.025-.547s-.703-1.7-.961-2.323c-.254-.608-.512-.523-.703-.532l-.598-.01a1.151 1.151 0 00-.832.39c-.288.313-1.1 1.074-1.1 2.617s1.127 3.032 1.284 3.239c.156.208 2.22 3.396 5.385 4.758.753.324 1.34.518 1.798.662.756.24 1.444.207 1.988.127.606-.09 1.847-.754 2.109-1.482.26-.726.26-1.348.182-1.48s-.286-.207-.598-.363z" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Custom Solutions of Web',
    'Maintenance'
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
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

      {/* Background gradient effects
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div> */}

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-violet-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-float-delayed opacity-60" />
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-pink-400 rounded-full animate-float-slow opacity-60" />

      <div className="relative z-10 w-full mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-12 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2 col-span-2"
              variants={fadeInUp}
              custom={1}
            >
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  Hitarth Revakar
                </h2>
                <div className="mt-2 h-1 w-16 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full"></div>
              </div>

              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-6 max-w-md">
                Full-stack developer passionate about creating exceptional digital experiences.
                Specialized in modern web technologies and user-centered design.
              </p>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="p-3 bg-gray-900/70 backdrop-blur-2xl border border-white/20 rounded-lg hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 text-gray-400 hover:text-white"
                      aria-label={`Follow on ${social.name}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeInUp}
              custom={2}
            >
              <h3 className="text-sm lg:text-xl font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={fadeInUp}
              custom={3}
            >
              <h3 className="text-sm lg:text-xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                  >
                    <span className="text-gray-400 text-sm flex items-center">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Hitarth Revakar. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                Made by &nbsp;
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Hitarth Revakar
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>


    </footer>
  );
};

export default Footer;