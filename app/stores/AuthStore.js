import alt from '../alt'
import AuthActions from '../actions/AuthActions'
import cookie from 'react-cookie';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.login = {};
    this.signup = { username: '', email: '', password: '' };
    this.jwt = '';
    this.usernameValidationState = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
    this.usernameHelpBlock = '';
    this.emailHelpBlock = '';
    this.passwordHelpBlock = '';
  }


  onLoginSuccess(response) {
    this.jwt = response.data.token;
    this.user = response.data.user;
    toastr.success(response.data.message);
    cookie.save('XSRF-TOKEN', this.jwt);
  }


  onLoginFail(response) {
    toastr.error(response.data.message);
  }

  onSignupSuccess(response) {
    console.log(response);
    this.jwt = response.data.token;
    this.user = response.data.user;
    toastr.success(response.data.message);
  }

  onSignupFail(response) {
    toastr.error(response.data.message);
  }

  onInvalidUsername() {
    this.usernameValidationState = 'has-error';
    this.usernameHelpBlock = 'Please enter a username';
  }

  onInvalidEmail() {
    this.emailValidationState = 'has-error';
    this.emailHelpBlock = 'Please enter an email';
  }

  onInvalidPassword() {
    this.passwordValidationState = 'has-error';
    this.passwordHelpBlock = 'Please enter a password';
  }
}

export default alt.createStore(AuthStore)