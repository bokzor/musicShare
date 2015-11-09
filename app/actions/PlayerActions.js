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
      'playSoundCloud'
    );


  }

  play(url) {
    if (url.indexOf('soundcloud.com') > 0) {
      this.actions.playSoundCloud(url + '/stream?client_id=' + client_soundcloud);

    } else if (idVideo = utils.getIdYoutube(url)) {
      //this.actions.playYoutube(idVideo);
    }
  }



}

export default alt.createActions(PlayerActions);