// 1.

var song = new Songs();

songs.fetch({
    data:{
        page: 2
    },

    success: function(){},
    error: function(){}
})

// Get /api/songs?page=2
