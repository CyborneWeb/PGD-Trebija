import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section 
      className="bg-bottom bg-no-repeat bg-cover bg-[url('https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/460417385_924052116423761_8712443502836007538_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pyryHXVRXMcQ7kNvwHvdrj7&_nc_oc=AdkML9cQ89sRUbCl8p65dtlUOgyuzhpSzEHm7rqfkg4Z2Tr9mRx8xg7VP8s-cpYJ5wo&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=siBuRfR_NytO39t3YECjIQ&oh=00_AfM0PekO50HEjlh2BvFG2MtlAtm5xTbufZ4uJ2j5FfiJbQ&oe=6864A250')] bg-gray-700 bg-blend-multiply"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <motion.h1
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          Prostovoljno gasilsko društvo Trebija
        </motion.h1>

        <motion.p
          className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        >
          Društvo, ki že od leta 1933 skrbi za vas in za vašo varnost na Trebiji
          in v njeni okolici
        </motion.p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <motion.a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
          >
            O Društvu
            <LuArrowRight className="w-6 h-6 ms-2" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;