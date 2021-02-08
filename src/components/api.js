const apiUrl = "https://loft-taxi.glitch.me";

export const auth = (login, password) =>
  fetch(`${apiUrl}/auth?username=${login}&password=${password}`)
    .then(response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
    )
    .catch(error => error);

export const getRoute = (address1, address2) =>
  fetch(`${apiUrl}/route?address1=${address1}&address2=${address2}`)
    .then(response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
    )
    .catch(error => error);

export const getAddressList = () =>
  fetch(`${apiUrl}/addressList`)
    .then(response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
    )
    .catch(error => error);
