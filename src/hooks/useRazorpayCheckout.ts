// src/hooks/useRazorpayCheckout.ts
import { useCallback } from 'react';
import RazorPayConfig from '@config/paymentsConfig/razorpay.json';
import { CheckoutParams } from '@customTypes/events';

const useRazorpayCheckout = () => {
  const handleCheckout = useCallback(async ({ amount }: CheckoutParams) => {
    if (!amount) {
      console.error('Amount is required for Razorpay checkout');
      return;
    }

    const currency = 'INR'; // Define currency here

    const response = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency }),
    });

    const { orderId } = await response.json();

    const options = {
      key: RazorPayConfig.keyId,
      amount: parseInt(amount) * 100,
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

  return handleCheckout;
};

export default useRazorpayCheckout;