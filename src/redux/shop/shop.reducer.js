import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
  ready: false,
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case ShopActionTypes.MARK_COLLECTIONS_READY:
      return {
        ...state,
        ready: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
