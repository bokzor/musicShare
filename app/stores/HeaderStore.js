import alt from '../alt'
import HeaderActions from '../actions/HeaderActions'
import {difference} from 'lodash'

class HeaderStore {
  constructor() {
    this.bindActions(HeaderActions);
    this.searchMusic = [];
    this.searchQuery = '';
  }

  onGetSearchMusicSuccess(data) {
    difference(data, this.friends);
    this.searchMusic = data;
  }

  onGetSearchMusicFail() {
    console.log(err);
  }

  onUpdateSearchQuery(data){
    this.searchQuery = data;
  }
}

export default alt.createStore(HeaderStore)