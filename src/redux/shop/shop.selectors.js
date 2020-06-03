import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (selectShop) => selectShop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParams) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[collectionUrlParams]
  );
