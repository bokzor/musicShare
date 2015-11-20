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
    this.currentMusicIndex = -1;
  }

  onPlaySuccess(music){
    var index = this.musics.map(function(e) { return e._id; }).indexOf(music._id);
    if(index > -1) {
      this.currentMusicIndex = index;
    } else {
      this.musics.push(music);
      this.currentMusicIndex++;
    }

    this.isPlaying = true;
  }

  addToPlaylist(music) {
    this.musics.push(music);
  }

  onRemoveFromPlaylist(music) {
    var index = this.musics.map(function(e) { return e._id; }).indexOf(music._id);
    this.musics.splice(index, 1);
    if(this.musics.length == 0)
      this.isPlaying = false;
    else {
      this.next();
    }
  }

  onNext(){
    if(this.currentMusicIndex + 1 == this.musics.length) {
      this.currentMusicIndex = 0;
    } else {
      this.currentMusicIndex++;
    }
  }

  onPrev() {
    this.currentMusicIndex--;
  }

}

export default alt.createStore(PlayerStore);