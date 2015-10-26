var user1, user2, user3, music1, music2;
music1 = new Music({
    name: 'test1'
});

music2 = new Music({
    name: 'test1'
});

user1 = new User({
    nickname: 'Adri1',
    musics: [music1, music2],
    followedBy: [user2, user3],
    following: [user3]
});

user2 = new User({
    nickname: 'Adri2',
    musics: [music1],
    followedBy: [],
    following: [user1, user3]
});

user3 = new User({
    nickname: 'Adri3',
    musics: [music1],
    followedBy: [user1, user2],
    following: [user1]
});

user1.save(function(err) {
    console.log(err);
});
user2.save(function(err) {
    console.log(err);
});
user3.save(function(err) {
    console.log(err);
});







