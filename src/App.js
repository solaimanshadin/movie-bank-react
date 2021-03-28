import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './components/Movies';
import MyBookings from './components/MyBookings';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import { AuthProvider } from './customHooks/useAuth';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/movie/:id/">
            <MovieDetails />
          </Route>
          <Route path="/my-bookings">
            <MyBookings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <h1 className="text-center my-5">404 - Not Found!</h1>
          </Route>

        </Switch>

        <Footer />
      </Router>
    </AuthProvider>

  );
}

export default App;
