// src/hooks/useStripeCheckout.ts
import { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import siteConfig from '@config/siteConfig.json';
import { CheckoutParams } from '@customTypes/events';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const useStripeCheckout = () => {
  const handleCheckout = useCallback(async ({ priceId }: CheckoutParams) => {
    if (!priceId) {
      console.error('Price ID is required for Stripe checkout');
      return;
    }
    const stripe = await stripePromise;

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const { sessionId } = await response.json();

    const { error } = await stripe!.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error(error);
    }
  }, []);

  return handleCheckout;
};

export default useStripeCheckout;