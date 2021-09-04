import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { addBook } from '../redux/books/books';
import { addTostore } from '../utils/bookstoreapi';
import './addnewbook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const submitBook = async () => {
    const newBook = {
      id: uuid(),
      category: document.getElementById('category').value,
      title: document.getElementById('bookname').value,
    };
    if (document.getElementById('bookname').value !== '' && document.getElementById('category').selectedIndex !== 0) {
      await addTostore(newBook.id, newBook.title, newBook.category);
      dispatch(addBook(newBook));
    }
    document.getElementById('bookname').value = '';
    document.getElementById('category').selectedIndex = 0;
  };
  return (
    <div className="addcontainer">
      <h1>ADD NEW BOOK</h1>
      <div className="addbook">
        <input placeholder="Booktitle" id="bookname" />
        <select id="category">
          <option selected disabled>Category</option>
          <option>Action</option>
          <option>Horror</option>
          <option>Sciencefiction</option>
          <option>Fantasy</option>
        </select>
        <button type="button" onClick={submitBook}>ADD BOOK</button>
      </div>
    </div>
  );
};

export default AddNewBook;
