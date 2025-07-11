import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruck,
  FaInfoCircle,
  FaTools,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import placeholder from "../../assets/placeholder.png";

const VehicleCard = ({ title, description, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  // Calculate if the description is long enough to need expansion
  const isLongDescription = description && description.length > 100;

  // Truncate description if needed
  const truncatedDescription =
    isLongDescription && !expanded
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-full"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image section - reduced width from 1/3 to 1/4 */}
        <div className="relative md:w-1/4">
          <img
            src={imageUrl || placeholder}
            alt={`Gasilsko vozilo ${title}`}
            className="w-full h-40 md:h-full object-cover object-center"
          />
          <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 rounded-br-lg">
            <FaTruck className="inline-block mr-1 react-icon" />
            <span className="font-medium">{title}</span>
          </div>
        </div>

        {/* Content section - increased width */}
        <div className="p-4 md:w-3/4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                {title}
                <FaInfoCircle className="ml-2 text-red-500 text-sm" />
              </h3>

              {/* Moved button up next to title */}
              <motion.button
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTools className="mr-1 text-xs" />
                Podrobnosti
              </motion.button>
            </div>

            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{truncatedDescription || "Opis vozila bo dodan kmalu."}</p>

              {isLongDescription && (
                <motion.button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-red-600 dark:text-red-400 flex items-center text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expanded ? "Prikaži manj" : "Prikaži več"}
                  {expanded ? (
                    <FaChevronUp className="ml-1 text-xs" />
                  ) : (
                    <FaChevronDown className="ml-1 text-xs" />
                  )}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;

