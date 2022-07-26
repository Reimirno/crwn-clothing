import "./shoppage.scss";
import CollectionPrewiew from "../../components/collection-preview/collection-preview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...other }) => (
      <CollectionPrewiew key={id} {...other} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
