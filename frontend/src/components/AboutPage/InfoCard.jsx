import React from "react";
import { motion } from "framer-motion";

const InfoCard = ({ icon, title, value, delay = 0 }) => {
  // Animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay,
      },
    },
  };

  // Icon container animation
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay + 0.2,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-700/50 p-5 rounded-lg shadow-md transition-shadow"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-start">
        <motion.div className="flex-shrink-0 mr-4" variants={iconVariants}>
          <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
            <span className="react-icon">{icon}</span>
          </div>
        </motion.div>
        <div>
          <motion.h3
            className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: delay + 0.3 },
            }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="text-lg font-semibold text-gray-800 dark:text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: delay + 0.4,
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            {value}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
