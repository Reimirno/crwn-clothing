import CollectionPrewiew from "../../components/collection-preview/collection-preview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsAsArray } from "../../redux/shop/shop.selector";
import "./collection-overview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...other }) => (
      <CollectionPrewiew key={id} {...other} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionOverview);
