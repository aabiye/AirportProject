
const Person = require('./Person')


class Passenger extends Person {
    constructor(name) {
        super(name);
    }

    callAttendant() {
        console.log('Excuse me, Hay there!')
    }
}

module.exports = Passenger;