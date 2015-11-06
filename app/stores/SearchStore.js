import alt from '../alt'
import SearchActions from '../actions/SearchActions'

class SearchStore {
  constructor() {
    this.bindActions(SearchActions);
    this.musics = [];
    this.searchQuery = '';
    this.isLoading = true;
    this.page = 0;
  }

  onGetSearchMusicSuccess(data) {
    this.isLoading = false;
    this.page++;
    this.musics = this.musics.concat(data);
  }

  onGetSearchMusicFail() {
    console.log(err);
  }

  onUpdateSearchQuery(search){
    this.searchQuery = search;
  }
}

export default alt.createStore(SearchStore)