import React from "react";
import "./checkbox.css";

export default function Checkbox(props) {
  const { children } = props;

  return (
    <label className="labelContainer">
      <input type="checkbox" />
      {children}
      <span className="checkmark"></span>
    </label>
  );
}
