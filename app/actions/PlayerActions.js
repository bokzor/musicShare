import alt from '../alt';
import axios from 'axios';

import utils from '../lib/utils'


var client_youtube = 'AIzaSyCNgsM94-HneaMwxGz25LdzfKUxk_mBeAg';
var client_soundcloud = '7220cd79b258ae2f8d427b34d761fb16';

var urlSoundcloud = 'http://api.soundcloud.com/resolve';
var urlYoutube = 'https://www.googleapis.com/youtube/v3/videos';

class PlayerActions {
  constructor() {
    this.generateActions(
      'playSuccess',
      'removeFromPlaylist',
      'next',
      'prev'
    );
  }

  play(music) {
    if (music.hostType == 'soundcloud')
      music.stream_url = music.url + '/stream?client_id=' + client_soundcloud;

    this.actions.playSuccess(music);
  }

  addToPlaylist(music) {
    if (music.url.indexOf('soundcloud') > 0)
      music.stream_url = music.url + '/stream?client_id=' + client_soundcloud;

    this.actions.addToPlayListSuccess(music);
  }


}

export default alt.createActions(PlayerActions);