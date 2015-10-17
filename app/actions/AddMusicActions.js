import alt from '../alt';
import axios from 'axios';

var client_youtube = 'AIzaSyCNgsM94-HneaMwxGz25LdzfKUxk_mBeAg';
//var client_soundcloud = '7220cd79b258ae2f8d427b34d761fb16';
var client_soundcloud = '02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea';

var urlSoundcloud = 'http://api.soundcloud.com/resolve';
var urlYoutube = 'https://www.googleapis.com/youtube/v3/videos';

var regexYoutube = /(youtu\.be\/|[?&]v=)([^&]+)/;

class AddMusicActions {
  constructor() {
    this.generateActions(
      'getSoundcloudSuccess'
    );
  }

  fetchUrl(e) {
    let url = e.target.value
    if (url.indexOf('soundcloud.com') > 0) {
      axios.get(urlSoundcloud, {
        params: {
          url: url,
          client_id: client_soundcloud
        }
      })
      .then((response) => {
        console.log(response);
        this.actions.getSoundcloudSuccess(response.data);
      })
      .catch(function(response) {
        console.log(response);
      });
    } else {
      var idVideo = url.match(regexYoutube)[2];
      axios.get(urlYoutube, {
        params: {
          id: idVideo,
          key: client_youtube
        }
      })
      .then((response) => {
        console.log(response);
        this.actions.getSoundcloudSuccess(response.data);
      })
      .catch(function(response) {
        console.log(response);
      });
    }
  }
}

export default alt.createActions(AddMusicActions);