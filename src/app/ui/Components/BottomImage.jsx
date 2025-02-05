// 'use client'

// import React from 'react'
// import { motion } from "framer-motion";
// import Image from "next/image";

// function BottomImage() {
//   return (
//     <motion.div
//       initial={{ scale: 0.5, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
//       className="absolute mt-56 md:mt-80 z-10 w-full flex justify-center"
//     >
//       <motion.div
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 150, damping: 15 }}
//       >
//         <Image
//           src={require("../Images/shoe.png")}  // Replace with your image path
//           alt="Centered Image"
//           width={600}  // Base width for larger screens
//           height={300}  // Maintain the aspect ratio
//           className="w-[850px] h-auto mb-24 md:mb-0"
//         />
//       </motion.div>
//     </motion.div>
//   )
// }

// export default BottomImage;


'use client'

import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

function BottomImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, rotate: -15 }}  // Starting position and opposite rotation
      animate={{ opacity: 1, y: 0, rotate: 0 }}  // Animate to default position and remove rotation
      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}  // Duration and delay for smooth entrance
      className="absolute mt-56 md:mt-80 z-10 w-full flex justify-center"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],  // Reversed floating effect, moves down and up
          rotate: [0, -10, 0],  // Rotates in the opposite direction
        }}
        transition={{
          duration: 4,  // Duration of the floating effect
          ease: "easeInOut",
          loop: Infinity,  // Ensures the animation loops
          repeatDelay: 1,  // Adds a short pause after each loop
        }}
      >
        <Image
          src={require("../Images/shoe.png")}  // Replace with your image path
          alt="Centered Image"
          width={600}  // Base width for larger screens
          height={300}  // Maintain the aspect ratio
          className="w-[850px] h-auto mb-24 md:mb-0"
        />
      </motion.div>
    </motion.div>
  )
}

export default BottomImage;
