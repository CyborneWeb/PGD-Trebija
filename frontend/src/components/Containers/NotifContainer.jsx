import React, { useRef } from "react";
import { FaBell, FaArrowRight } from "react-icons/fa";
import NotifCard from "../Cards/NotifCard";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const NotifContainer = () => {
  // Ref for tracking when the component is in view
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "Test Obvestilo 1",

      image: null,
    },
    {
      id: 2,
      title: "Test Obvestilo 2",
      
        
      image: null,
    },
    {
      id: 3,
      title: "Test Obvestilo 3",

      image: null,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full p-4 md:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FaBell className="text-red-600 dark:text-red-500 mr-2 text-2xl" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Aktualno
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            to="/notifications"
            className="flex items-center text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400 font-medium transition-colors"
          >
            Vsa obvestila
            <FaArrowRight className="ml-1 text-sm" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center py-4 px-2 my-6">
        {notifications.map((notif, index) => (
          <NotifCard
            key={notif.id}
            title={notif.title}
            content={notif.content}
            image={notif.image}
            index={index}
            isContainerInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

export default NotifContainer;
