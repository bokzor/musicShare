import alt from '../alt'
import GenreActions from '../actions/GenreActions'

class GenreStore {
    constructor() {
        this.bindActions(GenreActions)
        this.genres = []
    }

    onGetGenresSuccess(data) {
        console.log(data)
        this.genres = data
    }
}

export default alt.createStore(GenreStore)