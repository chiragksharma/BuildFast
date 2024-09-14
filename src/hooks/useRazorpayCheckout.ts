// src/hooks/useRazorpayCheckout.ts
import { useCallback } from 'react';
import siteConfig from '@config/siteConfig.json';

interface UseRazorpayCheckoutProps {
  amount: number;
  currency: string;
}

const useRazorpayCheckout = () => {
  const initiateRazorpayCheckout = useCallback(async ({ amount, currency }: UseRazorpayCheckoutProps) => {
    const response = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency }),
    });

    const { orderId } = await response.json();

    const options = {
      key: siteConfig.razorpay.keyId,
      amount: amount * 100,
      currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: orderId,
      handler: function (response: any) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Your Address',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  }, []);

  return { initiateRazorpayCheckout };
};

export default useRazorpayCheckout;