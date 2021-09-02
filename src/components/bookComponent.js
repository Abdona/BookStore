/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      <div>
        <h6>{props.type}</h6>
        <h3>{props.name}</h3>
        <h6>{props.author}</h6>
        <ul>
          <li><button type="button" id={props.id}> Comments </button></li>
          <li><button type="button" id={props.id} onClick={removeHandler}> Remove </button></li>
          <li><button type="button" id={props.id}> Edit </button></li>
        </ul>
      </div>
      <div>
        <h3>
          {props.completed}
          %
        </h3>
        <h5>Completed</h5>
      </div>

    </div>
  );
}
export default Book;
