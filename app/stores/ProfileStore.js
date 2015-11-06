import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.data = {};
    this.data.user = {};
    this.data.musics = [];
    this.username = '';
    this.picturePreview = {};
    this.isProfilePicture = true;
    this.isCoverPicture = false;
    this.textPicture = 'Change your cover picture';
  }

  onGetDataSuccess(data) {
    this.data = data;
    this.followed = data.followed;
    this.followedByCount = data.user.followedByCount;
  }

  onGetDataFail(err) {
  }

  onGetUsernameConnected(username) {
    this.username = username;
  }
}

export default alt.createStore(ProfileStore);