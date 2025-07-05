import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/Headers/PageHeader";
import AboutMenu from "../components/Layout/AboutMenu";

const About = () => {
  const [activeSection, setActiveSection] = useState("drustvo");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "drustvo":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Splošne informacije o društvu
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tukaj bo vsebina o društvu in splošne informacije.
            </p>
          </motion.div>
        );
      case "zgodovina":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Ustanovitev in zgodovina
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tukaj bo vsebina o zgodovini društva in pomembnih mejnikih.
            </p>
          </motion.div>
        );
      case "pridruzitev":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Pridruži se nam
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tukaj bo vsebina o pogojih za članstvo in prijavnem postopku.
            </p>
          </motion.div>
        );
      case "storitve":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Naše storitve
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tukaj bo vsebina o storitvah, ki jih društvo ponuja.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
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
      <div className="container mx-auto px-4 py-8">{renderContent()}</div>
    </div>
  );
};

export default About;
