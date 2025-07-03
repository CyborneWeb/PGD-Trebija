import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaCookieBite, FaCheck, FaShieldAlt } from "react-icons/fa";
import { useTheme } from "../../Contexts/ThemeContext";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    // If no record found, show the modal after a small delay
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  // If not visible, don't render anything
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Dimmed background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 bg-opacity-50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
            }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div
              className={`rounded-lg shadow-2xl ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-gray-800 border-gray-200"
              } p-6 border-2 relative overflow-hidden max-w-[80%] `}
            >
              {/* Decorative accent */}
              <div className="absolute left-0 top-0 w-2 h-full bg-red-600"></div>

              <div className="flex items-center mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mr-4">
                  <FaCookieBite className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Obvestilo o piškotkih
                </h3>
              </div>

              <div className="mb-6 text-sm md:text-base">
                <p className="mb-2">
                  Ta spletna stran uporablja piškotke za izboljšanje uporabniške
                  izkušnje in delovanja spletnega mesta.
                </p>
                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaShieldAlt className="mr-2" />
                  <span>
                    Vaša zasebnost je pomembna - piškotke uporabljamo odgovorno.
                  </span>
                </p>
              </div>

              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAccept}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md flex items-center justify-center transition-colors"
                >
                  <FaCheck className="mr-2" />
                  <span>Razumem</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieModal;
