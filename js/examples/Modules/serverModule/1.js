
// 1.
var Song = Backbone.Model.extend({
    urlRoot:"/api/songs"
});

// 2.
var song = Backbone.Model.extend({ id: 1 });
song.fetch();  // results  Get /api/songs/1

// 3.

var song = Backbone.Model.extend({ id: 1 });
song.fetch(); // Get /api/songs/1

song.set('title', "newTitle");
song.save();

// 4.

var song = new Song();
song.set('title', "newTitle");
song.save();

// POST request to the Songs collection

// 5.

var song = new Song({ id: 1 });
song.distroy();

// 6.

var Song = Backbone.Model.extend({
    idAttribute: "songID"
});
var song = new Song({ songID: 1 })



// ____ 7.1  with fetch GET

var song = new Song();

song.fetch({
    success: function(){},
    error: function(){}
})

// ____ 7. 2 with destroy  DELETE 

song.destroy({
    success: function(){},
    error: function(){}
})

// ___ 7.3    POST/PUT 

song.save({}, {
    success: function(){},
    error: function(){}
})
