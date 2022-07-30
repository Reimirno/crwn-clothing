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
import {
  markCollectionsReady,
  updateCollections,
} from "../../redux/shop/shop.action";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections, markCollectionsReady } = this.props;
    const collectionRef = colRef(db, "collections");
    this.unsubscribeFromSnapshot = onSnapshotChanged(
      collectionRef,
      async (snapshot) => {
        markCollectionsReady(false);
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        markCollectionsReady(true);
      }
    );
  }
  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
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
  markCollectionsReady: (ready) => dispatch(markCollectionsReady(ready)),
});

export default connect(null, mapDispatchToState)(ShopPage);
