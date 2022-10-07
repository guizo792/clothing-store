import { CategoryItem } from '../categories/category.types';
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CartItem, CART_ACTION_TYPES } from './cart.types';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  // Check if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem: CartItem) => cartItem.id === productToAdd.id
  );
  // If found icrement quantity
  if (existingCartItem) {
    return cartItems.map((cartItem: CartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // Return new arary with modified CartItems/ new cart item

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  // Find the item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Check if quantity is equal to 1, if so remove the item
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back item with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const cancelCartItem = (
  cartItems: CartItem[],
  cartItemToCancel: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToCancel.id);

export type SetIsCartOpen = Action<CART_ACTION_TYPES.SET_IS_CART_OPEN>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
  // console.log("added!!");
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const cancelItemFromCart = (
  cartItems: CartItem[],
  productToCancel: CartItem
) => {
  const newCartItems = cancelCartItem(cartItems, productToCancel);
  return setCartItems(newCartItems);
};
