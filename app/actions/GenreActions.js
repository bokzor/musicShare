import alt from '../alt';
import GenreData from '../data/GenreData'

class GenreActions {
    constructor() {
        this.generateActions(
            'getGenresSuccess'
        );
    }

    getGenres() {
        this.actions.getGenresSuccess(GenreData);
    }
}

export default alt.createActions(GenreActions);