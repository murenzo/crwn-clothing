import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";

import CollectionOverview from "../collection-overview/collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = connect(mapStateToProps)(
  withSpinner(CollectionOverview)
);

export default CollectionOverviewContainer;
