import {
  firestore,
  convertCollectionSnapshopToMap,
} from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop.types";

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const modifiedCollection = convertCollectionSnapshopToMap(snapShot);
        dispatch(fetchCollectionsSuccess(modifiedCollection));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};
