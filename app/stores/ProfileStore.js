import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.user = {};
    this.user.musics = [];
  }

  onGetUserSuccess(data) {
    this.user = data;
  }

  onGetUserFail(err) {
  }
}

export default alt.createStore(ProfileStore);