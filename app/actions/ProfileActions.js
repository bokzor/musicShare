import alt from '../alt';
import axios from 'axios';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getUserSuccess',
      'getUserFail',
      'getUsernameConnected'
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

export default alt.createActions(ProfileActions);