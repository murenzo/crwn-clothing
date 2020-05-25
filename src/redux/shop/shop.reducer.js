import SHOPDATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOPDATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default shopReducer;
