import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.user = {};
    this.musics = [];
    this.username = '';
    this.followed = false;
    this.isLoading = true;
    this.page = 1;
  }

  onGetDataSuccess(data) {
    this.isLoading = false;
    this.user = data.user;
    this.musics = data.musics;
    this.followed = data.followed;
    this.followedByCount = data.user.followedByCount;
  }

  onGetMoreMusicsSuccess(musics){
    this.page++;
    this.musics = this.musics.concat(musics);
  }

  onGetDataFail(err) {
    this.isLoading = false;
  }

  onGetUsernameConnected(username) {
    this.username = username;
  }
}

export default alt.createStore(ProfileStore);