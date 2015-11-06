import alt from '../alt';
import axios from 'axios';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getDataSuccess',
      'getDataFail',
      'getUsernameConnected',
      'addProfilePicture',
      'addCoverPicture'
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

  async follow(username) {
    try {
      const response = await axios.post('/api/follow', {
        username: username
      });
      this.actions.followSuccess(response.data);
    }
    catch(err) {
      this.actions.followFail(err);
    }
  }

  async unfollow(username) {
    try {
      const response = await axios.post('/api/unfollow', {
        username: username
      });
      this.actions.UnfollowSuccess(response.data);
    }
    catch(err) {
      this.actions.UnfollowFail(err);
    }
  }


}

export default alt.createActions(ProfileActions);