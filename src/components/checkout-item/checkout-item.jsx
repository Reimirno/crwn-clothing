import { connect } from "react-redux";
import {
  clearItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/cart/cart.action";
import "./checkout-item.scss";

const CheckoutItem = ({
  cartItem,
  clearItem,
  increaseItemQuantity,
  decreaseItemQuantity,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  increaseItemQuantity: (item) => dispatch(increaseItemQuantity(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
