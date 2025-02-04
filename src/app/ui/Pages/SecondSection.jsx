"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Triangle from "../Images/Triangle";
import './style.css'
export default function SecondSection() {
  const texts = [
    "This brand is from designer - for people. Make yours a collection which would never repeeat nor will be seen with anyone else get the peak creativity of time in your hands",
    "Innovation Starts Here!",
    "Push the Boundaries!",
    "Think Different, Act Bold!",
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className="relative w-[100vw] h-[100vh] bg-[#210D42] flex flex-col items-center justify-center text-white">
      {/* Arrow Button */}
      <div className="border-4 translate-y-44 bg-white rounded-full absolute top-0">
        <motion.button
          onClick={handleClick}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 border-4 border-[#210D42] rounded-full flex items-center justify-center bg-[#F7ABEB] hover:bg-white transition duration-300"
        >
          <motion.div
            animate={{ rotate: 180 }} // Animate rotation when clicked
            transition={{ duration: 0.3 }}
          >
            <Triangle />
          </motion.div>
        </motion.button>
      </div>

      {/* Changing Text */}
      <motion.div
        key={index} // Helps framer-motion detect changes
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-bold mb-10 text-center w-[40vw] AmsterdamFont tracking-wide leading-[5rem]"
      >
        {texts[index]}
      </motion.div>
    </div>
  );
}
