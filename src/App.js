import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
  onSnapshotChanged,
} from "./firebase/firebase.utils";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";
import NoMatchPage from "./pages/nomatchpage/nomatchpage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignOnPage from "./pages/signonpage/signonpage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubOnAuthStateChanged = null;
  unsubOnSnapshotChanged = null;

  componentDidMount() {
    this.unsubOnAuthStateChanged = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        this.unsubOnSnapshotChanged = onSnapshotChanged(userRef, (userSnap) => {
          this.setState(
            {
              currentUser: {
                id: userSnap.id,
                ...userSnap.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubOnAuthStateChanged();
    if (this.unsubOnSnapshotChanged) {
      this.unsubOnSnapshotChanged();
    }
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoMatchPage />} />
          <Route path="signon" element={<SignOnPage />} />
          <Route path="shop" element={<ShopPage />} />
        </Routes>
      </div>
    );
  }
}

/* API Changes:
<Routes> Used to be <Switch> 
element={<Homepage />} used to be component={Homepage}
*/

export default App;
