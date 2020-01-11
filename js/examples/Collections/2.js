
// 1.
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({
        title: "Song 1",
    }),
    new Song({
        title: "Song 2",
    }),
])
// 2. ADD 
songs.add(new Song({ title: "Song 4 "}));

songs.add(new Song({ title: "Song  will be added from beging of list "}), {at: 0});
songs.push(new Song({ title: "Song  will be added from beging of list "}));
console.log('songs', songs)

