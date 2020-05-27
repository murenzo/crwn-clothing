import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_dSWwkh5LCoFDZg7XWaOFhKtJ00j3q5kfGU";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
