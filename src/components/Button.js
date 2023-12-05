import React from "react";
import "./button.css";
import { ReactComponent as IconPlus } from "../assets/icon-plus.svg";

export default function Button(props) {
  const { icon, btnText, color, onClick, id, fluid } = props;

  const buttonStyle = {
    backgroundColor: color,
    width: fluid ? "100%" : "auto",
  };

  return (
    <button className="button" id={id} style={buttonStyle} onClick={onClick}>
      {icon && <IconPlus />}
      {btnText}
    </button>
  );
}
