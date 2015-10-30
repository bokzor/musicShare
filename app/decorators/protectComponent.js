import React from 'react';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import cookie from 'react-cookie';
import Signin from '../components/Signin';

export default (ComponentToBeRendered) => {
  class ProtectedComponent extends React.Component {

    constructor(props) {
      super(props);
      // we're keeping track of the current user instance
    }

    componentWillMount() {
      this.jwt = cookie.load('XSRF-TOKEN');
    }

    componentDidMount() {
      this.jwt = cookie.load('XSRF-TOKEN');
      // We should check the expiration of the token
      if (!this.jwt)  this.props.history.pushState(null, '/signin');
    }

    render() {
      if (this.jwt) {
        return <ComponentToBeRendered {...this.props} />;
      } else {
        return <Signin></Signin>;
      }
    }
  }

  return ProtectedComponent;
}