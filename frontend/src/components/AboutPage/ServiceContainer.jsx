import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const ServiceContainer = () => {
  // Reference for detecting when the component is in view
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Service data
  const services = [
    {
      title: "Redarstvo",
      description:
        "Po naročilu nudimo redarstvo na večjih prireditvah ter dogodkih, da zagotovimo varnost in red.",
      icon: "security",
      specs:
        "Storitev redarstva vključuje: usposobljene redarje z ustreznimi dovoljenji, organizacijo parkiranja, pomoč pri usmerjanju prometa, varovanje prireditve, vzdrževanje reda. Za več informacij in cenike nas kontaktirajte.",
    },
    {
      title: "Prevoz Vode",
      description:
        "S pomočjo cisterne zagotavljamo prevoz večjih količin čiste vode za uporabo v različnih situacijah.",
      icon: "water",
      specs:
        "Kapaciteta cisterne: do 2000 litrov vode. Naše vozilo omogoča dostop tudi do težje dostopnih lokacij. Zagotavljamo hitro dostavo in varno ravnanje z vodo. Storitev je na voljo za gospodinjstva, podjetja in kmetije v naši regiji.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div ref={containerRef} className="py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <motion.div
            className="inline-block p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full mb-4"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaHandsHelping className="text-3xl" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Naše storitve
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Poleg rednega gasilskega delovanja našim krajanom in širši okolici
            nudimo tudi dodatne storitve. Spoznajte, kako vam lahko pomagamo.
          </p>
        </motion.div>

        <div className="w-full lg:w-4/5 mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              isVisible={isInView}
              specs={service.specs}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceContainer;
