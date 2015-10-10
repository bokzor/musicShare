import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './Header';
import LeftNav from './LeftNav';
import Content from './Content';
import RightNav from './RightNav';
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <section className="vbox">
        <Header/>
        <section>
          <section className="hbox stretch">
            <LeftNav/>
            <section id="content" style={{ paddingBottom: '60px' }}>
              <section className="hbox stretch">
                <Content/>
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