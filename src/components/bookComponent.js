import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { removeFromstore } from '../utils/bookstoreapi';

const Book = (props) => {
  const {
    type, name, author, id, completed,
  } = props;
  const dispatch = useDispatch();
  const removeHandler = async (e) => {
    const response = await removeFromstore(e.target.id);
    console.log(response);
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      <div>
        <h6>{type}</h6>
        <h3>{name}</h3>
        <h6>{author}</h6>
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

    </div>
  );
};

Book.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
