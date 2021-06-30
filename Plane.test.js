const Airport = require('./Airport');
const Plane = require('./Plane');

describe('Plane objects', () => {

    const flight1 = new Plane("AA78");
    const originAirport1 = new Airport("DFW");
    const destAirport1 = new Airport("JFK");

    test('plane has flight number', () => {
        expect(flight1.flightNum).toBe("AA78");
    }) 

    test('plane has origin destination', () => {
        flight1.setOrigin(originAirport1)
        expect(flight1.origin.name).toBe("DFW");
    })

    test('Plane has destination', () => {
        flight1.setDestination(destAirport1);
        expect(flight1.destination.name).toBe("JFK");
    })
})