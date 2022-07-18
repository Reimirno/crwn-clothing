import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item";
import GeneralButton from "../general-button/general-button";
import "./cart-dropdown.scss";
const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartDropdownItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <GeneralButton>GO TO CHECKOUT</GeneralButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropDown);
