const Bag = require('./Bag')

describe('Bag objects', () => {

    const carryonbag = new Bag(16)

    test('bag has weight', () => {
        expect(carryonbag.weight).toBe(16)
    })
})