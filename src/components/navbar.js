import { Link } from 'react-router-dom';
import './navbar.css';

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
    </div>
  </nav>
);
export default Navbar;
