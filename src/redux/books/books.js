const ADD_BOOKS = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookStore/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  action: ADD_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  action: REMOVE_BOOKS,
  payload,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, action.payload];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
