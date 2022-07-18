import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartVisibility } from "../../redux/cart/cart.action";
import { selectCartItemQuantity } from "../../redux/cart/cart.selector";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//Passing the entire reducer state into selector
const mapStateToProps = (state) => ({
  itemCount: selectCartItemQuantity(state),
});

const matchDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, matchDispatchToProps)(CartIcon);
