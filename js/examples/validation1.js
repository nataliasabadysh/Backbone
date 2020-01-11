// Module Atrebutes + Validation 

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

console.log(song.isValid()); // false 

console.log(song.validationError); // false 
console.log(song.isValid()); // false 