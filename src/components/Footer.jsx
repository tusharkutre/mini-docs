import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";

const Footer = ({ data }) => {

  // Define the background color based on some condition
  const bgColor = data.tag.isOpen ? data.tag.tagColor : 'defaultColor';

  return (
    <>
      <footer className="footer">
        <div className="flex justify-between items-center px-3 py-3 mb-1">
          <h4 className="font-medium font-Poppins-fonts text-base">
            {data.filesize}
          </h4>
          <span className="span">
            {/* if condition is met? returns true : returns false */}
            {data.close ? (
              <IoCloseSharp color="white" />
            ) : (
              <LiaDownloadSolid size={"1.2em"} color="white" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`${bgColor} w-full py-4 flex items-center justify-center`}>
            <h3 className="heading-3">{data.tag.tagTitle}</h3>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
