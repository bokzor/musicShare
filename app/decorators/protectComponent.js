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
      this.jwt = cookie.load('jwt');
    }

    componentDidMount() {
      this.jwt = cookie.load('jwt');
      // redirect to login page is theres no current user state or any JWT
      if (!this.jwt) this.context.router.transitionTo('/signin');
    }

    render() {
      if (this.jwt) {
        return <ComponentToBeRendered {...this.props} />;
      } else {
        return <Signin></Signin>;
      }
    }
  }

  ProtectedComponent.contextTypes = {
    router: React.PropTypes.func
  };

  return ProtectedComponent;
}