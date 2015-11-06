import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.data = {};
    this.data.user = {};
    this.data.musics = [];
    this.username = '';
    this.picture = {};
    this.profilePreview = '';
    this.coverPreview = '';
    this.isProfilePicture = false;
    this.isCoverPicture = true;
    this.textPicture = 'cover';
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

  onAddProfilePicture(pictures) {
    this.profilePreview = '';
    this.coverPreview = '';
    this.picture = pictures[0];
    this.profilePreview = this.picture.preview;
  }

  onAddCoverPicture(pictures) {
    this.profilePreview = '';
    this.coverPreview = '';
    this.picture = pictures[0];
    this.coverPreview = this.picture.preview;
  }
}

export default alt.createStore(ProfileStore);