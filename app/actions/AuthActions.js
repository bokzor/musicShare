import alt from '../alt'
import axios from 'axios'

class AuthActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'loginFail',
      'signupSuccess',
      'signupFail',
      'invalidUsername',
      'invalidEmail',
      'invalidPassword'
    );
  }

  login(state) {
    axios.post('/api/auth', {
        username: state.login.username,
        password: state.login.password
      })
      .then(response => {
        this.actions.loginSuccess(response)
      })
      .catch(response => {
        this.actions.loginFail(response)
      });
  }

  signup(state) {
    axios.post('/api/signup', {
        username: state.signup.username,
        email: state.signup.email,
        password: state.signup.password
      })
      .then(response => {
        this.actions.signupSuccess(response)
      })
      .catch(this.actions.signupFail);
  }

  autoLoginUser(jwt) {

    axios.post('/api/checkToken', {
        token: jwt
      })
      .then(response => {
        this.actions.loginSuccess(response)
      })
      .catch(response => {
        this.actions.loginFail(response)
      });

  }
}

export default alt.createActions(AuthActions);