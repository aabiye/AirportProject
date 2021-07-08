const Passenger = require('./Passenger');
const Crew = require('./Crew');

class Plane {
    constructor(flightNum) {
        this.flightNum = flightNum;
		this.origin = '';
		this.destination = '';
        this.passengers = [];
        this.crews = []; 
    }

    setOrigin(originairport) {
        this.origin = originairport;
    }

    setDestination(destairport) {
        this.destination = destairport;
    }

    boardPassenger(person) {
        if (person instanceof Passenger) {
            this.passengers.push(person);
        } else {
            this.crews.push(person);            
        }
    }
}

module.exports = Plane ;