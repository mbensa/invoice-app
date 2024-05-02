import React from "react";
import "./newInvoice.css";
import Text from "./Text";
import Form from "./Form";
import { ReactComponent as ArrowLeft } from "../assets/icon-arrow-left.svg";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

export default function NewInvoice() {
  const [storedInvoices, setStoredInvoices] = useLocalStorage("invoices", []);

  const handleSubmit = (data) => {
    if (data.ReactDatepicker) {
      console.log(new Date(data.ReactDatepicker).toLocaleDateString());
    }
    const uniqueFormID = uuidv4();

    const newFormData = { id: uniqueFormID, data: data };
    const updatedInvoices = [...storedInvoices, newFormData];
    setStoredInvoices(updatedInvoices);

    console.log("Form submitted with ID:", uniqueFormID);
    console.log("Form data:", data);
  };

  return (
    <div className="outerContainer">
      <div className="newInvoiceContainer">
        <div className="goBackContainer">
          <ArrowLeft />
          <Text type="h5">Go back</Text>
        </div>
        <Text type="h2">New Invoice</Text>
        <Form newInvoice onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
