import alt from '../alt';
import DiscoverActions from '../actions/DiscoverActions';

class DiscoverStore {
  constructor() {
    this.bindActions(DiscoverActions);
    this.musics = [];
  }

  onGetMusicsSuccess(data) {
    this.musics = data;
  }

}

export default alt.createStore(DiscoverStore);

//# sourceMappingURL=DiscoverStore-compiled.js.map