import alt from '../alt';
import AddMusicActions from '../actions/AddMusicActions';

class AddMusicStore {
  constructor() {
    this.bindActions(AddMusicActions);
    this.music = {};
    this.isLoading = false;
    this.urlValidationState = '';
    this.urlHelpBlock = '';
  }

  onGetSoundcloudSuccess(data) {
    this.music.artist = data.user.username,
    this.music.title = data.title,
    this.music.duration = data.duration,
    this.music.genre = data.genre,
    this.music.image = data.artwork_url
  }

  onInvalidUrl() {
    this.urlValidationState = 'parsley-validated parsley-error';
    this.urlHelpBlock = 'Please enter a url.';
  }
}

export default alt.createStore(AddMusicStore);