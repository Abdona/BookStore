/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const Book = (props) => (
  <div>
    <div>
      <h6>{props.type}</h6>
      <h3>{props.name}</h3>
      <h6>{props.author}</h6>
      <ul>
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
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
export default Book;
