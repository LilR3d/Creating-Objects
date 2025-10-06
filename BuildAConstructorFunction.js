//Constructor function
function Animal(species, name, sound) {
  this.species = species;
  this.name = name;
  this.sound = sound;
}

this.makeSound = function () {
  console.log(`${this.name} says ${this.sound}`);
};

//Create two bear objects
let momaBear = new Animal("Bear", "Momabear", "Roar");
let papaBear = new Animal("Bear", "Papabear", "Grrr!");

//Call their methods
momaBear.makeSound(); // Momabear says Roar
papaBear.makeSound(); // Papabear says Grrr!
