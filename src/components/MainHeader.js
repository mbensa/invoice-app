import React from "react";
import "./mainHeader.css";
import Button from "./Button";
import Filter from "./Filter";
import Text from "./Text";
import useMobile from "../hooks/useMobile";

export default function MainHeader() {
  const { isMobile } = useMobile();

  return (
    <div className="mainHeaderContainer">
      <div className="mainHeaderText">
        <Text type="h1">Invoices</Text>
        <Text type="p">No invoices</Text>
      </div>
      <div className="mainHeaderComponents">
        <Filter />
        <Button className="buttonPrimary" icon btnText={isMobile ? "New" : "New Invoice"} />
      </div>
    </div>
  );
}
