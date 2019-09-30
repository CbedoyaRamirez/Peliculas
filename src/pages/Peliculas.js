import React, { Component } from "react";
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
//import TarjetaPelicula from './TarjetaPelicula';
import axios from "axios";
import "./Peliculas.css";

export default class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombrePelicula: String,
      peliculas: [],
      usuario: String,
      clave: String
    };

    this.buscarPeliculas = this.buscarPeliculas.bind(this);
  }

  componentDidMount() {
    this.setState({
      usuario: localStorage.getItem("usuario"),
      clave: localStorage.getItem("clave")
    });
    console.log(localStorage.getItem("usuario"));
  }

  buscarPeliculas() {
    var url = `http://www.omdbapi.com/?apikey=f12ba140&s=${this.state.nombrePelicula}`;
    axios.get(url)
      .then(res => this.actualizarEstado(res, this.state.nombrePelicula))
  }


  actualizarEstado = (result, nombre) => {
    console.log(result)
    this.setState({
      peliculas: result.data.Title 
    })
    window.location.reload(false);
  }


  updateSearch(nombrePelicula) {
    this.setState({
      nombrePelicula
    });
  }

  render() {
    return (
      
      <div className="App-header">
        <FormLabel> Bienvenido {this.state.usuario} </FormLabel>
        <br />
        <br />
        <br />
        <FormGroup controlId="nombrePelicula">
          <FormControl
            value={this.state.nombrePelicula}
            ref="query"
            placeholder="Buscar Peliculas"
            onChange={e => {
              this.updateSearch(e.target.value);
            }}
          />
          <Button onClick={this.buscarPeliculas}>Buscar</Button>
        </FormGroup>

        <ul>
          <li key={this.state.peliculas}> {this.state.peliculas} </li>
        </ul>
      </div>
    );
  }
}
