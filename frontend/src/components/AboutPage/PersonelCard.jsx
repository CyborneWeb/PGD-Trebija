import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const PersonelCard = ({
  name,
  position,
  icon,
  index = 0,
  isVisible = true,
}) => {
  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center w-full mx-auto shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Red background circle with user icon */}
      <div className="mx-auto bg-red-600 text-white rounded-full w-24 h-24 flex items-center justify-center mb-4 shadow-md">
        <span className="text-5xl react-icon">{icon || <FaUser />}</span>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-red-600 dark:text-red-400 font-medium">{position}</p>
      </div>
    </motion.div>
  );
};

export default PersonelCard;
