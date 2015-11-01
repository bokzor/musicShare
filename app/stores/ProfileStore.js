import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.data = {};
    this.data.user = {};
    this.data.musics = [];
    this.username = '';
  }

  onGetDataSuccess(data) {
    this.data = data;
  }

  onGetDataFail(err) {
  }

  onGetUsernameConnected(username) {
    this.username = username;
  }
}

export default alt.createStore(ProfileStore);