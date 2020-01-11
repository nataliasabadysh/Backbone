
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
console.log('songs.length', songs.length)
console.log('songs.at(1)', songs.at(1))
// "c2"
console.log('songs.get("c2")', songs.get("c2"))

console.log('songs.get("c2")', songs.remove(songs.at(0)));

console.log('songs.length', songs.length)