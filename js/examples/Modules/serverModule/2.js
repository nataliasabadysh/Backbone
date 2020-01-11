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
