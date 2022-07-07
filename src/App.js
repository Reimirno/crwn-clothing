import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";
import NoMatchPage from "./pages/nomatchpage/nomatchpage";
import ShopPage from "./pages/shoppage/shoppage";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<NoMatchPage />} />
      <Route path="shop" element={<ShopPage />} />
    </Routes>
  );
}

/* API Changes:
<Routes> Used to be <Switch> 
element={<Homepage />} used to be component={Homepage}
*/

export default App;
