const fetch = require('node-fetch');

module.exports = (app) => {
  const USERS_URL = `http://localhost:${app.get('JSON_PORT')}/users`;
  const RECIPES_URL = `http://localhost:${app.get('JSON_PORT')}/recipes`;
  return {
    getSharedItems(id) {
      return fetch(`${RECIPES_URL}/?itemowner=${id}`).then(r => r.json());
    },
    getItems() {
      return fetch(RECIPES_URL).then(r => r.json());
    },
    getUsers() {
      return fetch(USERS_URL).then(r => r.json());
    },
    getSingleItem(id) {
      return fetch(`${RECIPES_URL}/${id}`).then(r => r.json());
    },
    getSingleUser(id) {
      return fetch(`${USERS_URL}/${id}`).then(r => r.json());
    },
    // const getBorrowedItems = fetch(`${USERS_URL}/${item.borrower}`).then(r => r.json());
  };
};
