// const fetch = require('cross-fetch');

export const addTostore = async (id, bookname, booktype) => {
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
  return resParse;
};

export const getFromstore = async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YRt46nmouQk8zfo0qX5a/books', {
    method: 'GET',
  });
  const resParse = await res.text();
  return JSON.parse(resParse);
};

export const removeFromstore = async (id) => {
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
  return resParse;
};

// addTostore(34334, 'sfasfasf', 'sciencefiction');
// getFromstore();
// removeFromstore('34334');
// getFromstore();
