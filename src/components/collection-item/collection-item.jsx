import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import GeneralButton from "../general-button/general-button";
import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <GeneralButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </GeneralButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
