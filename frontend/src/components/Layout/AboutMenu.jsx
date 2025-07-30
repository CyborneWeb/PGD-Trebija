import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHistory,
  FaHandsHelping,
  FaTools,
  FaTruck,
} from "react-icons/fa";

const AboutMenu = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: "drustvo", label: "O društvu", icon: <FaUsers /> },
    { id: "zgodovina", label: "Zgodovina", icon: <FaHistory /> },
    { id: "pridruzitev", label: "Pridruži se", icon: <FaHandsHelping /> },
    { id: "vozila", label: "Vozila", icon: <FaTruck /> },
    { id: "storitve", label: "Storitve", icon: <FaTools /> },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg mb-8">
      <div className="container mx-auto px-4">
        {/* Mobile menu - horizontally scrollable with icons */}
        <div className="md:hidden py-4 overflow-x-auto">
          <div className="flex space-x-3 min-w-max px-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`menu-item flex flex-col items-center justify-center p-3 rounded-lg min-w-[70px] ${
                  activeSection === item.id
                    ? "bg-red-600 text-white active"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl mb-1 react-icon">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex justify-center">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`menu-item flex items-center space-x-2 px-6 py-4 text-sm font-medium ${
                activeSection === item.id
                  ? "text-red-600 border-b-2 border-red-600 dark:text-red-500 dark:border-red-500 active"
                  : "text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg react-icon">{item.icon}</span>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
