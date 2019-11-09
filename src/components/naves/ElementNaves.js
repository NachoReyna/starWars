import React, {Component} from 'react';
import Naves from './Naves';
import axios from 'axios';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

  class ElementMovie extends Component {
    //Crea un array vacio
      state = {
      naves: []
    }

    //Obtiene la propiedad del id pasado por la rutas
      constructor(props) {
      super(props);
    }

      //Genera un componente para la extracción del api con base en el id
      componentWillMount() {
        console.log('aqui en element Movie');
        const { id } = this.props.match.params;
        const url = `https://swapi.co/api/films/${id}`;
        axios.get(url).then(response => response.data)
        .then((data) => {
        this.setState({ 
            naves: data.starships 
            })
        })
      }

  //Realiza el render de nuestros datos obtenidos  
  render() {
    return (
        <div className="mt-5 container">
          <div className="row">
          {this.state.naves.map((data) =>(
              <div className="elemeto col-md-12 ml-2 mr-2 shadow p-3 mb-5 bg-white rounded animated fadeInDown">
                <div className="col-md-12">
                    <h1>
                    <Naves nombre={data}></Naves>
                    </h1>
                </div>
              </div>))}
          </div> 
        </div>
      );
    }
  }

export default ElementMovie;