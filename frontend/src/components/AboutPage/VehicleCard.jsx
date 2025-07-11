import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaInfoCircle, FaTools, FaAngleRight } from 'react-icons/fa';

const VehicleCard = ({ title, description, imageUrl }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src="/assets/placeholder.png" 
          alt={`Gasilsko vozilo ${title}`} 
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
          <FaTruck className="inline-block mr-1" />
          <span className="font-medium">{title}</span>
        </div>
      </div>
      
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center">
          {title}
          <FaInfoCircle className="ml-2 text-red-500 text-sm" />
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description || "Opis vozila bo dodan kmalu."}
        </p>
      </div>
      
      <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <FaTools className="mr-1" />
          Tehnični podatki
        </span>
        <motion.button 
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Več info
          <FaAngleRight className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;