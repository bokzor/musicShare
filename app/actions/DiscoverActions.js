import alt from '../alt';
import axios from 'axios';

class DiscoverActions {
  constructor() {
    this.generateActions(
      'getMusicsSuccess',
      'getMusicsFail'
    );
  }

  async getMusics(page=0) {
    try {
      const response = await axios.get('/api/discover/' + page);
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
  }



}

export default alt.createActions(DiscoverActions);