import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './Header';
import LeftNav from './LeftNav.js';

class App extends React.Component {
    render() {
        return (
            <section class="vbox">
                <Header/>
                <section>
                    <section className="hbox stretch">
                        <LeftNav/>
                        <RouteHandler />
                    </section>
                </section>
            </section>
        );
    }
}

export default App;