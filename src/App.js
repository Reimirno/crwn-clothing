import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<Homepage />} />
    </Routes>
  );
}

/* API Changes:
<Routes> Used to be <Switch> 
element={<Homepage />} used to be component={Homepage}
*/

export default App;
