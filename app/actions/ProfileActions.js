import alt from '../alt';
import axios from 'axios';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getDataSuccess',
      'getDataFail',
      'getUsernameConnected'
    );
  }

  async getData(username) {
    try {
      const response = await axios.get('/api/profile/' + username);
      this.actions.getDataSuccess(response.data);
    }
    catch(err) {
      this.actions.getDataFail(err);
    }
  }
}

export default alt.createActions(ProfileActions);