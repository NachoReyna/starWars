import React, {Component} from 'react';
import Naves from '../components/Naves';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import axios from 'axios';

class ElementMovie extends Component {
    state = {
    naves: []
    }

    constructor(props) {
    super(props);
    }

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

  render() {
    return (
      
        <div className="mt-5 container">
          <div className="row">
          {this.state.naves.map((data) =>(
              <div className="elemto col-md-12 shadow p-3 mb-5 bg-white rounded animated fadeIn">
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