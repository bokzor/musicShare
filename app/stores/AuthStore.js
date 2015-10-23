import alt from '../alt'
import AuthActions from '../actions/AuthActions'

class AuthStore {
    constructor() {
        this.bindActions(AuthActions)
        this.jwt = '';
    }

    onLoginSuccess(response) {
        this.jwt = response.data.token;
        this.currentUser = response.data.user;
    }

    onLoginFail(){
        console.log('fail login');
    }


}

export default alt.createStore(AuthStore)