import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopCollection from "./shop-collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { isCollectionLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionLoaded(state),
});

const ShopCollectionContainer = connect(mapStateToProps)(
  WithSpinner(ShopCollection)
);

export default ShopCollectionContainer;
