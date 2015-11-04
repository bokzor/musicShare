import alt from '../alt';
import DiscoverActions from '../actions/DiscoverActions';

class DiscoverStore {
  constructor() {
    this.bindActions(DiscoverActions);
    this.musics = [];
    this.isLoading = true;
    this.page = 0;

  }

  onGetMusicsSuccess(data){
    this.page++;
    this.musics = this.musics.concat(data);
    this.isLoading = false;
  }

}

export default alt.createStore(DiscoverStore);