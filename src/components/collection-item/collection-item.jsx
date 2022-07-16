import GeneralButton from "../general-button/general-button";
import "./collection-item.scss";

const CollectionItem = ({ item }) => {
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
      <GeneralButton extraclass="inverted">Add to Cart</GeneralButton>
    </div>
  );
};
export default CollectionItem;
