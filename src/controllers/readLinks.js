const fetch = require('node-fetch') ;

export const readLinks = (url) => {
  return fetch(url)
    .catch((err) => {
      // return {status: err.message};
      return {status: 'No existe Dominio'};
    });
};