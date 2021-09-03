// import { useSelector } from 'react-redux';
import Book from './bookComponent';
import AddNewBook from './addnewbook';
import { getFromstore } from '../utils/bookstoreapi';

const Books = () => {
  const booksObj = async () => getFromstore();
  const bookArr = Object.entries(booksObj);
  const booklist = bookArr.map((id, obj) => (<Book key={obj.id.toString()} id={id} type={obj.category} name={obj.title} author="ahmed" completed="65" />));
  console.log(booklist);
  return (
    <>
      <ul>{booklist}</ul>
      <AddNewBook />
    </>
  );
};
export default Books;
