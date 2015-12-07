import alt from '../alt'
import axios from 'axios'

class AuthActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'loginFail',
      'signupSuccess',
      'signupFail'
    );
  }

  async login(data) {
    NProgress.start();
    try {
      const response = await axios.post('/api/auth', {
        email: data.email,
        password: data.password
      });
      this.actions.loginSuccess(response)
    } catch (err) {
      this.actions.loginFail(err)
    }
    NProgress.done();
  }

  async signup(data) {
    NProgress.start();
    try {
      const response = await axios.post('/api/signup', {
        username: data.username,
        email: data.email,
        password: data.password
      });

      this.actions.signupSuccess(response);
    } catch (err) {
      this.actions.signupFail(err);
    }
    NProgress.done();
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