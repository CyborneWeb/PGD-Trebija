import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeSwitcher from "../Buttons/ThemeSwitcher";

import logo from "../../assets/pgd-logo.svg"; // Direct path to the logo in public folder
import {
  FaHome,
  FaQuestionCircle,
  FaImages,
  FaEnvelope,
  FaBell,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      title: "Domov",
      path: "/",
      icon: <FaHome className="inline-block mr-2 mb-2 theme-icon" />,
    }, // Home icon
    {
      title: "O Društvu",
      path: "/drustvo",
      icon: <FaQuestionCircle className="inline-block mr-2 mb-2 theme-icon" />,
    }, // About icon
    {
      title: "Obvestila",
      path: "/obvestila",
      icon: <FaBell className="inline-block mr-2 mb-2 theme-icon" />,
    }, // Services icon
    {
      title: "Galerija",
      path: "/galerija",
      icon: <FaImages className="inline-block mr-2 mb-2 theme-icon" />,
    }, // Gallery icon
    {
      title: "Kontakt",
      path: "/kontakt",
      icon: <FaEnvelope className="inline-block mr-2 mb-2 theme-icon" />,
    }, // Contact icon
  ];

  return (
    <motion.nav
      className="bg-gray-200 dark:bg-gray-900 shadow-md border-b-8 border-red-700 px-2 sticky top-0 z-50 lg:px-5"
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", stiffness: 70 }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="px-1 sm:px-6 lg:px-1 py-5">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            {/* Logo image instead of SVG */}
            <div className="flex-shrink-0 mr-2">
              <img
                src={logo} // Direct reference to public folder
                alt="PGD Trebija Logo"
                className="h-15 px-2 py-2 rounded-full bg-gray-100 shadow-md border-3 border-red-700 mr-2 lg:h-20"
              />
            </div>
            <span className="text-black dark:text-white text-2xl font-bold lg:text-3xl">
              PGD Trebija
            </span>
          </div>

          {/* Desktop navigation - aligned to the right */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex space-x-4 items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -500 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-lg font-medium ${
                        isActive
                          ? "bg-red-700 text-white"
                          : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      } transition-all`
                    }
                  >
                    {item.icon}
                    {item.title}
                  </NavLink>
                </motion.div>
              ))}

              {/* Theme Switcher Button */}
              <motion.div
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + navItems.length * 0.1,
                  ease: "easeOut",
                }}
              >
                <ThemeSwitcher className="ml-2" />
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button and theme switcher */}
          <div className="flex items-center lg:hidden ">
            <ThemeSwitcher className="mr-2" />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="lg:hidden ">
            <div className="px-2 pt-7 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  className="w-full flex justify-center"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-xl font-medium text-center w-60 ${
                        isActive
                          ? "bg-red-700 text-white"
                          : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.title}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
