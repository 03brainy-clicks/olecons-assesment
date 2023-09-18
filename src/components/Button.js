import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({ title, icon, size }) => {
  return (
    <button
      className="py-2 px-5 rounded-full cursor-pointer text-sm font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-600  hover:text-white animate"
    >
      <FontAwesomeIcon icon={icon} size={size} /> {title}
    </button>
  );
};

export default Button;
