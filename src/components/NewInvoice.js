import React from "react";
import "./newInvoice.css";
import Text from "./Text";
import Form from "./Form";
import Button from "./Button";
import { ReactComponent as ArrowLeft } from "../assets/icon-arrow-left.svg";

export default function NewInvoice() {
  /**
   * TODOs:
   * 1. Use `useLocalStorage` here.
   * 2. Move action buttons into the form with a render prop.
   * 3. Write the handler handleSubmit:
   *  3.1. Should accept the form object
   *  3.2. Should create a unique form ID (uuid or some other helpers to create unique ids)
   *  3.3. Should define a type (draft or normal)
   *  3.4. Should save everything to local storage [{id, type, data}]
   * 4. Pass a handler handleSubmit to the form prop (onSubmit).
   */

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
