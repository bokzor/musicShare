var genres = [{id : 1, name: 'Deep House'}, {id:2, name : 'Drum & Bass'}, {id:3, name: 'Dubstep'}, {id: 4, name: 'EDM'}, {id:5, name: 'Electronic'},  {id: 6, name: 'Techno'}, {id:7, name : 'Trance'}, {id:8, name:'Tech-house'}]

var GenreData = {
    fetch: function () {
        // returning a Promise because that is what fetch does.
        return new Promise(function (resolve, reject) {
            // simulate an asynchronous action where data is fetched on
            // a remote server somewhere.
            setTimeout(function () {
                // resolve with some mock data
                resolve(genres);
            }, 0);
        });
    }
};

export default GenreData;