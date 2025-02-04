'use client'

import React from 'react'
import { motion } from "framer-motion";

function RightTriangle({ bgColor = "#210D42" }) {  // Default value is #210D42
  return (
    <motion.div
      initial={{ x: "100%", y: "100%", scale: 1.5, opacity: 0 }}
      animate={{ x: "0%", y: "0%", scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", type: "spring", stiffness: 40 }}
      className={`absolute w-[200vw] h-[200vh] bg-[${bgColor}] clip-right`}
    />
  )
}

export default RightTriangle;
