import React, { useState, useEffect } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import InputBox from "./InputBox";
import Text from "./Text";
import DropDown from "./DropDown";
import DatePicker from "./DatePicker";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

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

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Text type="h5">Bill From</Text>
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
        <Text type="h5">Bill To</Text>
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
        <div>
          <Text type="p">Invoice Date</Text>
          <DatePicker />

          <Text type="p">Payment Terms</Text>
          <DropDown />
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
      <div>
        <InputBox
          type="text"
          register={register}
          id="item"
          inputName="item"
          errors={errors}
          label="Item Name"
        />
        <div className="priceContainer">
          <InputBox
            type="number"
            register={register}
            id="quantity"
            inputName="quantity"
            errors={errors}
            label="Qty."
            onChange={handleQuantityChange}
          />
          <InputBox
            type="number"
            register={register}
            id="price"
            inputName="price"
            errors={errors}
            label="Price"
            onChange={handlePriceChange}
          />
          <div>
            <Text type="p">Total</Text>
            <Text type="p" className="totalPrice">
              <b>{isNaN(total) ? "0" : total}</b>
            </Text>
          </div>
          <div className="deleteIconContainer">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
}
