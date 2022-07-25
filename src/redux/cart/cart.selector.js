import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
    0
  )
);
