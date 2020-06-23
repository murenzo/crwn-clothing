import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshopToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const collectionSnapshot = yield collectionRef.get();
    const mappedCollections = yield call(
      convertCollectionSnapshopToMap,
      collectionSnapshot
    );
    yield put(fetchCollectionsSuccess(mappedCollections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
