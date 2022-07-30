import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollection = (collectionName) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionName] : null
  );

export const selectCollectionReady = createSelector(
  [selectShop],
  (shop) => shop.ready
);
