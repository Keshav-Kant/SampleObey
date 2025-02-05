"use client";

import LeftTriangle from "../Components/LeftTriangle";
import RightTriangle from "../Components/RightTriangle";
import TopText from "../Components/TopText";
import BottomImage from "../Components/BottomImage";

export default function FirstSection() {
 

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-[#F7ABEB] to-[#210D42]">

      
      {/* Top Text */}
      <TopText />

      {/* Left-Top Div */}
      <LeftTriangle />

      {/* Right-Bottom Div */}
      <RightTriangle />

      {/* Bottom Image */}
      <BottomImage />

      
    </div>
  );
}
