import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section className="hbox stretch">
                    <LeftNav/>
                </section>
            </div>
        );
    }
}


export default Home;