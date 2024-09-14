import { useState } from 'react';

interface UseJoinWaitlistResult {
  joinWaitlist: (email: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const useJoinWaitlist = (): UseJoinWaitlistResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const joinWaitlist = async (email: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to join waitlist');
      }

      setSuccess(true);
    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
    } else {
            setError('An unknown error occurred');
    }    
    }finally {
      setLoading(false);
    }
  };

  return { joinWaitlist, loading, error, success };
};

export default useJoinWaitlist;