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

  async login(state) {
    try {
      const response = await axios.post('/api/auth', {
        username: state.login.username,
        password: state.login.password
      });
      this.actions.loginSuccess(response)
    } catch (err) {
      this.actions.loginFail(response)
    }
  }

  async signup(state) {
    try {
      const response = await axios.post('/api/signup', {
        username: state.signup.username,
        email: state.signup.email,
        password: state.signup.password
      });
      this.actions.signupSuccess(response)
    } catch (err) {
      this.actions.signupFail(err);
    }
  }

  async autoLoginUser(jwt) {
    try {
      const response = await axios.post('/api/checkToken', {
        token: jwt
      });
      this.actions.loginSuccess(response)
    }
    catch (err) {
      this.actions.loginFail(err)
    }

  }
}

export default alt.createActions(AuthActions);