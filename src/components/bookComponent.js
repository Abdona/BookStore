import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { removeFromstore } from '../utils/bookstoreapi';
import './bookComponent.css';

const Book = (props) => {
  const {
    type, name, author, id, completed,
  } = props;
  const dispatch = useDispatch();
  const removeHandler = async (e) => {
    await removeFromstore(e.target.id);
    dispatch(removeBook(e.target.id));
  };
  return (
    <div className="book">
      <div>
        <h6 className="categ">{type}</h6>
        <h3 className="movename">{name}</h3>
        <h6 className="authname">{author}</h6>
        <ul>
          <li><button type="button" id={id}> Comments </button></li>
          <li><button type="button" id={id} onClick={removeHandler}> Remove </button></li>
          <li><button type="button" id={id}> Edit </button></li>
        </ul>
      </div>
      <div>
        <h3>
          {completed}
          %
        </h3>
        <h5>Completed</h5>
      </div>
      <div className="bookupdate">
        <span>CURRENT CHAPTER</span>
        <br />
        <span>CHAPTER 17</span>
        <br />
        <button className="progressButt" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
