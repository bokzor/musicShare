import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import Content from './components/Content';
import Profile from './components/Profile';
import AddMusic from './components/AddMusic';
import Signin from './components/Signin';
import Signup from './components/Signup';

export default (
  <Route handler={App}>
    <Route path='/' handler={Content}/>
    <Route path='/profile' handler={Profile} />
    <Route path='/addMusic' handler={AddMusic} />
    <Route path='/signin' handler={Signin} />
    <Route path='/signup' handler={Signup} />
  </Route>
);