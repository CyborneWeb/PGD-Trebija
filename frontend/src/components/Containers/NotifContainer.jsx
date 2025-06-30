import React from "react";
import { FaBell, FaArrowRight } from "react-icons/fa";
import NotifCard from "../Cards/NotifCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react"; // Ensure you have motion installed if you're using it

const NotifContainer = () => {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "Vaja s hidrantnim omrežjem",
      content:
        "V soboto, 15. junija, bo potekala vaja s hidrantnim omrežjem. Vsi člani društva vabljeni k udeležbi.",
      image: null,
    },
    {
      id: 2,
      title: "Nova gasilska oprema",
      content:
        "Obveščamo vas, da smo prejeli novo gasilsko opremo. Predstavitev bo v nedeljo ob 17.00.",
      image: null,
    },
    {
      id: 3,
      title: "Preventivni pregledi gasilnikov",
      content:
        "Obveščamo občane, da bodo v naslednjih dneh potekali preventivni pregledi gasilnikov po gospodinjstvih.",
      image: null,
    },
  ];

  return (
    <div className="w-full p-4 md:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FaBell className="text-red-600 dark:text-red-500 mr-2 text-2xl" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Aktualno
          </h2>
        </motion.div>
        <Link
          to="/notifications"
          className="flex items-center text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400 font-medium transition-colors"
        >
          Vsa obvestila
          <FaArrowRight className="ml-1 text-sm" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center py-4 px-2 my-6">
        {notifications.map((notif) => (
          <NotifCard
            key={notif.id}
            title={notif.title}
            content={notif.content}
            image={notif.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NotifContainer;
