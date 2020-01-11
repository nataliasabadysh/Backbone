// 1


// Module Atrebutes 
var Animal = Backbone.Model.extend({
    walk: function(){
        console.log('Animal is waking ... ')
    }
});

var Dog = Animal.extend();
var dog = new Dog();
dog.walk();

// Animal is waking ...


// 2

// Module Atrebutes 
var Animal = Backbone.Model.extend({
    walk: function(){
        console.log('Animal is waking ... ')
    }
}
);

var Dog = Animal.extend({
walk: function(){
    console.log('Dog is waking ... ')
}
});

var dog = new Dog();

dog.walk();
// Dog is waking ...