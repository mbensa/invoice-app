import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Avatar } from "../assets/image-avatar.jpg";
import "./header.css";

export default function Header() {
  return (
    <header className="headerContainer">
      <div className="toggleContainer">
        <Logo className="mainLogo" />
      </div>
      <hr></hr>
      <div className="avatarContainer">
        <Avatar className="avatar" />
      </div>
    </header>
  );
}
