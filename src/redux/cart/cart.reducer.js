import { CartActionType } from "./cart.type";
import {
  addItemToCart,
  modifyItemQuantity,
  removeItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems),
      };
    case CartActionType.INC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: modifyItemQuantity(state.cartItems, action.payload, 1),
      };
    case CartActionType.DEC_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: modifyItemQuantity(state.cartItems, action.payload, -1),
      };
    default:
      return state;
  }
};

export default cartReducer;
