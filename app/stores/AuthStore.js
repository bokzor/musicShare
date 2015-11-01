import alt from '../alt'
import AuthActions from '../actions/AuthActions'
import cookie from 'react-cookie';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.login = {};
    this.jwt = '';
    this.user = {};
    this.canSubmit = false;
    this.username = '';
  }


  onLoginSuccess(response) {
    this.jwt = response.data.token;
    this.user = response.data.user;
    this.username = this.user.username;
    toastr.success(response.data.message);
    cookie.save('XSRF-TOKEN', this.jwt);
    cookie.save('user', response.data.user);
  }

  onLoginFail(response) {
    console.log(response)
    toastr.error(response.data.message);
  }

  onSignupSuccess(response) {
    this.jwt = response.data.token;
    this.user = response.data.user;
    this.username = this.user.username;
    toastr.success(response.data.message);
    cookie.save('XSRF-TOKEN', this.jwt);
    cookie.save('user', response.data.user);
  }

  onSignupFail(response) {
    toastr.error(response.data.message);
  }
}

export default alt.createStore(AuthStore)