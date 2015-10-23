import alt from '../alt'
import AuthActions from '../actions/AuthActions'

class AuthStore {
    constructor() {
        this.bindActions(AuthActions);
        this.login = {};
        this.jwt = '';
    }

    onLoginSuccess(response) {
        this.jwt = response.data.token;
        this.currentUser = response.data.user;
        console.log('success login');
    }

    onLoginFail(){
        console.log('fail login');
    }


}

export default alt.createStore(AuthStore)