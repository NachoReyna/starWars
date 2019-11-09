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
        function handleClick(e) {
            e.preventDefault();
            alert('Hasta aquí llegaste: Luke Skywalker');
          }
        const urls = this.state.array.url;
        var cadena = "abcdefghij";
        const arr = this.state.array;
        return (
              <div>
              <h4>Nombre de la nave:{arr.name}</h4>
              <h4>Modelo: {arr.model}</h4>
              <h4>Clase: {arr.starship_class}</h4>
              <a href="#" className="btn btn-dark" onClick={handleClick}>Ver más</a>
              </div> 
           
          );
      }
    }
    
    export default Naves;
