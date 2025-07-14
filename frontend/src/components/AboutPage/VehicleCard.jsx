import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruck,
  FaInfoCircle,
  FaTools,
  FaChevronDown,
  FaChevronUp,
  FaArrowLeft,
  FaArrowRight,
  FaWater,
  FaUsers,
  FaFireExtinguisher,
} from "react-icons/fa";

const placeholder = "/assets/placeholder.png";

const VehicleCard = ({ title, description, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample tech info - should be replaced with actual data from props
  const techInfo = {
    waterCapacity: title === "GVC-1" ? "2000 litrov" : "1500 litrov",
    capacity: title === "GV-1" ? "9 oseb" : "6 oseb",
    equipment: [
      "Visokotlačna črpalka",
      "Potopna črpalka",
      "Elektroagregat",
      "Razsvetljava",
      "Gasilni aparati",
    ],
  };

  // Sample images array - should be replaced with actual data
  const images = [placeholder, placeholder, placeholder];

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      className="mb-12 overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header with title */}
      <div className="bg-red-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaTruck className="text-2xl mr-3" />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>

      {/* Description section with integrated technical info */}
      <div className="p-5 bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {description}
        </p>

        {/* Toggle button for technical info */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="text-red-600 dark:text-red-500 flex items-center font-medium my-2"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {expanded
            ? "Skrij dodatne informacije"
            : "Prikaži dodatne informacije"}
          {expanded ? (
            <FaChevronUp className="ml-2" />
          ) : (
            <FaChevronDown className="ml-2" />
          )}
        </motion.button>

        {/* Technical specifications */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-md">
                    <FaWater className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Kapaciteta vode
                    </p>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {techInfo.waterCapacity}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-md">
                    <FaUsers className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Število oseb
                    </p>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {techInfo.capacity}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:col-span-1">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-md">
                    <FaFireExtinguisher className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Letnik
                    </p>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      2021
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3 mt-2">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Oprema:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {techInfo.equipment.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image carousel - full width on mobile, contained on desktop */}
      <div className="relative w-full bg-gray-200 dark:bg-gray-700">
        <div className="w-full md:w-4/5 lg:w-3/4 mx-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${title} - slika ${currentImageIndex + 1}`}
              className="w-full h-64 md:h-96 object-cover"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-1/8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
              aria-label="Prejšnja slika"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-1/8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
              aria-label="Naslednja slika"
            >
              <FaArrowRight />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-white/50"
                  } transition-all duration-300`}
                  aria-label={`Pojdi na sliko ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default VehicleCard;
