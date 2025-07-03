import React, { useState, useEffect } from "react";
import { FaCookieBite, FaCheck } from "react-icons/fa";
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

  if (!isVisible) return null;

  return (
    <div className="cookie-banner fixed inset-x-0 bottom-0 z-50">
      <div
        className={`${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-900 text-white"
        } p-3 shadow-lg`}
      >
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center">
              <FaCookieBite className="text-red-500 mr-2 text-lg" />
              <span className="text-sm">
                Ta spletna stran uporablja piškotke za boljšo izkušnjo.
              </span>
            </div>

            <button
              onClick={handleAccept}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm whitespace-nowrap flex items-center"
            >
              <FaCheck className="mr-1" />
              Razumem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;

