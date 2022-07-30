import "./shoppage.scss";
import { connect } from "react-redux/es/exports";
import { Outlet } from "react-router-dom";
import { Component } from "react";
import {
  db,
  colRef,
  convertCollectionsSnapshotToMap,
  onSnapshotChanged,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = colRef(db, "collections");
    onSnapshotChanged(collectionRef, async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    });
  }
  render() {
    return (
      <div className="shop-page">
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToState = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToState)(ShopPage);
