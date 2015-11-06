import alt from '../alt'
import FriendActions from '../actions/FriendActions'
import {difference} from 'lodash'

class FriendStore {
  constructor() {
    this.bindActions(FriendActions)
    this.friends = [];
    this.searchQuery = '';
    this.searchList = [];
  }

  onGetFriendsListSuccess(data) {
    this.friends = data.following;
  }
  onGetFriendListFail() {
    console.log(err);
  }
  onGetSearchListFail() {
    console.log(err);
  }

  onGetSearchListSuccess(data) {
    difference(data, this.friends);
    this.searchList = data;
  }

  onUpdateSearchQuery(data){
    this.searchQuery = data;
  }

  onAddFollower(user) {
    this.friends.push(user);
  }

  onRemoveFollower(user) {
    this.friends = this.friends
      .filter((el) => {
        return el.username !== user.username;
      });
  }



}

export default alt.createStore(FriendStore)