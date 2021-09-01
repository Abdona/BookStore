import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <Router>
      <nav>
        <div>
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
      <Switch>
        <Route path="/CATEGORIES"><Categories /></Route>
        <Route path="/">
          <Provider><Books /></Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
