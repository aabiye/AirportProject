const fs = require('fs')
const fsp = require('fs').promises; 
const path = require('path'); 

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


    getInfoCallback(callback){
        const airportName = this.name;
        const dbPath = path.join(__dirname, 'airportsData.json')

    
        fs.readFile(dbPath, (err, data) => {
            const airports = JSON.parse(data)
            const airport = airports.find(airport => airport.iata === airportName)

            callback(err, airport)
        })
    }

    getInfoPromise() {
        const airportName = this.name;
        const dbPath = path.join(__dirname, 'airportsData.json')

        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, (err, data) => {
                if(err) {
                    return reject(err)
                }
                
                const airports = JSON.parse(data)
                const airport = airports.find(airport => airport.iata === airportName)

                resolve(airport)
            })
        })
    }

    async getInfoAsync() {
        const airportName = this.name;
        const dbPath = path.join(__dirname, 'airportsData.json')
        try {
            const data = await fsp.readFile(dbPath)
            const airports = JSON.parse(data)
            const airport = airports.find(airport => airport.iata === airportName)
        
            return airport

        } catch(err) {
            console.log("AHH can't find airport info", err)
        }
      
    }

}

const airport1 = new Airport('DFW')
const airport2 = new Airport('IAD')
const airport3 = new Airport('BWI')

console.log(Airport.Airports)
console.log(Airport.addAirport(airport3))

module.exports = Airport 