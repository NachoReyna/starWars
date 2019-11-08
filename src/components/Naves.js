import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

class Naves extends Component{
    state = {
    array: {}
    }

    constructor(props) {
        super(props);
        }
        componentWillMount() {            
        const {nombre} = this.props;
        const url = nombre;
        axios.get(url).then(response => response.data)
        .then((arrays) => {
        this.setState({ array:arrays })
        })
    }
  
    render() {
        const urls = this.state.array.url;
        var cadena = "abcdefghij";
        const arr = this.state.array;
        return (
              <div>
              <h4>Nombre de la nave:{arr.name}</h4>
              <h4>Modelo: {arr.model}</h4>
              <h4>Clase: {arr.starship_class}</h4>
              <h4 className="btn btn-dark"><Link className="estilo-boton-nave" to="/naves-details/">Ver Más</Link></h4>
              </div> 
           
          );
      }
    }
    
    export default Naves;
