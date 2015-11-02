import alt from '../alt'
import GenreActions from '../actions/GenreActions'

class GenreStore {
  constructor() {
    this.bindActions(GenreActions);
    this.genres = [];
    this.musics = [];
  }

  onGetGenresSuccess(data) {
    this.genres = data;
  }

  onGetMusicsSuccess(data){
    this.musics = data;
  }

  onGetMusicsFail(err){
    console.log(err);
  }
}

export default alt.createStore(GenreStore)