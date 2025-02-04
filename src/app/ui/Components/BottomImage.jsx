'use client'

import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

function BottomImage() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
      className="absolute bottom-10 z-10 w-full flex justify-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <Image
          src={require("../Images/shoe.png")}  // Replace with your image path
          alt="Centered Image"
          width={600}  // Base width for larger screens
          height={300}  // Maintain the aspect ratio
          className="w-full sm:w-[300px] md:w-[400px] lg:w-[600px] h-auto mb-24 md:mb-0"
        />
      </motion.div>
    </motion.div>
  )
}

export default BottomImage;
