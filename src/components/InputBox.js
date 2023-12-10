import React from "react";
import "./inputBox.css";

export default function InputBox(props) {
  const { id, inputName, placeholder, className, register } = props;

  return (
    <div className={className}>
      <input type="input" id={id} {...register(inputName)} placeholder={placeholder} className="input" />
    </div>
  );
}
