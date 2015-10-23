import alt from '../alt'
import AuthActions from '../actions/AuthActions'

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.login = {};
    this.signup = {};
    this.jwt = '';
  }


  onLoginSuccess(response) {
    this.jwt = response.data.token;
    this.currentUser = response.data.user;
    console.log('success login');
  }


  onLoginFail() {
    console.log('fail login');
  }

  onSignupSuccess() {
    console.log('success signup');
  }

  onSignupFail() {
    console.log('fail signup');
  }
}

export default alt.createStore(AuthStore)