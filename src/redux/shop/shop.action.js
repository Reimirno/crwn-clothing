import ShopActionTypes from "./shop.type";

export const updateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});

export const markCollectionsReady = (ready) => ({
  type: ShopActionTypes.MARK_COLLECTIONS_READY,
  payload: ready,
});
