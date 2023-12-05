import React, { useState } from "react";
import "./filter.css";
import Text from "./Text";
import Checkbox from "./Checkbox";
import { ReactComponent as ArrowDown } from "../assets/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../assets/icon-arrow-up.svg";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filterContainer">
      <div className="filterHeader" onClick={toggleDropdown}>
        <Text type="h4" className="mobileText">
          Filter
        </Text>
        <Text type="h4" className="desktopText">
          Filter by Status
        </Text>
        {isOpen === false && <ArrowDown />}
        {isOpen && <ArrowUp />}
      </div>
      {isOpen && (
        <div className="filterDropdown">
          <Checkbox>Draft</Checkbox>
          <Checkbox>Pending</Checkbox>
          <Checkbox>Paid</Checkbox>
        </div>
      )}
    </div>
  );
}
