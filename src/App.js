import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Peliculas from './pages/Peliculas';
//import TarjetasPeliculas from './pages/TarjetaPelicula';
///import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Peliculas" component={Peliculas}/>
          </div>
      </Router>
    );
  }
}

export default App;
