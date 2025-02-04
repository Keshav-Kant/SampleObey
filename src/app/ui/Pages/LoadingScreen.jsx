// ui/Components/LoadingScreen.js
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
      <div className="flex space-x-4">
        {/* Animated Rectangles */}
        <motion.div
          className="w-12 h-12 bg-blue-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -20, 0], // Moves up and down
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            loop: Infinity,
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-12 h-12 bg-green-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -20, 0], // Moves up and down
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            loop: Infinity,
            delay: 0.4,
          }}
        />
        <motion.div
          className="w-12 h-12 bg-red-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -20, 0], // Moves up and down
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            loop: Infinity,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
