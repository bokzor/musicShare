import React from 'react';
import {RouteHandler} from 'react-router';
import { History } from 'react-router'

import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import ProtectComponent from '../decorators/protectComponent'

import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'

import mixin from 'mixin-decorator'
import composeAnimation from '../decorators/composeAnimation'
@mixin(composeAnimation)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AppStore.listen(this.onChange);
    AppActions.getUser();
  }

  componentWillUnmount() {
    AppStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <section className="vbox">
        <Header
          username={this.state.username}
        />
        <section>
          <section className="hbox stretch">
            <LeftNav
              username={this.state.username}
            />
            <section id="content" style={{ paddingBottom: '100px' }}>
              <section className="hbox stretch">
                {React.cloneElement(this.props.children, {usernameConnected: this.state.username, usernameConnectedCookie: this.props.username})}
                <RightNav/>
              </section>
              <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open"
                 data-target="#nav,html"></a>
            </section>
          </section>
        </section>
        <Footer/>
      </section>
    );
  }
}

export default ProtectComponent(App);