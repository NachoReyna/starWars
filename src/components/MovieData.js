import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

const MovieData = ({ director , episode_id}) => {
    return(
    <div>
        <p>Episodio: {episode_id}</p>
        <p>Director: {director}</p>
        <Link to={`/naves/${episode_id}`}>Naves</Link>
    </div>
    );

};

export default MovieData;