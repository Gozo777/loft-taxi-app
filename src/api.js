import axios from 'axios';
//import { accessToken } from 'mapbox-gl';

export const serverLogin = async (email, password) => {
  return axios(
    `https://loft-taxi.glitch.me/auth`, {
    params: {
      username: email,
      password,
    },
  }).then((response) => response.data.success);
};

export const addBankCard = async (cardNum, expiryDate, cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/cart`, {
    method: 'post',
    body: {
      cardNumber: cardNum,
      expiryDate: expiryDate,
      cvc: cvc,
      token: token
    }
  }
  ).then(res => res.json()).then(data => data.success);
};