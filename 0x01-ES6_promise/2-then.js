export default function handleResponseFromAPI(promise) {
    const Success = { status: 200, body: 'success' };
    return promise
      .then(() => Success)
      .catch(() => new Error())
      .finally(() => { console.log('Got a response from the API'); });
  }