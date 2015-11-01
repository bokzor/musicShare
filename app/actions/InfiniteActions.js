import alt from '../alt';
import axios from 'axios';

class InfiniteActions {
  constructor() {
    this.generateActions(

    );
  }

  async getUser(username) {
    try {
      const response = await axios.get('/api/profile/' + username);
      this.actions.getUserSuccess(response.data);
    }
    catch(err) {
      this.actions.getUserFail(err);
    }
  }
}

export default alt.createActions(InfiniteActions);