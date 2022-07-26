export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const modifyItemQuantity = (
  cartItems,
  cartItemOfInterest,
  modificationAmt
) => {
  if (modificationAmt === 0) return cartItems;
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemOfInterest.id
  );

  if (typeof existingCartItem === "undefined") {
    if (modificationAmt > 0) {
      return [
        ...cartItems,
        { ...cartItemOfInterest, quantity: modificationAmt },
      ];
    } else {
      return cartItems;
    }
  } else {
    if (existingCartItem.quantity + modificationAmt === 0) {
      return removeItemFromCart(cartItems, cartItemOfInterest);
    }

    return cartItems.map((cartItem) =>
      cartItem.id === cartItemOfInterest.id
        ? { ...cartItem, quantity: cartItem.quantity + modificationAmt }
        : cartItem
    );
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
