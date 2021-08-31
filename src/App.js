import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="CATEGORIES">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/CATEGORIES"><Categories /></Route>
        <Route path="/"><Books /></Route>
      </Switch>
    </Router>
  );
}

export default App;
