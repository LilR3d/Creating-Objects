//Class Syntax
class Animal {
  constructor(species, name, sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const momaBear = new Animal("Bear", "Momabear", "Roar!");
const papaBear = new Animal("Bear", "Papabear", "Grrr!");

momaBear.makeSound();
papaBear.makeSound();
