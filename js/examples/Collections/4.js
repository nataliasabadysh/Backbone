

// 1.
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1 ", gender: "Jazz", downloadeds: 10}),{ at: 0 })
songs.push(new Song({ title: "Song 2 ", gender: "Jazz", downloadeds: 100}))

songs.push(new Song({ title: "Song 5 ", gender: "Jazz", downloadeds: 600}))
songs.push(new Song({ title: "Song 5 ", gender: "Jazz", downloadeds: 800}))

// returns Array
var jazzSong = songs.where({ title: "Song 2 " })

var firstJazzSong = songs.findWhere({
    gender: "Jazz"
})

var filterSongs = songs.filter(function(song){ // 
    return song.get("downloadeds") > 100;
})


console.log('here +jazzSong +', jazzSong);
console.log('here firstJazzSong ++', firstJazzSong);

console.log('songs ++', songs);

console.log('filterSongs', filterSongs);