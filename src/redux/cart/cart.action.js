import { CartActionType } from "./cart.type";

export const toggleCartVisibility = () => ({
  type: CartActionType.TOGGLE_CART_VISIBILITY,
  payload: null,
});
export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});
