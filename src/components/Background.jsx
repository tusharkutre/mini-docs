import React from "react";
import Header from "./Header";
import { motion } from "motion/react";
import { useState } from "react";
import Foreground from "./Foreground";

const Background = () => {

  // state lifting to toggle dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 0 }, // Start from the center
    visible: { opacity: 1, y: -50 }, // Move up to its final position
  };

  return (
    <>
      <div
        className={`fixed z-[2] w-full h-screen ${
          isDarkMode ? "bg-white text-white" : "bg-black text-black"
        }`}
      >
        <Header toggleBackground={toggleBackground} />
        <motion.h1
          className="heading-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }} // Adjust duration and ease
        >
          DOCS.
        </motion.h1>

        <Foreground isDarkMode={isDarkMode} />

      </div>
    </>
  );
};

export default Background;
