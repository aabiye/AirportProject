const Person  = require('./Person');
const Bag = require('./Bag');


describe('person Object', () => {

	const person1 = new Person("Aden");
	const personBag = new Bag(15);
	const personseatNum = new Person(21);

	test('person has a name', () => {
		expect(person1.name).toBe("Aden");
	})

	test('person has a bag', () => {
		person1.addBag(personBag);
		expect(person1.bags.length).toBe(1);
	})

	// test('passanger has a seatnum', () => {
	// 	expect(personseatNum.seatNum).toBe(21);
	// })


})