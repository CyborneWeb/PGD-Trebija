import React, { useMemo, useState, useRef, useEffect } from "react";
import { activities } from "../../../utils/activities";
import { FaTruck, FaCalendarAlt, FaHistory } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Interventions = () => {
  // Ref for detecting when component is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // State for the animated counter values
  const [currentYearDisplayCount, setCurrentYearDisplayCount] = useState(0);
  const [allTimeDisplayCount, setAllTimeDisplayCount] = useState(0);

  // Calculate actual counts
  const { currentYearCount, allTimeCount } = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const interventionTypeIds = [2707, 2731, 2732, 2729, 2730, 2733, 2734];

    // Make sure activities exists and is an array
    if (!Array.isArray(activities)) {
      console.error("Activities is not an array:", activities);
      return { currentYearCount: 0, allTimeCount: 0 };
    }

    // Filter by intervention TypeId only
    const interventionActivities = activities.filter(
      (activity) =>
        activity.TypeId && interventionTypeIds.includes(Number(activity.TypeId))
    );

    console.log("Filtered interventions:", interventionActivities);

    // Calculate counts from the filtered list
    const currentYearCount = interventionActivities.filter(
      (activity) => new Date(activity.Start).getFullYear() === currentYear
    ).length;

    const allTimeCount = interventionActivities.length;

    return { currentYearCount, allTimeCount };
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      // Animation duration in ms
      const animationDuration = 2000;
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(animationDuration / frameDuration);

      // Increment step for each frame
      const currentYearIncrement = currentYearCount / totalFrames;
      const allTimeIncrement = allTimeCount / totalFrames;

      let frame = 0;

      const counter = setInterval(() => {
        frame++;

        // Update current year counter
        setCurrentYearDisplayCount((prevCount) => {
          const newCount = Math.min(
            Math.round(currentYearIncrement * frame),
            currentYearCount
          );
          return newCount;
        });

        // Update all-time counter
        setAllTimeDisplayCount((prevCount) => {
          const newCount = Math.min(
            Math.round(allTimeIncrement * frame),
            allTimeCount
          );
          return newCount;
        });

        // Stop when animation completes
        if (frame === totalFrames) {
          clearInterval(counter);
          setCurrentYearDisplayCount(currentYearCount);
          setAllTimeDisplayCount(allTimeCount);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [isInView, currentYearCount, allTimeCount]);

  return (
    <div
      ref={ref}
      className="w-full px-4 py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }} // Reduced y-offset from 20 to 10
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }} // Slightly faster animation
        className="mx-auto max-w-full" // Added max-width constraint
      >
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-red-600 dark:text-red-500 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <FaTruck className="text-4xl md:text-3xl mb-2 md:mb-0" />
            <span>Število zabeleženih intervencij</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-auto max-w-4xl">
          {/* Current Year Counter */}
          <motion.div
            whileHover={{ scale: 1.02 }} // Reduced scale effect
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700
            max-w-xl"
          >
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-2xl mr-3 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Tekoče leto ({new Date().getFullYear()})
              </h3>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-center py-6 text-red-600 dark:text-red-500">
              {currentYearDisplayCount}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              intervencij v tekočem letu
            </p>
          </motion.div>

          {/* All-time Counter */}
          <motion.div
            whileHover={{ scale: 1.02 }} // Reduced scale effect
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 max-w-xl"
          >
            <div className="flex items-center mb-4">
              <FaHistory className="text-2xl mr-3 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Skupno število
              </h3>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-center py-6 text-red-600 dark:text-red-500">
              {allTimeDisplayCount}+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              vseh intervencij skupaj
            </p>
          </motion.div>
        </div>

        {/* Information note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Podatki o intervencijah so pridobljeni iz aplikacije{" "}
            <span className="text-red-500 text-semibold">FireApp</span>, v
            katero so se intervencije začele vnašati od leta 2022 naprej
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Interventions;
