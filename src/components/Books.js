/* eslint-disable react/jsx-key */
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
    // const respObj = await Object.values(resp);
    // const respKey = await Object.keys(resp);
    // const respObj1 = await resp.map((x) => x);
    // console.log(respObj1);
    dispatch(setBook(resp));
  };
  useEffect(() => {
    load();
  }, []);
  const booklist = books.map((obj) => <Book key={obj.id.toString()} id={obj.id} type={obj.category} name={obj.title} author="Martin" completed="65" />);
  return (
    <>
      <ul>{booklist}</ul>
      <AddNewBook />
    </>
  );
};
export default Books;
