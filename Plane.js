class Plane {
    constructor(flightNum) {
        this.flightNum = flightNum;
		this.origin = '';
		this.destination = '';
		this.passengers = [];
    }

    setOrigin(originairport) {
        this.origin = originairport;
    }

    setDestination(destairport) {
        this.destination = destairport;
    }

    addPassengers(passenger) {
        this.passengers.push(passenger);
    }
}

module.exports = Plane ;