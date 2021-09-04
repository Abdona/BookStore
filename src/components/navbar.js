import { Link } from 'react-router-dom';
import './navbar.css';
import avatar from './avatar.svg';

const Navbar = () => (
  <nav>
    <div className="navbar">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="CATEGORIES">CATEGORIES</Link>
        </li>
      </ul>
      <span className="oval">
        <img className="avatar" src={avatar} alt="person" />
      </span>
    </div>
  </nav>
);
export default Navbar;
