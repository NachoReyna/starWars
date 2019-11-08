import React, { Component } from "react";
import MovieTitle from '../components/MovieTitle';
import MovieData from '../components/MovieData';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Movie extends Component {
  state = {
    movies: [],
    starships: []
  }
  componentDidMount() {
    const url = 'https://swapi.co/api/films/';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ 
        movies: data.results,
      })
     })
     
  }
  
  render() {
    return (
      <div className="mt-5 container">
        <div className="row">
        {this.state.movies.map((user) => (
            <div className="elemto col-md-12 shadow p-3 mb-5 bg-white rounded animated fadeIn">
            <div className="col-md-12">
                <h1><MovieTitle nameTitle={user.title}></MovieTitle></h1>
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