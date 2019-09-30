import React, { Component } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
//import { Redirect } from 'react-router-dom';
import "./Login.css";
//import Peliculas from "../Peliculas/Peliculas";
import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clave: "",
      usuario: "",
      datosCorrectos: false
    };

    this.logear = this.logear.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  logear = event => {
    const { clave, usuario } = this.state;
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("clave", clave);
    this.setState({
      clave,
      usuario,
      datosCorrectos: true
    });
    if(this.state.datosCorrectos === true){
      return this.props.history.push("../peliculas/peliculas") 
    }
  };

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {


    return (
      <div className="App-header" >
        <form onSubmit={this.logear}>
          <div>
            <FormGroup controlId="usuario">
              <FormLabel>USUARIO</FormLabel>
              <FormControl
                value={this.state.usuario}
                onChange={this.handleOnChange}
              />
            </FormGroup>
            <FormGroup controlId="clave">
              <FormLabel>CLAVE</FormLabel>
              <FormControl
                type="password"
                value={this.state.clave}
                onChange={this.handleOnChange}
              />
            </FormGroup>
          </div>
          <div>
            <Link to="/Peliculas" onClick={this.logear} >LOGIN</Link>
          </div>
        </form>
      </div>
    );
  }
}
