import WithSpinner from "../with-spinner/with-spinner";
import collectionOverview from "./collection-overview";
import { connect } from "react-redux";
import { selectCollectionReady } from "../../redux/shop/shop.selector";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  isLoading: !selectCollectionReady(state),
});
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverview);
export default CollectionOverviewContainer;
