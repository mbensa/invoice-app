import React from "react";
import "./button.css";
import { ReactComponent as IconPlus } from "../assets/icon-plus.svg";

export default function Button(props) {
  const { icon, btnText, onClick, id, fluid, className } = props;

  const buttonStyle = {
    width: fluid ? "100%" : "auto",
  };

  return (
    <button className={`button ${className}`} id={id} style={buttonStyle} onClick={onClick}>
      {icon && <IconPlus className="icon" />}
      {btnText}
    </button>
  );
}
