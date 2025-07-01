import React, { useRef, useState, useEffect } from "react";
import { LuHandCoins, LuArrowRight, LuFileText } from "react-icons/lu";
import { motion, useInView } from "motion/react";

const Donate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Set first load to false after initial animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000); // Time to complete all initial animations
    return () => clearTimeout(timer);
  }, []);

  // Use initial for first load, isInView for subsequent scrolling
  const shouldAnimate = isFirstLoad || isInView;

  return (
    <motion.section
      ref={ref}
      className="bg-bottom bg-no-repeat bg-cover bg-[url('/src/assets/donate.jpg')] bg-gray-700 bg-blend-multiply"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldAnimate ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-16 lg:py-24 mb-0 lg:mb-0">
        {/* Original Donate component content with animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <LuHandCoins className="mx-auto text-5xl text-red-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-red-600 inline-block text-white">
            Kako nam lahko pomagate tudi vi
          </h2>
          <div className="text-lg md:text-xl mb-8 text-gray-200 space-y-4">
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
              priloženi obrazec in ga pošljite na naslov Finančnega urada
              Kranj
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              scale: shouldAnimate ? 1 : 0.9,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
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
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              scale: shouldAnimate ? 1 : 0.9,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
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
    </motion.section>
  );
};

export default Donate;
