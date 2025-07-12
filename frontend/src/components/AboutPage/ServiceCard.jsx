import React from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaShieldAlt,
  FaFireExtinguisher,
  FaArrowDown,
} from "react-icons/fa";

const ServiceCard = ({
  title,
  description,
  icon,
  index = 0,
  isVisible = true,
}) => {
  // Determine which icon to show
  const getIcon = () => {
    switch (icon) {
      case "water":
        return <FaTruck className="text-xl" />;
      case "security":
        return <FaShieldAlt className="text-xl" />;
      case "fire":
        return <FaFireExtinguisher className="text-xl" />;
      default:
        return <FaTruck className="text-xl" />;
    }
  };

  // Animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="mb-10 last:mb-0 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
    >
      <div className="flex items-center mb-3">
        <div className="bg-red-600 p-2 rounded-md text-white mr-3">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 pl-11 mb-4">
        {description}
      </p>

      <motion.button
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="text-red-600 dark:text-red-500 flex items-center font-medium ml-11"
      >
        Več informacij
        <FaArrowDown className="ml-2" />
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
