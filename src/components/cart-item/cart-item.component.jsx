import React from "react";

import { CartItemContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name"> {name}</span>
      <span className="name">
        {quantity} * ${price}
      </span>
    </div>
  </CartItemContainer>
);

export default CartItem;
