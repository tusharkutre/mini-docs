import React from "react";

const DarkButton = ({setDarkMode,toggleBackground}) => {
  return (
    <>
      <button
        onClick={() => {
          setDarkMode((prevMode) => !prevMode);
          toggleBackground(); // Call the function to toggle background color
        }}
        className="cursor-pointer font-Roboto-fonts font-medium bg-gray-300 dark:bg-gray-600 rounded-md p-2 transition-colors duration-300"
      >
        Toggle Dark Mode
      </button>
    </>
  );
};

export default DarkButton;
