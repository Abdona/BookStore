import { useSelector } from 'react-redux';
import Book from './bookComponent';
import AddNewBook from './addnewbook';

const Books = () => {
  const books = useSelector((state) => state.bookReducer);
  const booklist = books.map((obj) => <Book key={obj.id.toString()} id={obj.id} type={obj.category} name={obj.title} author="ahmed" completed="65" />);
  return (
    <>
      <ul>{booklist}</ul>
      <AddNewBook />
    </>
  );
};
export default Books;
