import React, { Component } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
//import TarjetaPelicula from './TarjetaPelicula';
import "./Peliculas.css";
import MovieRow from "./MovieRow.js";
import $ from "jquery";

export default class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombrePelicula: String,
      peliculas: [],
      usuario: String,
      clave: String
    };
  }

  performSearch(searchTerm) {
    const urlString = "http://www.omdbapi.com/?apikey=f12ba140&s=" + searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.Search;

        var movieRows = [];

        if (searchResults.Response === "True") {
          results.forEach(movie => {
            const movieRow = <MovieRow key={movie.imdbID} movie={movie} />;
            movieRows.push(movieRow);
          });

          this.setState({ rows: movieRows });
        }
      },
      error: (xhr, status, err) => {
        console.error("Error");
      }
    });
  }

  componentDidMount() {
    this.setState({
      usuario: localStorage.getItem("usuario"),
      clave: localStorage.getItem("clave")
    });
  }

  buscarPeliculas(event) {
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App-header">
        <FormLabel> Bienvenido {this.state.usuario} </FormLabel>
        <br />
        <br />
        <br />
        <FormGroup controlId="nombrePelicula">
          <input
            placeholder="Buscar Peliculas"
            onChange={this.buscarPeliculas.bind(this)}
          />
        </FormGroup>

        {this.state.rows}
      </div>
    );
  }
}
