import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/Headers/PageHeader";
import AboutMenu from "../components/Layout/AboutMenu";
import BasicInfo from "../components/AboutPage/BasicInfo";
import PersonelContainer from "../components/AboutPage/PersonelContainer";

const About = () => {
  const [activeSection, setActiveSection] = useState("drustvo");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Animation variants for content sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div>
      <PageHeader
        title="O nas"
        subtitle="Spoznajte našo zgodovino ter izvedite več o našem društvu"
      />
      <AboutMenu
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Wrap the entire content with a single AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeSection === "drustvo" && (
            <motion.div
              key="drustvo"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <BasicInfo />
              <PersonelContainer />
            </motion.div>
          )}

          {activeSection === "zgodovina" && (
            <motion.div
              key="zgodovina"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                Ustanovitev in zgodovina
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Tukaj bo vsebina o zgodovini društva in pomembnih mejnikih.
              </motion.p>
            </motion.div>
          )}

          {activeSection === "pridruzitev" && (
            <motion.div
              key="pridruzitev"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                Pridruži se nam
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Tukaj bo vsebina o pogojih za članstvo in prijavnem postopku.
              </motion.p>
            </motion.div>
          )}

          {activeSection === "storitve" && (
            <motion.div
              key="storitve"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                Naše storitve
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Tukaj bo vsebina o storitvah, ki jih društvo ponuja.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;
