import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
<Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/' handler={Home2} />
    <Route path='/' handler={Home3} />

</Route>
);