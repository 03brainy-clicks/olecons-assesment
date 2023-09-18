import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Button component that displays a button with an optional FontAwesome icon, title, and size.
const Button = ({ title, icon, size }) => {
  return (
    <button
      className="py-2 px-5 rounded-full cursor-pointer text-sm font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white animate"
    >
      {/* Render the FontAwesome icon (if provided) */}
      {icon && <FontAwesomeIcon icon={icon} size={size} />} {title}
    </button>
  );
};

export default Button;
