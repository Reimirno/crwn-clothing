import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item";
import GeneralButton from "../general-button/general-button";
import { createStructuredSelector } from "reselect";
import "./cart-dropdown.scss";
import withRouter from "../../utilities/withRouter";
import { toggleCartVisibility } from "../../redux/cart/cart.action";

const CartDropDown = ({ cartItems, router, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartDropdownItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-msg">Your cart is empty.</span>
      )}
    </div>
    <GeneralButton
      onClick={() => {
        router.navigate("checkout");
        dispatch(toggleCartVisibility());
      }}
    >
      GO TO CHECKOUT
    </GeneralButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
