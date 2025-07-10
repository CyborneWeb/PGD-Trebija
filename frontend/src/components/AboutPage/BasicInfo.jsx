import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMoneyBillWave,
  FaIdCard,
  FaUniversity,
  FaInfoCircle,
} from "react-icons/fa";
import InfoCard from "./InfoCard"; // Assuming InfoCard is in the same directory

const BasicInfo = () => {
  // Create refs for the scroll-triggered animations
  const areaRef = React.useRef(null);
  const financeRef = React.useRef(null);

  // Set up useInView hooks with threshold and once options
  const isAreaVisible = useInView(areaRef, { once: true, amount: 0.3 });
  const isFinanceVisible = useInView(financeRef, { once: true, amount: 0.3 });

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

  // Animation variants for larger content sections
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Animation variants specifically for the scroll-triggered sections
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      className="py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Osnovne informacije o društvu
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Prostovoljno gasilsko društvo Trebija deluje na področju požarne
          varnosti in zaščite prebivalstva. Tukaj najdete osnovne informacije o
          našem društvu.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard
          icon={<FaBuilding className="text-2xl" />}
          title="Ime društva"
          value="Prostovoljno gasilsko društvo Trebija"
        />

        <InfoCard
          icon={<FaMapMarkerAlt className="text-2xl" />}
          title="Sedež društva"
          value="Trebija 4, 4224 Gorenja vas"
          delay={0.1}
        />

        <InfoCard
          icon={<FaPhoneAlt className="text-2xl" />}
          title="Telefon"
          value="+386 51 327 888"
          delay={0.2}
        />

        <InfoCard
          icon={<FaEnvelope className="text-2xl" />}
          title="E-pošta"
          value="pgdtrebija@gmail.com"
          delay={0.3}
        />

        <motion.div
          ref={areaRef}
          className="md:col-span-2 bg-white dark:bg-gray-700/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
          initial="hidden"
          animate={isAreaVisible ? "visible" : "hidden"}
          variants={scrollVariants}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full shadow-sm">
                <FaGlobe className="text-2xl react-icon" />
              </div>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-2">
                Območje delovanja
              </h3>
              <div className="text-lg font-semibold text-gray-800 dark:text-white leading-relaxed">
                Na okolici krajevne skupnosti Trebija, vključno z naselji:
                Fužine, Hobovše pri Stari Oselici (hiš. št. 13 in 14), Kladje,
                Podgora, Stara Oselica ter Trebija
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={financeRef}
          className="md:col-span-2 bg-white dark:bg-gray-700/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
          initial="hidden"
          animate={isFinanceVisible ? "visible" : "hidden"}
          variants={scrollVariants}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center border-b border-gray-200 dark:border-gray-600 pb-3">
            <FaMoneyBillWave className="mr-3 text-2xl text-red-600 dark:text-red-400 react-icon" />
            Finančni podatki
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center bg-gray-50 dark:bg-gray-800/80 p-4 rounded-lg transition-transform hover:scale-[1.02] duration-300">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full shadow-sm mr-4">
                <FaUniversity className="text-2xl react-icon" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Transakcijski račun
                </p>
                <p className="font-bold text-gray-800 dark:text-white text-base md:text-lg break-all">
                  SI56 0700 0000 0180 025
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  odprt pri GB d.d., Kranj
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg transition-transform hover:scale-[1.02] duration-300">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full shadow-sm mr-4">
                <FaIdCard className="text-2xl react-icon" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Davčna številka
                </p>
                <p className="font-bold text-gray-800 dark:text-white text-lg">
                  90738055
                </p>
                <div className="mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    <FaInfoCircle className="mr-1 text-xs" />
                    Društvo ni davčni zavezanec
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg transition-transform hover:scale-[1.02] duration-300">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full shadow-sm mr-4">
                <FaIdCard className="text-2xl react-icon" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Matična številka
                </p>
                <p className="font-bold text-gray-800 dark:text-white text-lg">
                  5153816000
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
