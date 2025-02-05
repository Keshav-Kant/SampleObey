// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Triangle from "../Images/Triangle";
// import './style.css';

// export default function SecondSection() {
//   // Nested array of text parts
//   const texts = [
//     ["This brand is from designer for people.","Make yours a collection which would never repeat nor will be seen with anyone else. Get the peak creativity of time in your hands."],
//     ["Innovation Starts Here!"],
//     ["Push the Boundaries!"],
//     ["Think Different, Act Bold!"],
//   ];

//   const [index, setIndex] = useState(0);

//   const handleClick = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % texts.length);
//   };

//   return (
//     <div className="relative w-[100vw] h-[100vh] bg-[#210D42] flex flex-col items-center justify-center text-white">
//       {/* Arrow Button */}
//       <div className="border-4 translate-y-20 md:translate-y-24 bg-white rounded-full absolute top-0">
//         <motion.button
//           onClick={handleClick}
//           whileTap={{ scale: 0.9 }}
//           whileHover={{ scale: 1.1 }}
//           className="w-20 h-20 border-4 border-[#210D42] rounded-full flex items-center justify-center bg-[#F7ABEB] hover:bg-white transition duration-300"
//         >
//           <motion.div
//             animate={{ rotate: 180 }} // Animate rotation when clicked
//             transition={{ duration: 0.3 }}
//           >
//             <Triangle />
//           </motion.div>
//         </motion.button>
//       </div>

//       {/* Changing Text */}
//       <motion.div
//         key={index} // Helps framer-motion detect changes
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         className="text-7xl lg:text-9xl font-base text-center w-[50vw] md:w-[40vw] AmsterdamFont"
//         style={{ lineHeight: '0.4em',
//          }} // Adjusted line height for better readability
//       >
//         {/* Loop through each array of parts (nested array) */}
//         {texts[index].map((text, idx) => (
//           <p key={idx} className="">{text}</p> // Each inner part will be displayed as a paragraph
//         ))}
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Triangle from "../Images/Triangle";
import './style.css';

export default function SecondSection() {
  // Nested array of text parts
  const texts = [
    ["This brand is from designer for people.","Make yours a collection which would never repeat nor will be seen with anyone else. Get the peak creativity of time in your hands."],
    ["Innovation Starts Here!"],
    ["Push the Boundaries!"],
    ["Think Different, Act Bold!"],
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className="relative w-[100vw] h-[100vh] bg-[#210D42] flex flex-col items-center justify-center text-white">
      {/* Arrow Button */}
      <div className="border-4 translate-y-20 md:translate-y-24 bg-white rounded-full absolute top-0">
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
        className="text-7xl lg:text-9xl font-base text-center w-[50vw] md:w-[40vw] AmsterdamFont"
        style={{ lineHeight: '0.4em' }} // Adjusted line height for better readability
      >
        {/* Loop through each array of parts (nested array) */}
        {texts[index].map((text, idx) => (
          <p key={idx} className="mb-6">{text}</p> // Added margin-bottom for spacing between paragraphs
        ))}
      </motion.div>
    </div>
  );
}
