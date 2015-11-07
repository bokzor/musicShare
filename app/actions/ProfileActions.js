import alt from '../alt';
import axios from 'axios';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getDataSuccess',
      'getDataFail',
      'getUsernameConnected',
      'addProfilePicture',
      'addCoverPicture',
      'uploadPictureSuccess'
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

  async uploadPicture(picture, id, text, extension) {
    let filename = id + '_' + text + extension;
    function a() {
      return axios.post('/api/uploadPictureOnAWS', {
        filename: filename,
        filetype: picture.type
      })
      .then(function (result) {
        var signedUrl = result.data;
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
    function b() {
      return axios.put('/api/updatePicture', {
        id: id,
        filename: filename,
        text: text
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
    }

    axios.all([a(), b()])
    .then(axios.spread(function (resA, resB) {
      console.log('New ' + text + ' picture was added for user ' + id);
    }));
  }

}

export default alt.createActions(ProfileActions);