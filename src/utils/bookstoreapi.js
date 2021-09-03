/* eslint-disable import/prefer-default-export */
const fetch = require('cross-fetch');
// const createStore = async () => {
//   const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
//     method: 'POST',
//   });
//   const resParse = await res.json();
//   console.log(resParse);
// };

// createStore();
const addTostore = async (id, bookname, booktype) => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YRt46nmouQk8zfo0qX5a/books', {
    method: 'POST',
    body: JSON.stringify(
      {
        item_id: id,
        title: bookname,
        category: booktype,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resParse = await res.text();
  console.log(resParse);
};

const getFromstore = async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YRt46nmouQk8zfo0qX5a/books', {
    method: 'GET',
  });
  const resParse = await res.text();
  console.log(resParse);
};

const removeFromstore = async (id) => {
  const res = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YRt46nmouQk8zfo0qX5a/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(
      {
        item_id: id,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resParse = await res.text();
  console.log (resParse);
};

addTostore(34334, 'sfasfasf', 'sciencefiction');
getFromstore();
removeFromstore('34334');
getFromstore();
