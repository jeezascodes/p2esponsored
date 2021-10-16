import './App.css';
import Landing from './pages/landing/landing';
import Register from './pages/register/register';
import Offers from './pages/offers/offers';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='/offers'>
            <Offers />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
