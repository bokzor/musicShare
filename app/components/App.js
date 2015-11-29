import React from 'react';
import {RouteHandler} from 'react-router';

import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './FriendList';
import Footer from './Footer';

import mixin from 'mixin-decorator'
import composeAnimation from '../decorators/composeAnimation'
import ProtectComponent from '../decorators/ProtectComponent'

@mixin(composeAnimation)
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="vbox">
        <Header
          username={this.props.username}
          history={this.props.history}
        />
        <section>
          <section className="hbox stretch">
            <LeftNav
              />
            <section id="content" style={{ paddingBottom: '100px' }}>
              <section className="hbox stretch">
                {React.cloneElement(this.props.children, {usernameConnectedCookie: this.props.username})}
                <RightNav/>
              </section>
              <a
                href="#"
                className="hide nav-off-screen-block"
                data-toggle="class:nav-off-screen,open"
                data-target="#nav,html">
              </a>
            </section>
          </section>
        </section>
        <Footer/>
      </section>
    );
  }

}

export default ProtectComponent(App);