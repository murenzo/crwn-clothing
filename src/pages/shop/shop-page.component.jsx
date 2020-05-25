import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import ShopCollection from "../shop-collection/shop-collection.component";

import "./shop-page.styles.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={ShopCollection} />
    </div>
  );
};

export default ShopPage;
