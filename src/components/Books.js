/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Book from './bookComponent';
import AddNewBook from './addnewbook';

export default function Books() {
  const books = useSelector((state) => state.bookReducer.books);
  const booklist = books.map((obj) => <Book key={obj.id.toString()} type={obj.category} name={obj.title} author="ahmed" completed="65" />);
  return (
    <>
      <ul>{booklist}</ul>
      <AddNewBook />
    </>
  );
}
