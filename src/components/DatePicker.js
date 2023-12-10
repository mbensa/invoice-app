import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "../assets/icon-calendar.svg";
import "./datePicker.css";

export default function CalendarInput() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      icon={<CalendarIcon className="calendarIcon" />}
      className="customInput"
      showPopperArrow={false}
    />
  );
}
