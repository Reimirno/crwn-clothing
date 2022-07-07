import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutpage/aboutpage";
import NoMatchPage from "./pages/nomatchpage/nomatchpage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}

/* API Changes:
<Routes> Used to be <Switch> 
element={<Homepage />} used to be component={Homepage}
*/

export default App;
