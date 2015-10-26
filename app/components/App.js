import React from 'react';


import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import ProtectComponent from '../decorators/protectComponent'

import mixin from 'mixin-decorator'
import composeAnimation from '../decorators/composeAnimation'
@mixin(composeAnimation)
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
                              {this.props.children}
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

export default ProtectComponent(App);