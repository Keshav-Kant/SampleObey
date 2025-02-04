'use client'

import React from 'react'
import { motion } from "framer-motion";

function LeftTriangle({ bgColor = "#F7ABEB" }) {  // Default value is #F7ABEB
  return (
    <motion.div
      initial={{ x: "-100%", y: "-100%", scale: 1.5, opacity: 0 }}
      animate={{ x: "0%", y: "0%", scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", type: "spring", stiffness: 40 }}
      className={`absolute w-[200vw] h-[200vh] bg-[${bgColor}] clip-left`}
    />
  )
}

export default LeftTriangle;
