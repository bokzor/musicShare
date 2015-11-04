import alt from '../alt'
import GenreActions from '../actions/GenreActions'

class GenreStore {
  constructor() {
    this.bindActions(GenreActions);
    this.genres = [];
    this.musics = [];
    this.isLoading = true;
    this.page = 0;
  }

  onGetMusicsSuccess(data) {
    this.page++;
    this.musics = this.musics.concat(data);
    this.isLoading = false;
  }

  onGetMusicsFail(err) {
    console.log(err);
  }
}

export default alt.createStore(GenreStore)