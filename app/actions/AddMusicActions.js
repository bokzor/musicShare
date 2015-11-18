import alt from '../alt'
import axios from 'axios'
import GenreData from '../data/GenreData'
import utils from '../lib/utils'


var client_youtube = 'AIzaSyCNgsM94-HneaMwxGz25LdzfKUxk_mBeAg';
var client_soundcloud = '7220cd79b258ae2f8d427b34d761fb16';

var urlSoundcloud = 'http://api.soundcloud.com/resolve';
var urlYoutube = 'https://www.googleapis.com/youtube/v3/videos';


class AddMusicActions {
  constructor() {
    this.generateActions(
      'getSoundCloudSuccess',
      'getYoutubeSuccess',
      'getSoundCloudFail',
      'getYoutubeFail',
      'addMusicSuccess',
      'addMusicFail',
      'invalidUrl',
      'getGenresSuccess'
    );
  }

  async addMusic(music) {

    console.log(music);

    // translate id into genre label
    music.genres = GenreData.find(e => e.value == music.genres).label;

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

  // fetch data from the link
  fetchUrl(e) {
    let url = e.target.value;
    var idVideo = '';

    if (url) {
      if (url.indexOf('soundcloud.com') > 0) {
        this.actions.getSoundCloudData(url);
        console.log('soundcloud');
      } else if (idVideo = utils.getIdYoutube(url)) {
        this.actions.getYoutubeData(idVideo);
      }
    }
  }

  async getSoundCloudData(url) {
    try {
      const response = await axios.get(urlSoundcloud, {
        params: {
          url: url,
          client_id: client_soundcloud
        }
      });
      response.data.url = url;
      this.actions.getSoundCloudSuccess(response.data);
    }

    catch (err) {
      this.actions.getSoundCloudFail();
    }
  }

  async getYoutubeData(idVideo) {
    try {
      const response = await axios.get(urlYoutube, {
        params: {
          id: idVideo,
          key: client_youtube,
          part: 'snippet, contentDetails'
        }
      });

      if (response.data.items.length == 0) throw 'No videos found';
      this.actions.getYoutubeSuccess(response.data.items[0]);
    }

    catch (err) {
      this.actions.getYoutubeFail();
    }
  }

}

export default alt.createActions(AddMusicActions);