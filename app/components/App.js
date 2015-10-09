import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './Header';
import LeftNav from './LeftNav';
import Player from './Player';

class App extends React.Component {
    render() {
        return (
            <section class="vbox">
                <Header/>
                    <section className="hbox stretch">
                        <LeftNav/>
                        <RouteHandler />
                    </section>
                <Player/>
            </section>
        );
    }
}

export default App;