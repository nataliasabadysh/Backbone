// OverRote one of the based class 

// Module Atrebutes 
var Animal = Backbone.Model.extend({
    walk: function(){
        console.log('Animal is waking ... ')
    }
}
);

var Dog = Animal.extend({

walk: function(){
    Animal.prototype.walk.apply(this);
    console.log('Dog is waking ... ')
}
});

var dog = new Dog();
dog.walk();
// Animal is waking ...
// Dog is waking ...



