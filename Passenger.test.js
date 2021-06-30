const Passenger = require('./Passenger');
const Bag = require('./Bag');

describe('Passenger Object', () => {

	const passenger1 = new Passenger("Aden");
	const passengerBag = new Bag(15);

	test('Passenger has a name', () => {
		expect(passenger1.name).toBe("Aden");
	})

	test('Passenger has a bag', () => {
		passenger1.addBag(passengerBag);
		expect(passenger1.bags.length).toBe(1);
	})
})