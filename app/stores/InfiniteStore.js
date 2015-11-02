import alt from '../alt';
import InfiniteActions from '../actions/InfiniteActions';

class InfiniteStore {
  constructor() {
    this.bindActions(InfiniteActions);
    this.musics = [];

  }

  onGetMusicsSuccess(data){
    this.musics = data;
  }

}

export default alt.createStore(InfiniteStore);