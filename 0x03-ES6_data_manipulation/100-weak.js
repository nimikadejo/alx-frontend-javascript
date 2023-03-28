export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  /**
   * Queries the API for the given endpoint and tracks
   * the number of times it is called.
   * Throws an error if the endpoint has been queried 5 or more times.
   */
  let count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error(`Endpoint load is high`);
  }
  weakMap.set(endpoint, count + 1);
}