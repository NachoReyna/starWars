import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

const MovieData = ({ director , episode_id}) => {
    return(
    <div>
        <h3>Episodio: {episode_id}</h3>
        <h3>Director: {director}</h3>
        <Link className="btn btn-dark" to={`/naves/${episode_id}`}>Ver naves</Link>
    </div>
    );

};

export default MovieData;