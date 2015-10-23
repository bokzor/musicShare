import React from 'react';
import {RouteHandler} from 'react-router';
import { History } from 'react-router'

import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import ProtectComponent from '../decorators/protectComponent'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="vbox">
                <Header/>
                <section>
                    <section className="hbox stretch">
                        <LeftNav/>
                        <section id="content" style={{ paddingBottom: '100px' }}>
                            <section className="hbox stretch">
                                <RouteHandler />
                                <RightNav/>
                            </section>
                            <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
                        </section>
                    </section>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default App;