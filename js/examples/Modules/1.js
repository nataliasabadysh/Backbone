
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    initialize:function(){
        console.log('Hello');
    }
}); // returns constracture functions 

// Instants of the Modal 

var song =  new Song();
song.set('title', "Title for this Song ");

song.set({
    artist:'Angelina',
    publishYer: 1992,
})