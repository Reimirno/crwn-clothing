import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartVisibility } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, cartHidden }) => {
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
        {currentUser == null ? (
          <Link className="option" to="signon">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </nav>
      {cartHidden ? null : <CartDropDown />}
    </div>
  );
};

/*
Note: 
"if (currentUser == null)" checks if it is null or undefined
which is equivilent to 
"if ( typeof(some_variable) !== "undefined" && some_variable !== null )"

This is not equivilent to "if (currentUser)" which checks if it is 
either null, undefined, 0, NaN, false, or an empty string ("falsy values")

See https://stackoverflow.com/questions/2559318
*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartVisibility,
});
export default connect(mapStateToProps)(Header);
