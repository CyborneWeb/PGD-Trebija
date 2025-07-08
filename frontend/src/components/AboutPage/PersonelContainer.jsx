import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PersonelCard from "./PersonelCard";
import { FaUser } from "react-icons/fa";

const PersonelContainer = () => {
  // Create a ref for the container to track when it's in view
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Leadership data - simplified to only include name, position and basic user icon
  const leadershipData = [
    {
      name: "Tomaž Kokelj",
      position: "Predsednik",
      icon: <FaUser />,
    },
    {
      name: "Tomaž Jereb",
      position: "Poveljnik",
      icon: <FaUser />,
    },
    {
      name: "?",
      position: "Namestnik poveljnika",
      icon: <FaUser />,
    },
    {
      name: "Urban Kokelj",
      position: "Podpoveljnik",
      icon: <FaUser />,
    },
    {
      name: "Tadeja Klemenčič",
      position: "Tajnica",
      icon: <FaUser />,
    },
    {
      name: "?",
      position: "Blagajnik",
      icon: <FaUser />,
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-12" ref={containerRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div className="text-center mb-12" variants={headingVariants}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Vodstvo društva
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Spoznajte ekipo, ki skrbi za nemoteno delovanje našega društva.
          </p>
        </motion.div>

        {/* Adjusted grid with proper spacing but maintaining 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leadershipData.map((leader, index) => (
            <PersonelCard
              key={leader.position}
              name={leader.name}
              position={leader.position}
              icon={leader.icon}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PersonelContainer;
