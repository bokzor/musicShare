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
    this.currentUser = response.data.user;
    cookie.save('XSRF-TOKEN', this.jwt);
  }


  onLoginFail(response) {
    console.log(response)
    console.log('fail login');
  }

  onSignupSuccess(response) {
    console.log('success signup');
    toastr.success('success signup');
  }

  onSignupFail() {
    console.log('fail signup');
    toastr.error('fail signup');
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