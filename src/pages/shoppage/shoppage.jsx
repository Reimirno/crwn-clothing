import "./shoppage.scss";
import React from "react";
import SHOP_DATA from "../../data/shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return null;
  }
}

export default ShopPage;