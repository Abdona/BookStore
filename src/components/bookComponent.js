/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

const Book = (props) => (
  <div>
    <div>
      <h6>{props.type}</h6>
      <h3>{props.name}</h3>
      <h6>{props.author}</h6>
      <ul>
        <li><button type="button"> Comments </button></li>
        <li><button type="button"> Remove </button></li>
        <li><button type="button"> Edit </button></li>
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
