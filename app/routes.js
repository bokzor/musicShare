import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Discover from './components/Discover';
import Profile from './components/Profile';
import Genres from './components/Genres';
import Signin from './components/Signin';
import Signup from './components/Signup';


export default (

    <Route>
        <Route handler={App}>
            <Route path='/' handler={Discover}/>
            <Route path='/genres' handler={Genres}/>
            <Route path='/profile' handler={Profile} />
        </Route>
        <Route path='/signin' handler={Signin} />
        <Route path='/signup' handler={Signup} />
    </Route>
);