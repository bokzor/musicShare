import alt from '../alt';
import axios from 'axios';

class HeaderActions {
  constructor() {
    this.generateActions(
      'getSearchMusicSuccess',
      'getSearchMusicFail',
      'updateSearchQuery'
    );
  }

  /*async getSearchMusic(search) {
    console.log('search : ' + search);
  }*/

  async getSearchMusic(search) {
    try {
      const response = await axios.get('/api/musicSearch', {
        params: {
          search: search
        }
      });
      this.actions.getSearchMusicSuccess(response.data);
    }
    catch (err) {
      this.actions.getSearchMusicFail(err);
    }
  }
}

export default alt.createActions(HeaderActions);