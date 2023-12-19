import React, { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "../assets/icon-calendar.svg";
import "./datePicker.css";
import { Controller } from "react-hook-form";

export default function DatePicker(props) {
  const initialDate = new Date();

  useEffect(() => {
    props.setValue("ReactDatepicker", initialDate);
  }, []);

  return (
    <Controller
      control={props.control}
      name="ReactDatepicker"
      render={({ field: { onChange, value = initialDate } }) => (
        <ReactDatePicker
          showIcon
          selected={value}
          onChange={onChange}
          icon={<CalendarIcon className="calendarIcon" />}
          className="customInput"
          showPopperArrow={false}
        />
      )}
    />
  );
}
