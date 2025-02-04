'use client'

import React from 'react'
import { motion } from "framer-motion";

function TopText({ position = "top-10", right='right-none' }) {  // Default value is "top-10"
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`absolute ${position} text-black z-20 ${right} leading-none`}
    >
      <div className="LeJourFont text-[128px] mt-36 md:mt-0 lg:text-[360px]">
        OBEY
      </div>
    </motion.div>
  )
}

export default TopText;
