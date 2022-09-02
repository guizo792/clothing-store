import { useSelector } from 'react-redux';

import {
  removeItemFromCart,
  addItemToCart,
  cancelItemFromCart,
} from '../../store/cart/cart.selector';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const incrementProductHandler = () => addItemToCart(cartItem);
  const decrementProductHandler = () => removeItemFromCart(cartItem);
  const cancelProductHandler = () => cancelItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementProductHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementProductHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={cancelProductHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
