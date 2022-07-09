import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <nav className="nav-options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="about">
          ABOUT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="signon">
            SIGN IN
          </Link>
        )}
      </nav>
    </div>
  );
};
export default Header;
