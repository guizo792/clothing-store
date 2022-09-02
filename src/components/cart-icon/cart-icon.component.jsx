import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  import {
    ShoppingIcon,
    CartIconContainer,
    ItemCount,
  } from './cart-icon.styles';
  const dispatch = useDispatch();
  const setIsCartOpen = useSelector(setIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => {
    dispatch();
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
