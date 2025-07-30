import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  // Changed to once: true to only animate on first view
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const currentYear = new Date().getFullYear();

  // Reduced stagger timing for smoother appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.2, // Reduced from 0.5
      },
    },
  };

  // Simplified item animations with less movement
  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y movement from 20 to 10
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Reduced duration from 0.8 to 0.5
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-gray-950/80 text-white pt-12 pb-6 border-t-5 border-red-800 overflow-hidden w-full"
    >
      <div className="container mx-auto px-4 overflow-x-hidden">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Reduced from 1.0 to 0.6
        >
          {/* Column 1 - Podatki o društvu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} // Reduced delay and duration
          >
            <motion.h3 className="text-xl font-bold text-red-500">
              Podatki o društvu
            </motion.h3>
            {/* Replaced animated underline with static one */}
            <div className="h-[2px] mt-2 mb-4 bg-red-500 w-full"></div>

            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaEnvelope className="mr-3 text-red-500" />
                <a
                  href="mailto:pgd.trebija@gmail.com"
                  className="hover:text-red-400 transition-colors"
                >
                  pgdtrebija@gmail.com
                </a>
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <FaPhone className="mr-3 text-red-500" />
                <a
                  href="tel:+38631356849"
                  className="hover:text-red-400 transition-colors"
                >
                  +386 51 327 888
                </a>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <FaMapMarkerAlt className="mr-3 text-red-500 mt-1" />
                <div>
                  <p>Trebija 4, 4224 Gorenja vas</p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Column 2 - Povezave */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} // Reduced delay and duration
          >
            <motion.h3 className="text-xl font-bold text-red-500">
              Povezave
            </motion.h3>
            {/* Replaced animated underline with static one */}
            <div className="h-[2px] mt-2 mb-4 bg-red-500 w-full"></div>

            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <a
                  href="https://spin3.sos112.si/javno/pregled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  SPIN - Sistem za poročanje o intervencijah
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://www.gz-skofjaloka.si"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  GZ Škofja Loka
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://www.arso.gov.si/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  ARSO
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://meteo.arso.gov.si/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  Meteo.si
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Column 3 - Socialna omrežja */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} // Reduced delay and duration
          >
            <motion.h3 className="text-xl font-bold text-red-500">
              Socialna omrežja
            </motion.h3>
            {/* Replaced animated underline with static one */}
            <div className="h-[2px] mt-2 mb-4 bg-red-500 w-full"></div>

            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://www.facebook.com/pgdtrebija"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }} // Simplified animation
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Reduced scale and duration
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-2xl" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/gasilcitrebija/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Simplified animation
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Reduced scale and duration
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright section */}
        <motion.div
          className="text-center mt-12 pt-6 border-t border-gray-800 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} // Reduced delay and duration
        >
          <p>&copy; {currentYear} PGD Trebija. Vse pravice pridržane.</p>

          {/* Temporary link to GitHub account, will change it to link to portfolio when i have it */}
          <p className="mt-1">
            Izdelava:{" "}
            <a href="https://github.com/CyborneWeb">
              <span className="text-red-500">Matic Štucin</span>
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

