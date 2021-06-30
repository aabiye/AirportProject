const Bag = require('./Bag');

describe('Bag objects', () => {

    test('has a weight', () => {
        const carryonbag = new Bag(15);
        expect(carryonbag.weight).toBe(15);
    })

} )






