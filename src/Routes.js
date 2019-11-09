import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Movie from './components/movies/Movie';
import ElementMovie from './components/naves/ElementNaves';
import DetailsNaves from './components/naves/DetailsNaves';

//Rutas del proyecto
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Movie} />
            <Route path="/naves/:id" component={ElementMovie} />
            <Route path="/naves-details/:id" component={DetailsNaves} />
        </Switch>
    )
}

export default Routes;