import React from 'react';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import cookie from 'react-cookie';
import Signin from '../components/Signin';

export default (ComponentToBeRendered) => {
  class ProtectedComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = AuthStore.getState();
      this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
      this.jwt = cookie.load('XSRF-TOKEN');
      this.user = cookie.load('user');
      this.setState({ username: this.user.username });
      console.log('ProtectedComponent (WillMount) :: this.state.username : ' + this.state.username);
    }

    componentDidMount() {
      this.jwt = cookie.load('XSRF-TOKEN');
      this.user = cookie.load('user');
      this.setState({ username: this.user.username });
      console.log('ProtectedComponent (DidMount) :: this.state.username : ' + this.state.username);
      // We should check the expiration of the token
      if (!this.jwt)  this.props.history.pushState(null, '/signin');
    }

    onChange(state) {
      this.setState(state);
    }

    render() {
      let username = this.user.username;
      console.log('ProtectedComponent (render) :: this.state.username : ' + this.state.username);
      if (this.jwt) {
        return <ComponentToBeRendered {...this.props} username={this.state.username} />;
      } else {
        return <Signin></Signin>;
      }
    }
  }

  return ProtectedComponent;
}