import alt from '../alt';
import GenreData from '../data/GenreData'

class GenreActions {
    constructor() {
        this.generateActions(
            'getGenresSuccess'
        );
    }

    getGenres() {
        console.log(GenreData);
        GenreData.fetch()
            .then((genres) => {
            console.log('getgenre')
            this.actions.getGenresSuccess(genres)
        })
    }
}

export default alt.createActions(GenreActions);