class Airport {

    static Airports = []

    constructor(name) {
        this.name = name;
        this.planes = [];
        this.constructor.Airports.push(this)
    }

    addPlane(plane) {
        this.planes.push(plane);
    }

    static addAirport(airport) {
        return airport
    }
}

const airport1 = new Airport('DFW')
const airport2 = new Airport('IAD')
const airport3 = new Airport('BWI')

console.log(Airport.Airports)
console.log(Airport.addAirport(airport3))

module.exports = Airport 