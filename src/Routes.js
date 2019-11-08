import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Movie from './components/Movie';
import ElementMovie from './components/ElementMovie';
import DetailsNaves from './components/DetailsNaves';


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