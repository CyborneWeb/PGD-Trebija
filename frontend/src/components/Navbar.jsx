import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/pgd-logo.svg"; // Direct path to the logo in public folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "Domov", path: "/" },
    { title: "O Društvu", path: "/about" },
    { title: "Obvestila", path: "/services" },
    { title: "Galerija", path: "/gallery" },
    { title: "Kontakt", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 shadow-md border-b-8 border-red-700 px-5">
      <div className="px-4 sm:px-6 lg:px-1 py-5">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            {/* Logo image instead of SVG */}
            <div className="flex-shrink-0 mr-2">
              <img
                src={logo}
                alt="PGD Trebija Logo"
                className="h-20 px-2 py-2 rounded-full bg-gray-100 shadow-md border-3 border-red-700 mr-2"
              />
            </div>
            <span className="text-black dark:text-white text-4xl font-bold">
              PGD Trebija
            </span>
          </div>

          {/* Desktop navigation - aligned to the right */}
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-lg font-medium ${
                      isActive
                        ? "bg-red-700  text-white dark:text-white"
                        : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
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
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-red-700  text-white"
                      : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
