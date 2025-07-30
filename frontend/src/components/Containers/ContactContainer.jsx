import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaShareAlt,
  FaFacebook,
  FaInstagram,
  FaBuilding,
} from "react-icons/fa";

const ContactContainer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Stopite v stik z nami
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Izberite način, ki vam najbolj ustreza, in se povežite z nami.
            Veseli bomo vašega obiska, sporočila ali sledenja na družbenih
            omrežjih.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Visit Us Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-500"
                  variants={iconVariants}
                >
                  <FaBuilding className="text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Obišči nas
              </h3>
              <div className="space-y-3 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Najdete nas na lokaciji:
                </p>
                <div className="flex items-center justify-center space-x-2 text-gray-800 dark:text-gray-200">
                  <FaMapMarkerAlt className="text-red-600" />
                  <span>Trebija 4, 4224 Gorenja vas</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Za sestanek je potreben predhodni dogovor.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Us Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-500"
                  variants={iconVariants}
                >
                  <FaEnvelope className="text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Kontaktiraj nas
              </h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Email:
                  </p>
                  <a
                    href="mailto:pgdtrebija@gmail.com"
                    className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                  >
                    <FaEnvelope />
                    <span>pgdtrebija@gmail.com</span>
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Telefon:
                  </p>
                  <a
                    href="tel:+38651327888"
                    className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                  >
                    <FaPhone />
                    <span>+386 51 327 888</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-500"
                  variants={iconVariants}
                >
                  <FaShareAlt className="text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Najdi nas na socialnih omrežjih
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Sledite nam za najnovejše novice in dogodke.
              </p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://www.facebook.com/pgdtrebija"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/gasilcitrebija/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactContainer;
