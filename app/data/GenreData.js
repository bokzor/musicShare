var genres = ['Deep House', 'Drum & Bass', 'Dubstep', 'EDM', 'Electronic',  'Techno', 'Trance', 'Tech-house']


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