const Passenger = require('./Passenger')

describe('Passenger name', () => {
    const pass1 = new Passenger("Hanna")

    test('pass has name',() => {
        expect(pass1.name).toBe("Hanna")
    })

    test('instanceof', () => {
        expect(pass1 instanceof Passenger).toBeTruthy;
    })

    test('callAttendant', () => {
        console.log = jest.fn();

        pass1.callAttendant();
        expect(console.log).toHaveBeenCalledWith("Excuse me, Hay there!");
    })
})