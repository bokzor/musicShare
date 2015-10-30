import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.user = {};
    this.user.musics = [];
    this.username = '';
  }

  onGetUserSuccess(data) {
    this.user = data;
  }

  onGetUserFail(err) {
  }

  onGetUsernameConnected(username) {
    this.username = username;
  }
}

export default alt.createStore(ProfileStore);