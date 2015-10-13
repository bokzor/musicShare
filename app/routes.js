import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Discover from './components/Discover';
import Profile from './components/Profile';
import Genres from './components/Genres';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddMusic from './components/AddMusic';
import AddMusicAd from './components/AddMusicAd';



const routes = (

    <Route>
        <Route handler={App}>
            <Route path='/' handler={Discover}/>
            <Route path='/genres' handler={Genres}/>
            <Route path='/genres/:genreId' handler={Genres}/>
            <Route path='/profile' handler={Profile} />
            <Route path='/addMusic' handler={AddMusic} />
            <Route path='/addMusicAd' handler={AddMusicAd} />

        </Route>
        <Route path='/signin' handler={Signin} />
        <Route path='/signup' handler={Signup} />
    </Route>

);

export default routes;