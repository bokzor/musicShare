import alt from '../alt'
import axios from 'axios'
import GenreData from '../data/GenreData'

var client_youtube = 'AIzaSyCNgsM94-HneaMwxGz25LdzfKUxk_mBeAg';
var client_soundcloud = '7220cd79b258ae2f8d427b34d761fb16';
//var client_soundcloud = '02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea';

var urlSoundcloud = 'http://api.soundcloud.com/resolve';
var urlYoutube = 'https://www.googleapis.com/youtube/v3/videos';

var regexYoutube = /(youtu\.be\/|[?&]v=)([^&]+)/;

class AddMusicActions {
  constructor() {
    this.generateActions(
      'getSoundcloudSuccess',
      'addMusicSuccess',
      'addMusicFail',
      'invalidUrl',
      'getGenresSuccess'
    );
  }

  async addMusic(music) {

    music.genres = GenreData.find(e => e.value == music.genres).label;

    //convert array of id to array of value

    //music.genres = music.genres.split(',').map(n =>
    //  GenreData.find(e => e.value == n).label
    //);
    //music.tags = music.tags.split(',');

    try {
      const response = await axios.post('/api/addMusic', {
        music: music
      });
      this.actions.addMusicSuccess(response.data);
      toastr.success(response.data.message);

    }
    catch (err) {
      this.actions.addMusicFail(err);
    }
  }

  async fetchUrl(e) {
    let url = e.target.value;

    if (url) {
      if (url.indexOf('soundcloud.com') > 0) {
        try {
          const response = await axios.get(urlSoundcloud, {
            params: {
              url: url,
              client_id: client_soundcloud
            }
          });
          $('#div-url-result').slideDown();
          $('#text-form-add-music').text('Check information and save it!');
          response.data.url = url;
          this.actions.getSoundcloudSuccess(response.data);
        }
        catch (err) {
          $('#div-url-result').slideUp();
          $('#text-form-add-music').text('Url seems incorrect!');
        }
      } else {
        var idVideo = url.match(regexYoutube)[2];
        try {
          const response = await axios.get(urlYoutube, {
            params: {
              id: idVideo,
              key: client_youtube
            }
          });
          this.actions.getSoundcloudSuccess(response.data);
        }
        catch (err) {
          console.log('error', err);
        }
      }
    } else {
      $('#div-url-result').slideUp();
      $('#text-form-add-music').text('Add a music to my profile!');
    }
  }
}

export default alt.createActions(AddMusicActions);