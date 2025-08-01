import React, { useRef } from "react";
import { LuHandCoins, LuArrowRight, LuFileText } from "react-icons/lu";
import { motion, useInView } from "framer-motion";

const Donate = () => {
  const ref = useRef(null);
  // Use amount: 0.1 to trigger earlier and add a margin
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px", // Negative bottom margin to trigger earlier
  });

  return (
    <motion.section
      ref={ref}
      className="bg-bottom bg-no-repeat bg-cover bg-[url('/src/assets/donate.jpg')] bg-gray-700 bg-blend-multiply"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-16 lg:py-24 mb-0 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: isInView ? 1 : 0.5,
              opacity: isInView ? 1 : 0,
              rotate: isInView ? [0, 10, 0] : 0,
            }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              delay: 0.5,
              rotate: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
          >
            <LuHandCoins className="mx-auto text-5xl text-red-600 mb-6 icon-inherit" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-red-600 inline-block text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.7 }}
          >
            Kako nam lahko pomagate tudi vi
          </motion.h2>

          <div className="text-lg md:text-xl mb-8 text-gray-200 space-y-4">
            <span className="block">
              Namenite{" "}
              <span className="text-red-600 font-medium">
                1% vaše dohodnine
              </span>{" "}
              našemu društvu -<span className="italic"> za vas brezplačno</span>
              , saj bi ta del sicer ostal v državnem proračunu.
            </span>

            <span className="block pt-2">
              <span className="font-medium text-white">Kako?</span> Izpolnite
              priloženi obrazec in ga pošljite na naslov Finančnega urada Kranj
              <span className="font-bold text-red-600">
                {" "}
                (p.p 122, Koroška cesta, 4001 Kranj){" "}
              </span>
              ali pa ga enostavno oddajte elektronsko preko spletišča eDavki.
            </span>

            <span className="block pt-2 font-semibold text-red-600">
              Hvala vsem, ki nam namenjate svoj del dohodnine!
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -50 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.9,
              y: isInView ? 0 : -50,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.05 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.0,
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
          >
            <a href="/assets/Obrazec.pdf" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                <LuHandCoins
                  className="text-xl icon-inherit"
                  aria-hidden="true"
                />
                <span>Izpolni obrazec</span>
                <LuArrowRight className="icon-inherit" aria-hidden="true" />
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.9,
              y: isInView ? 0 : 50,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.05 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.2,
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
          >
            <a href="https://edavki.durs.si/EdavkiPortal/PersonalPortal/Pages/Login/Login.aspx?ReturnUrl=%2fEdavkiPortal%2fPersonalPortal%2f" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-600  font-medium py-3 px-6 rounded-lg transition-colors">
                <LuFileText className="text-xl" aria-hidden="true" />
                <span>Oddaj preko eDavki</span>
                <LuArrowRight className="icon-inherit" aria-hidden="true" />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Donate;
