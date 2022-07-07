import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <nav className="nav-options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          SHOP
        </Link>
      </nav>
    </div>
  );
};
export default Header;
