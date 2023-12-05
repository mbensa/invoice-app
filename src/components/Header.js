import React from "react";
import ToggleIcon from "./ToggleIcon";
import { ReactComponent as Logo } from "../assets/logo.svg";
import avatar from "../assets/image-avatar.jpg";
import "./header.css";

export default function Header() {
  return (
    <header className="headerContainer">
      <div className="toggleContainer">
        <Logo className="mainLogo" />
        <ToggleIcon />
      </div>
      <div className="avatarContainer">
        <hr className="headerLine"></hr>
        <img className="avatarImg" src={avatar} alt="user's avatar" />
      </div>
    </header>
  );
}
