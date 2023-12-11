import React, { useState } from "react";
import { ReactComponent as ArrowUpIcon } from "../assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/icon-arrow-down.svg";
import "./dropDown.css";

export default function DropDown() {
  const defaultOption = "Next 30 Days";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdownContainer">
      <div className="dropdownHeader" onClick={toggleDropDown}>
        {selectedOption}
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      {isOpen && (
        <div className="dropdownContent">
          <p onClick={() => handleOptionSelect("Next 1 Day")}>Next 1 Day</p>
          <hr className="dropdownDivider" />
          <p onClick={() => handleOptionSelect("Next 7 Days")}>Next 7 Days</p>
          <hr className="dropdownDivider" />
          <p onClick={() => handleOptionSelect("Next 14 Days")}>Next 14 Days</p>
          <hr className="dropdownDivider" />
          <p onClick={() => handleOptionSelect("Next 30 Days")}>Next 30 Days</p>
        </div>
      )}
    </div>
  );
}
