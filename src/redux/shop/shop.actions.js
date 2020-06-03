import ShopActionTypes from "./shop.types";

export const updateShopCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
