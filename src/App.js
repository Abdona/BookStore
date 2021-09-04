import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/CATEGORIES"><Categories /></Route>
        <Route path="/">
          <Provider store={store}><Books /></Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
