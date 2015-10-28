import alt from '../alt';
import axios from 'axios';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getUserSuccess',
      'getUserFail'
    );
  }

  async getUser() {
    try {
      const response = await axios.get('/api/profile');
      this.actions.getUserSuccess(response.data);
    }
    catch(err) {
      this.actions.getUserFail(err);
    }
  }
}

export default alt.createActions(ProfileActions);