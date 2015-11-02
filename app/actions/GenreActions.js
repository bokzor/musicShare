import alt from '../alt';
import GenreData from '../data/GenreData'
import axios from 'axios'


class GenreActions {
  constructor() {
    this.generateActions(
      'getGenresSuccess',
      'getMusicsSuccess',
      'getMusicsFail'
    );
  }

  getGenres() {
    this.actions.getGenresSuccess(GenreData);
  }

  async getGenreMusics(genreId) {
    try {
      const genre = GenreData.find(e => e.value == genreId).label;
      const response = await axios.get('/api/genreMusics', {
        params: {
          genre : genre
        }
      });
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
  }

  async getMusics() {
    try {
      const response = await axios.get('/api/discover');
      this.actions.getMusicsSuccess(response.data);
    }
    catch(err) {
      this.actions.getMusicsFail(err);
    }
  }

}

export default alt.createActions(GenreActions);