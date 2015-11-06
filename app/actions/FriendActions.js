import alt from '../alt';
import axios from 'axios';

class FriendActions {
  constructor() {
    this.generateActions(
      'getFriendsListSuccess',
      'getFriendsListFail',
      'getSearchListSuccess',
      'getSearchListFail',
      'updateSearchQuery',
      'addFriend',
      'addFollower',
      'removeFollower'
    );
  }

  async getFriendsList() {
    try {
      const response = await axios.get('/api/friends');
      this.actions.getFriendsListSuccess(response.data);
    }
    catch (err) {
      this.actions.getFriendsListFail(err);
    }
  }

  async getSearchList(username) {
    try {
      const response = await axios.get('/api/userSearch', {
        params: {
          search: username
        }
      });
      this.actions.getSearchListSuccess(response.data);
    }
    catch (err) {
      this.actions.getSearchListFail(err);
    }
  }





}

export default alt.createActions(FriendActions);