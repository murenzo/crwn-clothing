import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import ShopCollection from "../shop-collection/shop-collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionSnapshopToMap,
} from "../../firebase/firebase.utils";

import { updateShopCollections } from "../../redux/shop/shop.actions";

import "./shop-page.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const ShopCollectionWithSpinner = WithSpinner(ShopCollection);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unSubscribeFromSnapShop = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapShot) => {
      const modifiedCollection = convertCollectionSnapshopToMap(snapShot);
      updateCollections(modifiedCollection);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ShopCollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) =>
    dispatch(updateShopCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
