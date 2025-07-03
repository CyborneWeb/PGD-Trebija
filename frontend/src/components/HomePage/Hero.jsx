import React, { useRef, useState, useEffect } from "react";
import { LuArrowRight } from "react-icons/lu";
import { motion, useInView, AnimatePresence } from "framer-motion";


const Hero = () => {
  const ref = useRef(null);
  // Changed once to true so animation only happens on first view
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Extended timeout for initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3500); // Extended time for more impactful animations
    return () => clearTimeout(timer);
  }, []);

  // Only animate on first load or first view
  const shouldAnimate = isFirstLoad || isInView;

  return (
    <motion.section
      ref={ref}
      className="bg-bottom bg-no-repeat bg-cover bg-[url(/src/assets/hero.jpg)] bg-gray-700 bg-blend-multiply"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldAnimate ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }} // Longer duration
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <AnimatePresence>
          {shouldAnimate && (
            <motion.h1
              className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
            >
              Prostovoljno gasilsko društvo Trebija
            </motion.h1>
          )}
        </AnimatePresence>

        <motion.p
          className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            x: shouldAnimate ? 0 : -100,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.8,
          }}
        >
          Društvo, ki že od leta 1933 skrbi za vas in za vašo varnost na Trebiji
          in v njeni okolici
        </motion.p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <motion.a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: shouldAnimate ? 1 : 0,
              y: shouldAnimate ? 0 : 100,
            }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              delay: 1.2,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            O Društvu
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatDelay: 0.5,
              }}
            >
              <LuArrowRight className="w-6 h-6 ms-2" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
