const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = { count: 0, books: [] };

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { count: state.count + 1, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { count: state.count - 1, books: state.books.filter((book) => book.id !== action.id) };
    default:
      return state;
  }
};

export default bookReducer;
