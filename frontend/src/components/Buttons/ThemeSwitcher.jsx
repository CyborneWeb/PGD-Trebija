import React from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "motion/react";

const ThemeSwitcher = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-300 dark:border-gray-800 ${
        theme === "light"
          ? "bg-gray-200 text-red-500 hover:bg-gray-300"
          : "bg-gray-700 text-red-500 hover:bg-gray-600"
      } ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 15 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FaMoon className="text-xl" />
      ) : (
        <FaSun className="text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeSwitcher;
