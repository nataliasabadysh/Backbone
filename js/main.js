

// 1.
var person = {
    name: "Mosh",

    walk: function(){
        this.trigger("waking", {
            speed: 1,
            startTime: "08:00"
        }); 
    }
}

_.extend(person, Backbone.Events);

// To Subscribe to this Event 
person.on("waking", function(e){
    console.log("Person is waking");
    console.log('Event Art', e)
});

// person.once("waking", function(e){
//     console.log("Person is waking");
//     console.log('Event Art', e)
// });

// Unsibscribe on Events 
// person.off('waking')
person.walk();


