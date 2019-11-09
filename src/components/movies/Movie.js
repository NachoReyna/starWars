import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieData from './MovieData';
import MovieTitle from './MovieTitle';
import './styles.css';

class Movie extends Component {

  //Crea un array vacio
  state = {
    movies: []
  }

  //Consulta al api trayendo toda la informacion de las peliculas
  componentDidMount() {
    const url = 'https://swapi.co/api/films/';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ 
        movies: data.results,
      })
     })
     
  }


  //Reder del elemento
  render() {
    return (
      <div className="mt-5 container">
        <div className="row">
        {this.state.movies.map((user) => (
            <div className="elemeto col-md-12 col-sm-12 ml-2 mr-2 shadow p-3 mb-5 bg-white rounded animated fadeInDown">
            <div className="col-md-12">
                <MovieTitle nameTitle={user.title}></MovieTitle>
            </div>
            <div className="col-md-12">
                <span><MovieData director={user.director} episode_id={user.episode_id}></MovieData></span>
            </div>
        </div>  
        ))}
      </div> 
  </div>
    );
  }
}
export default Movie;