import React from "react";
import TopText from "../Components/TopText";
import RightTriangle from "../Components/RightTriangle";
import LeftTriangle from "../Components/LeftTriangle";

function FooterSection() {
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-[#F7ABEB] to-[#210D42]">
      {/* Left-Top Div */}
      <LeftTriangle bgColor="#210D42" />

      {/* Right-Bottom Div */}
      <RightTriangle bgColor="#F7ABEB" />

      <TopText position="bottom-0" />

    </div>
  );
}

export default FooterSection;
