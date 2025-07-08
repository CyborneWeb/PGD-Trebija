import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMoneyBillWave,
  FaIdCard,
  FaUniversity,
} from "react-icons/fa";

const BasicInfo = () => {
  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Info card component
  const InfoCard = ({ icon, title, value, delay = 0 }) => (
    <motion.div
      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md"
      variants={itemVariants}
      transition={{ delay }}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-1">
            {title}
          </h3>
          <div className="text-lg font-semibold text-gray-800 dark:text-white">
            {value}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Osnovne informacije o društvu
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Prostovoljno gasilsko društvo Trebija deluje na področju požarne
          varnosti in zaščite prebivalstva. Tukaj najdete osnovne informacije o
          našem društvu.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard
          icon={<FaBuilding className="text-xl" />}
          title="Ime društva"
          value="Prostovoljno gasilsko društvo Trebija"
        />

        <InfoCard
          icon={<FaMapMarkerAlt className="text-xl" />}
          title="Sedež društva"
          value="Trebija 45, 4224 Gorenja vas"
          delay={0.1}
        />

        <InfoCard
          icon={<FaPhoneAlt className="text-xl" />}
          title="Telefon"
          value="+386 4 123 4567"
          delay={0.2}
        />

        <InfoCard
          icon={<FaEnvelope className="text-xl" />}
          title="E-pošta"
          value="info@pgd-trebija.si"
          delay={0.3}
        />

        <motion.div
          className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
                <FaGlobe className="text-xl" />
              </div>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-1">
                Območje delovanja
              </h3>
              <div className="text-lg font-semibold text-gray-800 dark:text-white">
                Na okolici krajevne skupnosti Trebija, vključno z naselji: Fužine, Hobovše pri Stari Oselici (hiš. št. 13 in 14), Kladje, Podgora, Stara Oselica ter Trebija
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          variants={itemVariants}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <FaMoneyBillWave className="mr-2 text-red-600 dark:text-red-400" />
            Finančni podatki
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <FaUniversity className="text-red-600 dark:text-red-400 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Transakcijski račun
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  SI56 0123 4567 8910 123
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaIdCard className="text-red-600 dark:text-red-400 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Davčna številka
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  12345678
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BasicInfo;
