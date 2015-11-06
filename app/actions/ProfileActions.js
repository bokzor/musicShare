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

  async uploadProfilePicture(picture) {
    /*console.log('uploadProfilePicture picture: ', picture
      + ' picture.name: ' + picture.name
      + ' picture.type: ' + picture.type);*/
    axios.post('/api/uploadProfilePictureOnAWS', {
      filename: picture.name,
      filetype: picture.type
    })
    .then(function (result) {
      console.log('result: ', result);
      var signedUrl = result.data;
      console.log('signedUrl: ', signedUrl);
      var options = {
        headers: {
          'Content-Type': picture.type
        }
      };

      return axios.put(signedUrl, picture, options);
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(err);
    });
  }

}

export default alt.createActions(ProfileActions);