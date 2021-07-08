const Airport = require('./Airport');
const Plane = require('./Plane');
const Crew = require('./Crew');
const Passenger = require('./Passenger');


describe('Plane objects', () => {

    const flight1 = new Plane("AA78");
    const originAirport1 = new Airport("DFW");
    const destAirport1 = new Airport("JFK");
    const pas1 = new Passenger('Aden');
    const crew1 = new Crew('Abiye');

    test('plane has flight number', () => {
        expect(flight1.flightNum).toBe("AA78");
    }) 

    test('plane has origin destination', () => {
        flight1.setOrigin(originAirport1)
        expect(flight1.origin).toMatchObject(originAirport1);
    })

    test('Plane has destination', () => {
        flight1.setDestination(destAirport1);
        expect(flight1.destination).toMatchObject(destAirport1);
    })

    test('boards a passenger', () => {
        flight1.boardPassenger(pas1)
        expect(flight1.passengers).toContainEqual(pas1);
    });

    test('boards a crew member', () => {
        flight1.boardPassenger(crew1)
        expect(flight1.crews).toContainEqual(crew1);
    });
})
