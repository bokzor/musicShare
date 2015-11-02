import alt from '../alt'
import SearchActions from '../actions/SearchActions'

class SearchStore {
  constructor() {
    this.bindActions(SearchActions);
    this.musics = [];
    this.searchQuery = '';
  }

  onGetSearchMusicSuccess(data) {
    this.musics = data;
  }

  onGetSearchMusicFail() {
    console.log(err);
  }

  onUpdateSearchQuery(search){
    this.searchQuery = search;
  }
}

export default alt.createStore(SearchStore)