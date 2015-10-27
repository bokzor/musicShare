import alt from '../alt'
import AuthActions from '../actions/AuthActions'
import cookie from 'react-cookie';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.login = {};
    this.jwt = '';
    this.canSubmit = false;
  }


  onLoginSuccess(response) {
    this.jwt = response.data.token;
    this.user = response.data.user;
    toastr.success(response.data.message);
    cookie.save('XSRF-TOKEN', this.jwt);
  }

  onLoginFail(response) {
    console.log(response)
    toastr.error(response.data.message);
  }

  onSignupSuccess(response) {
    this.jwt = response.data.token;
    this.user = response.data.user;
    toastr.success(response.data.message);
    cookie.save('XSRF-TOKEN', this.jwt);

  }

  onSignupFail(response) {
    toastr.error(response.data.message);
  }
}

export default alt.createStore(AuthStore)