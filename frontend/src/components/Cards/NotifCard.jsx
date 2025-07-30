import React, { useRef } from "react";
import placeholder from "../../assets/placeholder.png";
import { motion, useInView } from "framer-motion";

const NotifCard = ({ image, content, title, index = 0, isContainerInView }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Card should animate when either itself or its container comes into view
  const shouldAnimate = isInView && isContainerInView;

  // Calculate delay based on card index
  const animationDelay = 0.2 + index * 0.1;

  return (
    <motion.div
      ref={cardRef}
      className="max-w-full w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 70,
        delay: animationDelay,
      }}
    >
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={image || placeholder}
          alt=""
        />
      </a>
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <a href="#">
          <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Obvestilo"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400 flex-grow">
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default NotifCard;
