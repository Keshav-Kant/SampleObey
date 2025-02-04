"use client"

import React, { useEffect, useState } from 'react';
import FirstSection from './FirstSection';
import { motion } from "framer-motion";
import SecondSection from "./SecondSection";
import FooterSection from "./FooterSection";

function MainPage() {
  const [disableScroll, setDisableScroll] = useState(true); // Control scroll lock

  // Disable scroll for 4 seconds after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableScroll(false); // Allow scrolling after 4 seconds
    }, 4000); // Wait 4 seconds

    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling during the 4-second period
  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up
    };
  }, [disableScroll]);

  return (
    <div>
      {/* First Section (Sticky) */}
      <div
        id="firstSection"
        className="w-[100vw] h-[100vh] bg-blue-500 sticky top-0 z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition for content
        >
          <FirstSection />
        </motion.div>
      </div>

      {/* Second Section (Sticky) */}
      <div
        id="secondSection"
        className="w-[100vw] h-[100vh] bg-gray-800 sticky top-0 z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition for content
          className="text-4xl flex justify-center items-center h-full text-white"
        >
          <SecondSection />
        </motion.div>
      </div>

      {/* Footer Section */}
      <div
        id="footerSection"
        className="w-[100vw] h-[100vh] bg-gray-800 flex justify-center items-center text-white sticky top-0 z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition for content
        >
          <FooterSection />
        </motion.div>
      </div>
    </div>
  );
}

export default MainPage;



