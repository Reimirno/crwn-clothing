import { CartActionType } from "./cart.type";

export const toggleCartVisibility = () => ({
  type: CartActionType.TOGGLE_CART_VISIBILITY,
  payload: null,
});
