/**
 * Utility functions to help prevent hydration mismatches
 */

/**
 * Check if the code is running on the client side
 * This prevents hydration mismatches between server and client
 */
export const isClient = typeof window !== 'undefined';

/**
 * Hook-like function to safely run client-side only code
 * Use this in useEffect hooks to prevent hydration issues
 */
export const runOnClient = (callback: () => void | (() => void)) => {
  if (isClient) {
    return callback();
  }
  return undefined;
};

/**
 * Safe wrapper for browser APIs
 * Returns undefined if not on client side
 */
export const getBrowserAPI = <T>(apiName: string): T | undefined => {
  if (isClient && typeof window !== 'undefined') {
    return (window as any)[apiName];
  }
  return undefined;
};
