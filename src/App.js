import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";
import NoMatchPage from "./pages/nomatchpage/nomatchpage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignOnPage from "./pages/signonpage/signonpage";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
