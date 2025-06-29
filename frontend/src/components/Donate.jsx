import React from "react";
import { LuHandCoins, LuArrowRight, LuFileText } from "react-icons/lu";
import { motion } from "motion/react";

const Donate = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden mb-20 min-h-[590px]">
      {/* Background image with animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="/src/assets/donate.jpg"
          alt="Donation background"
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Content container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LuHandCoins className="mx-auto text-5xl text-red-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-red-600 inline-block">
              Kako nam lahko pomagate tudi vi
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 space-y-4">
              <span className="block">
                Namenite{" "}
                <span className="text-red-600 font-medium">
                  1% vaše dohodnine
                </span>{" "}
                našemu društvu -
                <span className="italic"> za vas brezplačno</span>, saj bi ta
                del sicer ostal v državnem proračunu.
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
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                <LuHandCoins className="text-xl" />
                <span>Izpolni obrazec</span>
                <LuArrowRight />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-medium py-3 px-6 rounded-lg transition-colors">
                <LuFileText className="text-xl" />
                <span>Oddaj preko eDavki</span>
                <LuArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
