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
    this.followedByCount = 0;
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

  onFollowSuccess(data){
    this.followedByCount = data.followedByCount;
    this.followed = true;
  }

  onFollowFail(err){
    console.log(err);
  }

  onGetUsernameConnected(username) {
    this.username = username;
  }
}

export default alt.createStore(ProfileStore);