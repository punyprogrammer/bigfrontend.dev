/**
 * Retries a fetcher function up to `maximumRetryCount` times on failure.
 * @param {() => Promise<any>} fetcher - A function returning a promise.
 * @param {number} maximumRetryCount - Maximum number of retries allowed.
 * @returns {Promise<any>} - Resolves with the result or rejects after retries.
 */
async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  let attempt = 0;

  while (attempt <= maximumRetryCount) {
    try {
      return await fetcher(); // Success, return the result
    } catch (error) {
      if (attempt === maximumRetryCount) {
        throw error; // Re-throw the last error
      }
      attempt++;
    }
  }
}
