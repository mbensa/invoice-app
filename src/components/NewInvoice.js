import React from "react";
import "./newInvoice.css";
import Text from "./Text";
import Form from "./Form";
import Button from "./Button";
import { ReactComponent as ArrowLeft } from "../assets/icon-arrow-left.svg";

export default function NewInvoice() {
  return (
    <div className="outerContainer">
      <div className="newInvoiceContainer">
        <div className="goBackContainer">
          <ArrowLeft />
          <Text type="h5">Go back</Text>
        </div>
        <Text type="h2">New Invoice</Text>
        <Form />
      </div>
    </div>
  );
}
