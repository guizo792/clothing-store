import { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  removeItemFromCart,
  addItemToCart,
  cancelItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';

import './checkout-item.styles.scss';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const incrementProductHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decrementProductHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const cancelProductHandler = () =>
    dispatch(cancelItemFromCart(cartItems, cartItem));

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
});

export default CheckoutItem;
