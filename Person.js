

class Person {
    constructor(name) {
        this.name = name;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag);

    }
}



// class Crew extends Person {
//     constructor(name,status) {
//         super(name);
//         this.status = status;
//     }
// }
//console.log(instanceof(Passenger))
module.exports = Person 