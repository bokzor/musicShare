import alt from '../alt';
import PlayerActions from '../actions/PlayerActions';

class PlayerStore {
  constructor() {
    this.bindActions(PlayerActions);
    this.musics = [];
    this.stream_url = '';
    this.position = 0;
    this.progress = 0;
    this.duration = 0;
    this.volume = 50;
    this.isLoading= false;
    this.isPlaying = false;
    this.currentSongIndex = -1;
  }

  onPlaySuccess(music){

    var index = this.musics.map(function(e) { return e._id; }).indexOf(music._id);
    if(index > -1) {
      this.currentSongIndex = index;
    } else {
      this.musics.push(music);
      this.currentSongIndex++;
    }

    this.isPlaying = true;
  }

  addToPlaylist(music) {
    this.musics.push(music);
  }

  onRemoveFromPlaylist(index) {
    this.musics.splice(index, 1);
  }

  onNext(){
    if(this.currentSongIndex + 1 == this.musics.length) {
      this.currentSongIndex = 0;
    } else {
      this.currentSongIndex++;
    }
  }

  onPrev() {
    this.currentSongIndex--;
  }

}

export default alt.createStore(PlayerStore);