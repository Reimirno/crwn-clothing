import "./cart-dropdown-item.scss";

const CartDropdownItem = ({ item }) => {
  return (
    <div className="cart-dropdown-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-price">
          {item.quantity} × ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartDropdownItem;
