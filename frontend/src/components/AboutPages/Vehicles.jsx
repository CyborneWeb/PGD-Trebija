import React from "react";
import { motion } from "framer-motion";
import VehicleContainer from "../AboutPage/VehicleContainer";

const Vehicles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <VehicleContainer />
    </motion.div>
  );
};

export default Vehicles;
