import React from "react";
import { motion } from "motion/react";
import { FaRegFileAlt } from "react-icons/fa";
import Footer from "./Footer";

const Cards = ({ isDarkMode,data,reference}) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      className={`${
        isDarkMode ? "bg-black  text-white" : "bg-white text-black"
      } overflow-hidden flex-shrink-0 relative cursor-grab w-60 h-72 rounded-md shadow-lg p-5`}
    >
      <FaRegFileAlt />
      
      <p className="para-1">
        {data.description}
      </p>
      {/* sent props(data) */}
      <Footer data={data}/>
    </motion.div>
  );
};

export default Cards;
