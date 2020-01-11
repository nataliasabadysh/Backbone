// Module Atrebutes 
var Song = Backbone.Model.extend({
    defaults:{
        genra: 'female'
    },
    validate: function(attrs){
        if(!attrs.title){
                return "Title is requered ❌ "
        }
    }
}
);
var song =  new Song();

song.set("title", "We are here");

console.log(song.isValid());
