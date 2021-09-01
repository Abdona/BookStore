import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import bookReducer from './books/books';

const reducer = combineReducers({
  bookReducer,
});

const BookStore = createStore(reducer, applyMiddleware(logger));

export default BookStore;
