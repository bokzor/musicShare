import alt from '../alt';
import AddMusicActions from '../actions/AddMusicActions';

class AddMusicStore {
    constructor() {
        this.bindActions(AddMusicActions);
        this.music = {};
        this.isLoading = false
    }
    onGetSoundcloudSuccess(data) {
        this.music.image = data.artwork_url
    }
}

export default alt.createStore(AddMusicStore);