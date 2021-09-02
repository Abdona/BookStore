/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { addBook } from '../redux/books/books';

export default function AddNewBook() {
  // const counter = useSelector((state) => state.bookReducer.count);
  const dispatch = useDispatch();
  const submitBook = () => {
    const newBook = {
      id: uuid(),
      title: document.getElementById('bookname').value,
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <h1>ADD NEW BOOK</h1>
      <input placeholder="Booktitle" id="bookname" />
      <select><option>Category</option></select>
      <button type="button" onClick={submitBook}>ADD BOOK</button>
    </>
  );
}
