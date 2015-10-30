import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.username = '';
  }

  onGetUserSuccess(data) {
    this.username = data.username;
  }

  onGetUserFail(err) {
  }
}

export default alt.createStore(AppStore);