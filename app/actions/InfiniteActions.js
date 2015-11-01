import alt from '../alt';
import axios from 'axios';

class InfiniteActions {
  constructor() {
    this.generateActions(
      'getMusicsSuccess',
      'getMusicsFail'
    );
  }

  async getMusics() {
    try {
      const response = await axios.get('/api/discover');
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
  }
}

export default alt.createActions(InfiniteActions);