import alt from '../alt'
import SearchActions from '../actions/SearchActions'
import {difference} from 'lodash'

class SearchStore {
  constructor() {
    this.bindActions(SearchActions);
    this.searchMusic = [];
    this.searchQuery = '';
  }

  onGetSearchMusicSuccess(data) {
    this.searchMusic = [];
    difference(data, this.friends);
    this.searchMusic = data;
  }

  onGetSearchMusicFail() {
    console.log(err);
  }

  onUpdateSearchQuery(search){
    this.searchQuery = search;
  }
}

export default alt.createStore(SearchStore)