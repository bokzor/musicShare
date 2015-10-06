import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
<Route handler={App}>
    <Route path='/' handler={Home} />
<<<<<<< .merge_file_FH23GK
    <Route path='/' handler={Home2} />
    <Route path='/' handler={Home3} />
=======
    <Route path='/' handler={Home1} />
>>>>>>> .merge_file_dCQ8MO

</Route>
);