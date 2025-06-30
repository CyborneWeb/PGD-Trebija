import React from "react";
import placeholder from "../../assets/placeholder.png"; // Adjust the path as necessary
import { motion, useInView } from "motion/react";

const NotifCard = ({ image, content, title }) => {
  return (
    <motion.div 
    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 70 }}
    variants={{
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    }}
    >
      <a href="#">
        <img
          className="rounded-t-lg w-[100%] h-70 object-cover"
          src={image || placeholder}
          alt=""
        />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Obvestilo"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {content ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 transition-colors"
        >
          Preberi več
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default NotifCard;
