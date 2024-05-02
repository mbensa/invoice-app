import React, { useState, useEffect } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import InputBox from "./InputBox";
import Text from "./Text";
import DropDown from "./DropDown";
import DatePicker from "./DatePicker";
import Button from "./Button";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";

export default function Form(props) {
  const { newInvoice, editInvoice, onSubmit } = props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  //calculate the total price
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal(quantity, price);
  }, [quantity, price]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handlePriceChange = (event) => {
    const newPrice = parseInt(event.target.value);
    setPrice(newPrice);
  };

  const calculateTotal = (newQuantity, newPrice) => {
    const newTotal = newQuantity * newPrice;
    setTotal(newTotal);
  };

  //add or delete another new item
  const [itemContainers, setItemContainers] = useState([{ id: 1 }]);

  const handleAddNewItem = () => {
    const newItemList = [...itemContainers, { id: itemContainers.length + 1 }];
    setItemContainers(newItemList);
  };

  const handleRemoveItem = (id) => {
    const updatedItemList = itemContainers.filter((item) => item.id !== id);
    setItemContainers(updatedItemList);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      <div>
        <Text type="h5" className="billInputHeading">
          Bill From
        </Text>
        <InputBox
          type="text"
          register={register}
          id="addressFrom"
          inputName="addressFrom"
          errors={errors}
          label="Street Address"
        />
        <div className="inputCityContainer">
          <InputBox
            type="text"
            register={register}
            id="cityFrom"
            inputName="cityFrom"
            errors={errors}
            label="City"
          />
          <InputBox
            type="text"
            register={register}
            id="postFrom"
            inputName="postFrom"
            errors={errors}
            label="Post Code"
          />

          <InputBox
            type="text"
            register={register}
            id="countryFrom"
            inputName="countryFrom"
            errors={errors}
            label="Country"
          />
        </div>
      </div>

      <div>
        <Text type="h5" className="billInputHeading">
          Bill To
        </Text>
        <InputBox
          type="text"
          register={register}
          id="name"
          inputName="name"
          errors={errors}
          label="Client's Name"
        />
        <InputBox
          type="email"
          register={register}
          id="email"
          inputName="email"
          errors={errors}
          label="Client's Email"
        />
        <InputBox
          type="text"
          register={register}
          id="addressTo"
          inputName="addressTo"
          errors={errors}
          label="Street Address"
        />
        <div className="inputCityContainer">
          <InputBox
            type="text"
            register={register}
            id="cityTo"
            inputName="cityTo"
            errors={errors}
            label="City"
          />
          <InputBox
            type="text"
            register={register}
            id="postTo"
            inputName="postTo"
            errors={errors}
            label="Post Code"
          />

          <InputBox
            type="text"
            register={register}
            id="countryTo"
            inputName="countryTo"
            errors={errors}
            label="Country"
          />
        </div>
        <div className="dateTermsContainer">
          <div className="invoiceDateContainer">
            <Text type="p">Invoice Date</Text>
            <DatePicker control={control} setValue={setValue} />
          </div>
          <div className="paymentTermsContainer">
            <Text type="p">Payment Terms</Text>
            <DropDown setValue={setValue} control={control} />
          </div>
        </div>
        <InputBox
          type="text"
          register={register}
          id="project"
          inputName="project"
          errors={errors}
          label="Project Description"
        />
      </div>

      <Text type="h3" className="formItemListText">
        Item List
      </Text>
      {itemContainers.map((item) => (
        <div key={item.id} className="itemListContainer">
          <InputBox
            type="text"
            register={register}
            id={`item-${item.id}`}
            inputName={`item-${item.id}`}
            errors={errors}
            label="Item Name"
          />
          <div className="priceContainer">
            <InputBox
              type="number"
              register={register}
              id={`quantity-${item.id}`}
              inputName={`quantity-${item.id}`}
              errors={errors}
              label="Qty."
              onChange={handleQuantityChange}
            />
            <InputBox
              type="number"
              register={register}
              id={`price-${item.id}`}
              inputName={`price-${item.id}`}
              errors={errors}
              label="Price"
              onChange={handlePriceChange}
            />
            <div className="totalPriceContainer">
              <Text type="p">Total</Text>
              <div className="numberPriceContainer">
                <Text type="p" className="totalPrice">
                  <b>{isNaN(total) ? "0" : total}</b>
                </Text>
              </div>
            </div>
            <div className="deleteIconContainer">
              <DeleteIcon onClick={() => handleRemoveItem(item.id)} />
            </div>
          </div>
        </div>
      ))}
      <Button
        icon
        fluid
        btnText="Add New Item"
        className="buttonAdd"
        onClick={handleAddNewItem}
      />
      {newInvoice && (
        <div className="buttonContainer buttonContainerNewInvoice">
          <Button
            btnText="Discard"
            className="buttonChange btnDiscardNewInvoice"
          />
          <Button
            btnText="Save as Draft"
            className="buttonSaveDraft btnSaveDraftNewInvoice"
          />
          <Button
            btnText="Save & Send"
            className="buttonPrimary"
            type="submit"
          />
        </div>
      )}
      {editInvoice && (
        <div className="buttonContainer buttonContainerEditInvoice">
          <Button btnText="Cancel" className="buttonChange" />
          <Button
            btnText="Save Changes"
            className="buttonPrimary"
            type="submit"
          />
        </div>
      )}
    </form>
  );
}
