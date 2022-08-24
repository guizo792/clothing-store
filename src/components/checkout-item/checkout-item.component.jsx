import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const removeProductFromCart = () => removeItemFromCart(cartItem);
  const addProductToCart = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <br />
        <span onClick={addProductToCart}>increment</span>
        <br />
        <span onClick={removeProductFromCart}>decrement</span>
        <br />
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={removeProductFromCart}>
        x
      </Button>
    </div>
  );
};

export default CheckoutItem;
