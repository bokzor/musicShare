import alt from '../alt';
import InfiniteActions from '../actions/InfiniteActions';

class InfiniteStore {
  constructor() {
    this.bindActions(InfiniteActions);

  }

}

export default alt.createStore(InfiniteStore);