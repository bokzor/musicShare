import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Discover from './components/Discover';
import Search from './components/Search';
import Profile from './components/Profile';
import Genres from './components/Genres';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddMusicAd from './components/AddMusicAd';


const routes = (
  <Route>
    <Route path='/signin' component={Signin}/>
    <Route path='/logout' component={Signin}/>
    <Route path='/signup' component={Signup}/>
    <Route component={App}>
      <Route path='/' component={Discover}/>
      <Route path='/search/:search' component={Search}/>
      <Route path='/genres' component={Genres}/>
      <Route path='/genres/:genreId' component={Genres}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/profile/:username' component={Profile}/>
      <Route path='/addMusicAd' component={AddMusicAd}/>
    </Route>
  </Route>
);

export default routes;