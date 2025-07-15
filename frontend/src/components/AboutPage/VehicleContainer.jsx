import React from "react";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import VehicleCard from "./VehicleCard";

const VehicleContainer = () => {
  // Updated vehicles data to include more complete information
  const vehicles = [
    {
      id: 1,
      title: "GVC-1",
      description:
        "Gasilsko vozilo s cisterno za prevoz vode in gašenje požarov v urbanem okolju. Opremljeno je z visokotlačno črpalko in 2000 litri vode za učinkovito gašenje. Vozilo ima vgrajeno visokotlačno črpalko z zmogljivostjo 10 barov, elektroagregat in razsvetljavo za nočne intervencijske. Primerno je za gašenje požarov na objektih, v prometu in za oskrbo z vodo na težje dostopnih območjih.",
      
      images: ["https://i.imgur.com/WeH8nve.jpeg","https://i.imgur.com/YZVc02Z.jpeg", "https://i.imgur.com/V99ikcm.jpeg"],
      techInfo: {
        waterCapacity: "",
        capacity: "",
        year: "",
        equipment: ["?", "?", "?", "?"],
      },
    },
    {
      id: 2,
      title: "GVGP-1",
      description:
        "Gasilska cisterna za gašenje gozdnih požarov s posebno opremo za težko dostopne terene. Prilagojeno je za vožnjo po zahtevnem terenu in ima zmogljivo opremo za gozdne požare. Vozilo ima pogon na vsa štiri kolesa, povečano oddaljenost od tal in dodatno zaščito podvozja. Opremljeno je s 1500 litri vode, nahrbtnimi brentami, lopati, sekirami in drugo specialno opremo za gašenje požarov v naravnem okolju.",
      
      images: ["https://i.imgur.com/JLXLPPX.jpeg", "https://i.imgur.com/XF9c4vq.jpeg", "https://i.imgur.com/utAJKJ9.jpeg"],
      techInfo: {
        waterCapacity: "",
        capacity: "",
        year: "",
        equipment: ["?", "?", "?", "?"],
      },
    },
    {
      id: 3,
      title: "GV-1",
      description:
        "Gasilsko vozilo za prevoz moštva z osnovno opremo za gašenje začetnih požarov. Vozilo omogoča prevoz do 9 gasilcev in najnujnejše opreme za prvo posredovanje. Opremljeno je s potopno črpalko, cevmi, ročniki, gasilniki in osebno zaščitno opremo. Vozilo je namenjeno predvsem za hitro posredovanje in podporo drugim gasilskim enotam pri večjih intervencijah.",
      
      images: ["https://i.imgur.com/4JLHXz9.jpeg","https://i.imgur.com/ib1Hxsu.jpeg"],
      techInfo: {
        capacity: "",
        year: "",
        equipment: ["?", "?", "?", "?"],
      },
    },
  ]

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
          <FaTruck className="text-3xl react-icon" />
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

      <div className="space-y-10 max-w-5xl mx-auto">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            title={vehicle.title}
            description={vehicle.description}
            imageUrl={vehicle.imageUrl}
            images={vehicle.images}
            techInfo={vehicle.techInfo}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleContainer;
