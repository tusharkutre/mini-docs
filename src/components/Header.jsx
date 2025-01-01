import React, { useState, useEffect } from "react";
import DarkButton from "./DarkButton";
import assets from "../assets/react.svg";

const Header = ({ toggleBackground }) => {
  const [darkMode, setDarkMode] = useState(false);

  //   This useEffect hook will run every time only when the darkMode state changes
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark", darkMode); // Toggle dark class on body
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-2">
      <h1 className="text-xl font-Poppins-fonts font-bold text-gray-800 dark:text-white">
        Mini Docs App
      </h1>
      <img src={assets} alt="React Logo" className="w-8 h-8" />
      </div>
      <div className="flex items-center">
        {/* sending props from one component to another */}
        <DarkButton
          setDarkMode={setDarkMode}
          toggleBackground={toggleBackground}
        />
      </div>
    </header>
  );
};

export default Header;
