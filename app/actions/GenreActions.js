import alt from '../alt';
import GenreData from '../data/GenreData'
import axios from 'axios'


class GenreActions {
  constructor() {
    this.generateActions(
      'getMusicsSuccess',
      'getMusicsFail'
    );
  }


  async getGenreMusics(genreId, page) {
    try {
      const genre = GenreData.find(e => e.value == genreId).label;
      const response = await axios.get('/api/genreMusics', {
        params: {
          genre : genre,
          page: page
        }
      });
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
  }

  async getMusics(page=0) {
    try {
      const response = await axios.get('/api/discover/' + page);
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
  }

}

export default alt.createActions(GenreActions);