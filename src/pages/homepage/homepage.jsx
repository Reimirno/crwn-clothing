import MenuDirectory from "../../components/menu-directory/menu-directory";
import "./homepage.scss";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <nav>
        <Link to="about">About</Link>
      </nav>
      <div className="homepage">
        <MenuDirectory />
      </div>
    </div>
  );
};

export default Homepage;
