export function extractFirstNameFromEmail(email: string): string {
    if (!email) {
      throw new Error('Email is required');
    }
    const firstName = email.split('@')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }