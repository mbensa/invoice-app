import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "../assets/icon-calendar.svg";
import "./datePicker.css";
import { Controller } from "react-hook-form";

export default function DatePicker(props) {
  return (
    <Controller
      control={props.control}
      name="ReactDatepicker"
      render={({ field: { onChange, value } }) => {
        const handleChange = (event) => {
          console.log(event);
          onChange(event);
        };

        return (
          <ReactDatePicker
            showIcon
            selected={value}
            onChange={handleChange}
            icon={<CalendarIcon className="calendarIcon" />}
            className="customInput"
            showPopperArrow={false}
          />
        );
      }}
    />
  );
}
