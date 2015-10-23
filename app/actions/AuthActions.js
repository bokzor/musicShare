import alt from '../alt'
import axios from 'axios'

class AuthActions {
    constructor() {
        this.generateActions(
            'loginSuccess',
            'loginFail'
        );
    }

    login(state) {
        axios.post('/api/auth', {
            username: state.login.username,
            password: state.login.password
        })
        .then(response => {this.actions.loginSuccess(response)})
        .catch(this.actions.loginFail);
    }

    autoLoginUser(jwt) {

        let savedJwt = localStorage.getItem('jwt');
        if (savedJwt !== jwt) {
            // if the jwt passed in and the jwt in localStorage don't match, then we redirect them to the manual login page to reprompt for password
            // I will explain what RouterContainer is a little bit later
           // RouterContainer.get().transitionTo('/login');
        } else {
            axios.post('/api/checkToken', {
                token: jwt
            })
            .then(response => {this.actions.loginSuccess(response)})
            .catch(this.actions.loginFail);
        }
    }
}

export default alt.createActions(AuthActions);