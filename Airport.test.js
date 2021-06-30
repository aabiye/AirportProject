const Airport = require('./Airport')
const Plane = require('./Plane')

describe('Airport objects', () => {
    const airport1 = new Airport("DFW");
    const plane1 = new Plane("BW500")

    test('Airport has a name', () => {
        expect(airport1.name).toBe("DFW");
    })

    test('Airport can add planes', () => {
        airport1.addPlane(plane1);
        expect(airport1.planes.length).toBe(1);
    })

})