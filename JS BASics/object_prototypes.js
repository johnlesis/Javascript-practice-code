let fly = {
 canFly:false
}

let ironMan1 = {
  heroName :'stark',
};
let batman={
  heroName:"Wayne",
};
Object.setPrototypeOf(batman,fly)
Object.setPrototypeOf(ironMan1,fly);

console.log(ironMan1,batman);
console.log(ironMan1.canFly,batman.canFly);
console.log(Object.getPrototypeOf(ironMan1,batman));

//------------------------------------------------------//

//constructor function

function Superhero(name,strength,stamina){
  this.name=name;
  this.strength=strength;
  this.stamina=stamina;
}

Superhero.prototype.fly = function () {
  return "i am flying....!"
}

let ironMan = new Superhero("iron Man",50,1000);
console.log(ironMan);
console.log(ironMan.fly());

//askisi
function Dog(name, race, weight=10, mood=5){
  this.name = name;
  this.race = race;
  this.weight = weight;
  this.mood = mood;
}
Dog.prototype.eat=function() {
  console.log(this.name + " eating..");
  this.mood++;
}

Dog.prototype.bark=function() {
  if(this.mood>5) 
  console.log("Woof Woof Woof");
  else
  console.log("Woof");
}
Dog.prototype.walk = function() {
  console.log(this.name + " walking..");
  this.mood++;
}


let Piko = new Dog("piko", "teriier", 10, 5,);
console.log(Piko);

Piko.bark();
Piko.walk();
Piko.eat();
Piko.bark();

//========================================================//

//object create


