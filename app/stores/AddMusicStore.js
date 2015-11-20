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
    this.urlIsValid = false;
  }

  onGetSoundCloudSuccess(data) {
    this.urlIsValid = true;
    [this.music.artist, this.music.title] = data.title.split('-', 2);
    this.music.name = data.title;
    // data.duration is in ms
    this.music.duration = data.duration * 1000; // in seconds
    this.music.img = data.artwork_url;
    this.music.url = data.uri;
    this.music.isMix = data.duration > 1200000;
    this.music.hostType = 'soundcloud';
  }

  onGetYoutubeSuccess(data){
    this.urlIsValid = true;
    [this.music.artist, this.music.title] = data.snippet.title.split('-', 2);
    this.music.name = data.snippet.title;
    this.music.img = data.snippet.thumbnails.standard.url;
    this.music.duration = moment.duration(data.contentDetails.duration).asMilliseconds();
    this.music.url = 'https://youtu.be/v/' + data.id;
    this.music.isMix = data.duration > 1200000;
    this.music.hostType = 'youtube';
  }

  onGetSoundCloudFail(){
    alt.recycle(this);
  }

  onGetYoutubeFail(){
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