import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

function Button({ className, link, text }) {
  return (
    <div className={`${className}`}>
      <Link to={link} className="button">
        {text}
      </Link>
    </div>
  );
}

export default Button;
