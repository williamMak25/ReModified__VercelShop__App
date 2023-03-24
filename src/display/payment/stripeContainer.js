import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Payment } from './payment';

const PUBLIC_KEY = 'pk_test_51MnkloHDvT9EqEl7aMvwii2ezBZRGyisuiQruzTQqVst132aHzeiHTAQ7DfsDDtyYrpjJXm5qwztzGVAZArWIeN400nC6sAZvM';

const stripPromise = loadStripe(PUBLIC_KEY)
export const StripeContainer = () => {
  return (
    <Elements stripe={stripPromise}>
      <Payment/>
    </Elements>
  )
}
