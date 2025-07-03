import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Enhanced background pattern with multiple layers */}
      <div className="absolute inset-0">
        {/* Base pattern layer */}
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-10 dark:opacity-15"></div>

        {/* Diagonal stripes overlay */}
        <div className="absolute inset-0 bg-stripes-light dark:bg-stripes-dark opacity-5 dark:opacity-10"></div>

        {/* Animated dots pattern */}
        <motion.div
          className="absolute inset-0 bg-dots-pattern opacity-10 dark:opacity-15"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      {/* Enhanced gradient overlay with multiple color stops */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/25 via-gray-800/20 to-red-900/30 dark:from-red-700/40 dark:via-gray-900/50 dark:to-red-950/40"></div>

      {/* Accent color wave - modified to look more like flames */}
      <div className="absolute inset-0 opacity-25 dark:opacity-30">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-64 text-red-600 dark:text-red-700"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L30,170.7C60,181,120,203,180,197.3C240,192,300,160,360,165.3C420,171,480,213,540,213.3C600,213,660,171,720,149.3C780,128,840,128,900,144C960,160,1020,192,1080,202.7C1140,213,1200,203,1260,176C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>

        {/* Second flame layer for more complex appearance */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-48 text-red-500/60 dark:text-red-600/70"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L24,106.7C48,117,96,139,144,149.3C192,160,240,160,288,138.7C336,117,384,75,432,80C480,85,528,139,576,181.3C624,224,672,256,720,240C768,224,816,160,864,133.3C912,107,960,117,1008,122.7C1056,128,1104,128,1152,138.7C1200,149,1248,171,1296,160C1344,149,1392,107,1416,85.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {title || "Page Title"}
          </h1>

          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Enhanced bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-800"></div>
    </div>
  );
};

export default PageHeader;
