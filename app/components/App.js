import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './Header';
import LeftNav from './LeftNav.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section className="hbox stretch">
                    <LeftNav/>
                    <RouteHandler />
                </section>
            </div>
        );
    }
}

export default App;