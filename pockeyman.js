class Pokemon {
    static pokemons = []
  
    constructor(name, number, type, hp) {
      this.name = name
      this.number = number
      this.type = type
      this.hp = hp
      this.constructor.pokemons.push(this)
    }
  
    static nameIsString(name) {
      if(typeof name === 'string') {
        return true
      } else {
        return false
      }
    }
  
    static numberIsTypeNumber(pokemonNumber) {
      if(typeof pokemonNumber === 'number') {
        return true
      } else {
        return false
      }
    }
  
    static isValidType(type) {
      const elements = ['fire','water','electricity','earth'] 
      const result = elements.indexOf(type) //-1 <-doesnt exist 
      //ternary operator
      return (result !== -1) ? true : false
      //^^ you can also use return elements.includes(type)
    }
  
    static isValidHp(hp) {
      //the value of hp isnt a negative number 
      if(hp > 0) {
        return true
      } else {
        return false
      }
    }
  
    //what kind of argument should be passed into this method?
    assignType(type) {
      const isTypeValid = this.isValidType(type)
      if(isTypeValid === true){
        this.type = type
      }
    }
  }
  
  //Wouldn't it be great to check each property before creating a pokemon instance?
  
  //Can only use static methods on the class, not instance
  // const pokemon1 = new Pokemon() // takes too long
  
  //Pokemon.nameIsString(1234)
  //Pokemon.numberIsTypeNumber(1234)
  //Pokemon.isValidType('underwaterfire')
  //Pokemon.isValidHp(200)
  
  const pokemon1 = new Pokemon('Pikachu', 21, 'electricity', 200)
  const pokemon2 = new Pokemon('Evee', 45, 'fire', 100)
  const pokemon3 = new Pokemon('Togepi', 55, 'earth', 50)
  
  console.log(Pokemon.pokemons)
  