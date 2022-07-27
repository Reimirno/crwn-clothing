import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import "./collectionpage.scss";
import { compose } from "redux";
import withRouter from "../../utilities/withRouter";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.router.params.collectionId)(state),
});

export default compose(withRouter, connect(mapStateToProps))(CollectionPage);
