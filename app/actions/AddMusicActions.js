import alt from '../alt';
import _ from 'lodash';

var urlSoundcloud = 'http://api.soundcloud.com/resolve?client_id=7220cd79b258ae2f8d427b34d761fb16'

class AddMusicActions {
  constructor() {
    this.generateActions(
        'getSoundcloudSuccess'
    );
  }

  fetchUrl(e){
    let url = e.target.value
    if(url.indexOf('soundcloud.com') > 0){
      let request = `${urlSoundcloud}&url=${url}`;
      $.getJSON(request)
          .done((data) => {
            this.actions.getSoundcloudSuccess(data);
          })
    }
  }

}

export default alt.createActions(AddMusicActions);