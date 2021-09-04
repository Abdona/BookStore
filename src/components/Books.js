import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './bookComponent';
import AddNewBook from './addnewbook';
import { getFromstore } from '../utils/bookstoreapi';
import { setBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);
  const load = async () => {
    const resp = await getFromstore();
    dispatch(setBook(resp));
  };
  useEffect(() => {
    load();
  }, []);
  const booklist = books.map((obj) => <Book key={obj.id.toString()} id={obj.id} type={obj.category} name={obj.title} author="Martin" completed="50" />);
  return (
    <>
      <ul>{booklist}</ul>
      <AddNewBook />
    </>
  );
};
export default Books;
