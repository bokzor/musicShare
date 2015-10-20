import alt from '../alt';
import GenreData from '../data/GenreData'

class GenreActions {
    constructor() {
        this.generateActions(
            'getGenresSuccess'
        );
    }

    getGenres() {
        this.actions.getGenresSuccess(GenreData)
     //   GenreData.fetch()
     //       .then((genres) => {
     //       this.actions.getGenresSuccess(genres)
     //   })

    }
}

export default alt.createActions(GenreActions);