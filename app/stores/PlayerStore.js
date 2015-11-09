import alt from '../alt';
import PlayerActions from '../actions/PlayerActions';

class PlayerStore {
  constructor() {
    this.bindActions(PlayerActions);
    this.musics = [];
    this.stream_url = '';
    this.position = 0;
    this.duration = 0;

  }

  onPlaySoundCloud(url){
    this.stream_url = url;
  }

}

export default alt.createStore(PlayerStore);