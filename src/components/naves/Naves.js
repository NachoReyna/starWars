import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles.css';

class Naves extends Component{

        //Crea un array vacio
        state = {
            array: {}
        }

        //Extrae las propiedads del elemnto nombre
        constructor(props) {
            super(props);
        }

    //Realiza la consulta al api obteniendo el valor de las naves
    componentWillMount() {            
        const {nombre} = this.props;
        const url = nombre;
        axios.get(url).then(response => response.data)
        .then((arrays) => {
        this.setState({ array:arrays })
        })
    }


    //Realiza el render de la vista
    render() {
        function handleClick(e) {
            e.preventDefault();
            alert('Hasta aquí llegaste: Luke Skywalker');
          }
        const urls = this.state.array.url;
        const arr = this.state.array;
        return (
            <div>
              <h4>Nombre de la nave: {arr.name}</h4>
              <h4>Modelo: {arr.model}</h4>
              <h4>Clase: {arr.starship_class}</h4>
              <a href="#" className="btn btn-dark" onClick={handleClick}>Ver más</a>
            </div> 
        );
      }
    }
    
    export default Naves;
