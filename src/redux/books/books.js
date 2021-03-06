const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOK = 'bookStore/books/SET_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const setBook = (payload) => ({
  type: SET_BOOK,
  payload,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case SET_BOOK: {
      const saved = Object.entries(action.payload).map(([key, value]) => ({
        id: key,
        title: value[0].title,
        category: value[0].category,
        author: 'Author undefiend',
      }));
      return saved;
    }
    default:
      return state;
  }
};

export default bookReducer;
