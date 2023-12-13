import React from "react";
import "./inputBox.css";

export default function InputBox(props) {
  const { id, inputName, register, errors, label, type, onChange } = props;

  return (
    <div className="inputContainer">
      <label htmlFor={inputName} className="inputLabel">
        {label}
      </label>
      {errors[inputName]?.type === "required" && (
        <p role="alert">Can't be empty</p>
      )}
      <input
        type={type}
        id={id}
        {...register(inputName, { required: true })}
        aria-invalid={errors.inputName ? "true" : "false"}
        className="input"
        onChange={onChange}
      />
    </div>
  );
}
