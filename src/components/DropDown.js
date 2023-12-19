import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowUpIcon } from "../assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/icon-arrow-down.svg";
import "./dropDown.css";
import { Controller } from "react-hook-form";

export default function DropDown(props) {
  const defaultOption = "Next 30 Days";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    props.setValue("dropdown", option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    props.setValue("dropdown", defaultOption);
  }, []);

  return (
    <Controller
      control={props.control}
      name="dropdown"
      render={() => (
        <div className="dropdownContainer">
          <div className="dropdownHeader" onClick={toggleDropDown}>
            {selectedOption}
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
          {isOpen && (
            <div className="dropdownContent">
              <p onClick={() => handleOptionSelect("Next 1 Day")}>Next 1 Day</p>
              <hr className="dropdownDivider" />
              <p onClick={() => handleOptionSelect("Next 7 Days")}>
                Next 7 Days
              </p>
              <hr className="dropdownDivider" />
              <p onClick={() => handleOptionSelect("Next 14 Days")}>
                Next 14 Days
              </p>
              <hr className="dropdownDivider" />
              <p onClick={() => handleOptionSelect("Next 30 Days")}>
                Next 30 Days
              </p>
            </div>
          )}
        </div>
      )}
    />
  );
}
