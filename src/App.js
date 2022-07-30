import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  auth,
  createUserProfileDocument,
  onSnapshotChanged,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { selectCollectionReady } from "./redux/shop/shop.selector";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";
import NoMatchPage from "./pages/nomatchpage/nomatchpage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignOnPage from "./pages/signonpage/signonpage";
import CheckoutPage from "./pages/checkoutpage/checkoutpage";
import WithSpinner from "./components/with-spinner/with-spinner";
import collectionOverview from "./components/collection-overview/collection-overview";
import CollectionPage from "./pages/collectionpage/collectionpage";

const CollectionOverviewWithSpinner = WithSpinner(collectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class App extends React.Component {
  unsubOnAuthStateChanged = null;
  unsubOnSnapshotChanged = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubOnAuthStateChanged = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        this.unsubOnSnapshotChanged = onSnapshotChanged(userRef, (userSnap) => {
          setCurrentUser({
            id: userSnap.id,
            ...userSnap.data(),
          });
        });
      }
      setCurrentUser(user);
    });
  }
  componentWillUnmount() {
    this.unsubOnAuthStateChanged();
    if (this.unsubOnSnapshotChanged) {
      this.unsubOnSnapshotChanged();
    }
  }

  render() {
    const { collectionReady } = this.props;
    return (
      <div>
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoMatchPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route
            path="signon"
            element={
              this.props.currentUser == null ? (
                <SignOnPage />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="shop" element={<ShopPage />}>
            <Route
              path=""
              element={
                <CollectionOverviewWithSpinner isLoading={!collectionReady} />
              }
            />
            <Route
              path=":collectionId"
              element={
                <CollectionPageWithSpinner isLoading={!collectionReady} />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}

/* API Changes for react-router-dom:
<Routes> Used to be <Switch> 
element={<Homepage />} used to be component={Homepage}
*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionReady: selectCollectionReady,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
/*
setCurrentUser on LHS is prop name of App,
setCurrentUser on RHS is calling the function actually
*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
