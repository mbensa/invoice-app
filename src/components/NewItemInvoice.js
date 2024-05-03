import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";
import Text from "./Text";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";

export default function NewItemInvoice(props) {
  const { item, register, errors, handleRemoveItem } = props;

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
    console.log(event);
    const newPrice = parseInt(event.target.value);
    setPrice(newPrice);
  };

  const calculateTotal = (newQuantity, newPrice) => {
    const newTotal = newQuantity * newPrice;
    setTotal(newTotal);
  };

  return (
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
  );
}
