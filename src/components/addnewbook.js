/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { addBook } from '../redux/books/books';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const submitBook = () => {
    const newBook = {
      id: uuid(),
      category: document.getElementById('category').value,
      title: document.getElementById('bookname').value,
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <h1>ADD NEW BOOK</h1>
      <input placeholder="Booktitle" id="bookname" />
      <select id="category">
        <option selected disabled>Category</option>
        <option>Action</option>
        <option>Horror</option>
        <option>Sciencefiction</option>
        <option>Fantasy</option>
      </select>
      <button type="button" onClick={submitBook}>ADD BOOK</button>
    </>
  );
}
