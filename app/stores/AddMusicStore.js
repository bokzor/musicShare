import alt from '../alt'
import AddMusicActions from '../actions/AddMusicActions'
import GenreData from '../data/GenreData'
import moment from 'moment'

class AddMusicStore {
  constructor() {
    this.bindActions(AddMusicActions);
    this.music = {};
    this.isLoading = false;
    this.urlValidationState = '';
    this.urlHelpBlock = '';
    this.genres = GenreData;
    this.canSubmit = false;
  }

  onGetSoundcloudSuccess(data) {
    [this.music.artist, this.music.title] = data.title.split('-', 2);
    this.music.completeName = data.title;
    this.music.duration = data.duration;
    this.music.image = data.artwork_url;
    this.music.url = data.url;
    this.music.isMix = data.duration > 1200000;
    this.music.hostType = 'soundcloud';
  }

  onGetYoutubeSuccess(data){
    [this.music.artist, this.music.title] = data.snippet.title.split('-', 2);
    this.music.completeName = data.snippet.title;
    this.music.image = data.snippet.thumbnails.default.url;
    this.music.duration = moment.duration(data.contentDetails.duration).asMilliseconds();
    this.music.url = 'https://youtu.be/v/' + data.id;
    this.music.isMix = data.duration > 1200000;
    this.music.hostType = 'youtube';
  }

  onGetSoundcloudFail(){
    alt.recycle(this);
  }

  onAddMusicSuccess(){
    alt.recycle(this);
  }

  onInvalidUrl() {
    this.urlValidationState = 'parsley-validated parsley-error';
    this.urlHelpBlock = 'Please enter a url.';
  }
}

export default alt.createStore(AddMusicStore);