import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartVisibility } from "../../redux/cart/cart.selector";
import {
  HeaderDiv,
  LogoContainerLink,
  OptionDiv,
  OptionLink,
  OptionsContainerNav,
} from "./header.styles";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <HeaderDiv>
      <LogoContainerLink to="/">
        <Logo />
      </LogoContainerLink>
      <OptionsContainerNav>
        <OptionLink to="shop">SHOP</OptionLink>
        <OptionLink to="about">ABOUT</OptionLink>
        {currentUser == null ? (
          <OptionLink to="signon">SIGN IN</OptionLink>
        ) : (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        )}
        <CartIcon />
      </OptionsContainerNav>
      {cartHidden ? null : <CartDropDown />}
    </HeaderDiv>
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
