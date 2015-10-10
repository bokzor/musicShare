import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Content from './components/Content';
import Profile from './components/Profile';
import Genres from './components/Genres';


export default (
  <Route handler={App}>
    <Route path='/' handler={Content}/>
      <Route path='/genres' handler={Genres}/>
      <Route path='/profile' handler={Profile} />
  </Route>
);