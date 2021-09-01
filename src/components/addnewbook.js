/* eslint-disable import/extensions */
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books';

const dispatch = useDispatch();
const counter = useSelector((state) => state.counter || 0);

export default function AddNewBook() {
  function submitBook() {
    const newBook = {
      id: counter + 1,
      title: document.getElementById('bookname'),
    };
    dispatch(addBook(newBook));
  }
  return (
    <>
      <h1>ADD NEW BOOK</h1>
      <input placeholder="Booktitle" id="bookname" />
      <select><option>Category</option></select>
      <button type="button" onClick={submitBook}>ADD BOOK</button>
    </>
  );
}
