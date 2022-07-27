import "./stripe-button.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ priceInDollar }) => {
  const priceInCent = priceInDollar * 100;
  const publishableKey =
    "pk_test_51LQ3vUB1vGoPl9cwseflPhg3qEySAwDZuU3NUxutxH2H4oAqGawSzTwws4fWZUIPrxzpg8yVbNZLGN02XzCAOthg00eaiDwZio";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      //image="../../assets/crown.svg"
      description={`Your total is $${priceInDollar}`}
      amount={priceInCent}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
