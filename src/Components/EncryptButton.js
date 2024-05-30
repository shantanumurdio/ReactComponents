import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ExampleEncryptButton = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-gray-900 p-4">
      <EncryptButton />
    </div>
  );
};



const EncryptButton = () => {
  const intervalRef = useRef(null);


 

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

  };

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 0,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-1 text-white shadow-lg transition-all duration-300 ease-in-out"
    >
      <div className="relative z-10 flex items-center gap-2 px-8 py-4 bg-gray-900 rounded-md">
        Button
      </div>
      <motion.span
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 rounded-lg border-4 border-transparent group-hover:border-white"
      />
      <motion.div
        className="absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-50 blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.button>
  );
};

export default ExampleEncryptButton;
