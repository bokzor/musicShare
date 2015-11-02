import alt from '../alt';
import axios from 'axios';

class SearchActions {
  constructor() {
    this.generateActions(
      'getSearchMusicSuccess',
      'getSearchMusicFail',
      'updateSearchQuery'
    );
  }

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

export default alt.createActions(SearchActions);