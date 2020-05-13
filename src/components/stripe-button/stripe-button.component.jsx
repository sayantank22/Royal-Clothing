import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey = 'pk_test_C51ExrhAuc5KwdrLv9Fv1EoW00N96Pfgzo';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Success!');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Royal Clothing Ltd.'
      billingAddress
      shippingAddress
      image={require('../../assets/crown.svg')}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};

export default StripeCheckoutButton;
