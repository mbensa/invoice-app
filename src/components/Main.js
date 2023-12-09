import React from "react";
import "./main.css";
import Text from "./Text";
import MainHeader from "./MainHeader";
import { ReactComponent as Empty } from "../assets/illustration-empty.svg";

export default function Main() {
  return (
    <>
      <MainHeader />
      <div className="mainContentContainer">
        <Empty />
        <Text type="h3">There is nothing here</Text>
        <Text type="p">
          Create an invoice by clicking the <b>New</b> button and get started
        </Text>
      </div>
    </>
  );
}
