import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaFireExtinguisher,
  FaQuestionCircle, // Replaced FaHeart with FaQuestionCircle
} from "react-icons/fa";
import image from "../../assets/donate.jpg"

const JoinUs = () => {
  // Reference for checking when section is in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.4,
      },
    },
  };

  return (
    <div ref={sectionRef} className="py-16 px-4 overflow-hidden">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center">
                <FaUsers className="text-red-600 mr-3 text-2xl react-icon" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Pridruži se našemu društvu
                </h2>
              </div>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Našemu društvu se lahko pridružijo vsi odrasli ter otroci od 6.
              leta naprej, za več informacij nam lahko pišete na{" "}
              <span className="text-red-600 font-medium">
                pgdtrebija@gmail.com
              </span>{" "}
              ali pa nas pokličete na našo telefonsko številko{" "}
              <span className="text-red-600 font-medium">+386 51 327 888</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                <FaQuestionCircle className="text-red-600 mr-2 react-icon" />
                Zakaj se pridružiti?
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <FaFireExtinguisher className="text-red-600 text-sm react-icon" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Pridobi dragocena znanja in veščine
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <FaFireExtinguisher className="text-red-600 text-sm react-icon" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Postanite del povezanega društva
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <FaFireExtinguisher className="text-red-600 text-sm react-icon" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Pomagajte vašemu kraju in okolici
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:pgdtrebija@gmail.com"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <FaEnvelope className="react-icon" />
                  <span>Pošlji e-pošto</span>
                </a>
                <a
                  href="tel:+38651327888"
                  className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 border border-red-600 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <FaPhoneAlt className="react-icon" />
                  <span>Pokliči nas</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <motion.div
            variants={imageVariants}
            className="order-first md:order-last relative h-80 md:h-full"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-200 dark:bg-red-900/80 rounded-full z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-red-100 dark:bg-red-900/80 rounded-full z-0"></div>

            <div className="relative z-10 h-full w-full rounded-xl overflow-hidden shadow-xl">
              {/* Replace this with your actual image */}
              <img
                src={image}
                alt="Gasilci PGD Trebija"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1624028293734-44a14abe1e5f?q=80&w=1000";
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium">
                  Postani del našega gasilskega društva
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinUs;
