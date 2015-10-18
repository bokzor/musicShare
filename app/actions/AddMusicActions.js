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
      'getSoundcloudSuccess',
      'addMusicSuccess',
      'addMusicFail',
      'invalidUrl'
    );
  }

  addMusic(complete) {
    axios.post('/addMusic', {
      complete: complete
    })
    .then(function (response) {
      this.actions.addMusicSuccess(response.data);
    })
    .catch(function (response) {
      this.actions.addMusicFail(response.data);
    });
  }

  fetchUrl(e) {
    let url = e.target.value
    if (url) {
      if (url.indexOf('soundcloud.com') > 0) {
        axios.get(urlSoundcloud, {
          params: {
            url: url,
            client_id: client_soundcloud
          }
        })
          .then((response) => {
            console.log(response);
            $('#div-url-result').slideDown();
            $('#text-form-add-music').text('Check information and save it!');
            this.actions.getSoundcloudSuccess(response.data);
          })
          .catch(function (response) {
            $('#div-url-result').slideUp();
            $('#text-form-add-music').text('Url seems incorrect!');
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
          .catch(function (response) {
            console.log(response);
          });
      }
    } else {
      $('#div-url-result').slideUp();
      $('#text-form-add-music').text('Add a music to my profile!');
      console.log('EMPTY URL');
    }
  }
}

export default alt.createActions(AddMusicActions);