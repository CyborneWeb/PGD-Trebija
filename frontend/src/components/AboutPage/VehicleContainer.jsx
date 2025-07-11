import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaFireExtinguisher } from "react-icons/fa";
import VehicleCard from "./VehicleCard";

const VehicleContainer = () => {
  const vehicles = [
    {
      id: 1,
      title: "GV-1",
      description:
        "Gasilsko vozilo za prevoz moštva z osnovno opremo za gašenje začetnih požarov. Vozilo omogoča prevoz do 9 gasilcev in najnujnejše opreme za prvo posredovanje.",
      imageUrl: "/assets/placeholder.png",
    },
    {
      id: 2,
      title: "GVC-1",
      description:
        "Gasilsko vozilo s cisterno za prevoz vode in gašenje požarov v urbanem okolju. Opremljeno je z visokotlačno črpalko in 2000 litri vode za učinkovito gašenje.",
      imageUrl: "/assets/placeholder.png",
    },
    {
      id: 3,
      title: "GVGP-1",
      description:
        "Gasilsko vozilo za gašenje gozdnih požarov s posebno opremo za težko dostopne terene. Prilagojeno je za vožnjo po zahtevnem terenu in ima zmogljivo opremo za gozdne požare.",
      imageUrl: "/assets/placeholder.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
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
    <motion.div
      className="py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-12" variants={headerVariants}>
        <motion.div
          className="inline-block p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full mb-4"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaTruck className="text-3xl" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Naša gasilska vozila
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Društvo razpolaga s sodobnimi gasilskimi vozili, ki nam omogočajo
          hitro in učinkovito posredovanje pri različnih vrstah intervencij na
          našem območju.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            title={vehicle.title}
            description={vehicle.description}
            imageUrl={vehicle.imageUrl}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleContainer;
