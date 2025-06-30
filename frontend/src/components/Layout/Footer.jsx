import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  const isInView = useInView(footerRef, { once: false, amount: 0.2 });

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="bg-gray-950/80 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Column 1 - Podatki o društvu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-red-500 border-b border-red-500 pb-2">
              Podatki o društvu
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-500" />
                <a
                  href="mailto:pgd.trebija@gmail.com"
                  className="hover:text-red-400 transition-colors"
                >
                  pgd.trebija@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-500" />
                <a
                  href="tel:+38631356849"
                  className="hover:text-red-400 transition-colors"
                >
                  +386 31 356 849
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-red-500 mt-1" />
                <div>
                  <p>Trebija 45</p>
                  <p>4224 Gorenja vas</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Column 2 - Povezave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-red-500 border-b border-red-500 pb-2">
              Povezave
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://spin3.sos112.si/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  SPIN - Sistem za poročanje o intervencijah
                </a>
              </li>
              <li>
                <a
                  href="https://www.gzskofjaloka.si/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  GZ Škofja Loka
                </a>
              </li>
              <li>
                <a
                  href="https://www.arso.gov.si/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  ARSO
                </a>
              </li>
              <li>
                <a
                  href="https://meteo.arso.gov.si/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-red-400 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2 text-red-500" />
                  Meteo.si
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Socialna omrežja */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-red-500 border-b border-red-500 pb-2">
              Socialna omrežja
            </h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://www.facebook.com/pgdtrebija"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/pgdtrebija"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.1 }}
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} PGD Trebija. Vse pravice pridržane.</p>
          <p className="mt-1">
            Izdelava: <span className="text-red-500">Matic Štucin</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
