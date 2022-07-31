import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { selectCollectionReady } from "../../redux/shop/shop.selector";
import CollectionPage from "./collectionpage";

const mapStateToProps = (state) => ({
  isLoading: !selectCollectionReady(state),
});
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
export default CollectionPageContainer;
