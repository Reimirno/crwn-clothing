import GeneralButton from "../general-button/general-button";
import "./cart-dropdown.scss";
const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <GeneralButton>GO TO CHECKOUT</GeneralButton>
  </div>
);
export default CartDropDown;
