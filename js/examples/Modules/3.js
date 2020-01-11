// Module Atrebutes 
var Song = Backbone.Model.extend({
    defaults:{
        genra: 'female'
    }
}
); // returns constracture functions 
var song =  new Song();
song.set({
title: 'Title for Song',
artist:'Angelina',
publishYer: 1992,
})

console.log('convert atr', song.toJSON())


var newSong = new Song({
title: 'Title of new song'
})

console.log('convert newSong', newSong.toJSON())


song.get('artist'); // to get 
newSong.unset('title'); // remove
song.clear(); // remove all atr 

// to check on atr if it is there 
song.has('title');
