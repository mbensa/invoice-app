import React from "react";
import "./inputBox.css";

export default function InputBox(props) {
  const { id, inputName, register, errors, label, type, onChange } = props;

  return (
    <div className="inputContainer">
      <div>
        <label htmlFor={inputName} className="inputLabel">
          {label}
        </label>
        {errors[inputName]?.type === "required" && (
          <p className="alert" role="alert">
            Can't be empty
          </p>
        )}
      </div>
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
