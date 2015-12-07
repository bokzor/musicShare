import alt from '../alt';
import axios from 'axios';
import GenreData from '../data/GenreData'

class InfiniteActions {
  constructor() {
    this.generateActions(
      'getMusicsSuccess',
      'getMusicsFail',
      'getGenreMusicsSuccess',
      'getGenreMusicsFail'
    );
  }

  async getMusics() {
    NProgress.start();
    try {
      const response = await axios.get('/api/discover');
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
    NProgress.done();
  }



}

export default alt.createActions(InfiniteActions);