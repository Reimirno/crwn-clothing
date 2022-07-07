import "./shoppage.scss";
import React from "react";
import SHOP_DATA from "../../data/shop.data";
import CollectionPrewiew from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...other }) => (
          <CollectionPrewiew key={id} {...other} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
