//static methods and members  


class Superhero {
  static count = 0;
  constructor(name,strength,stamina){
    this.name = name;
    this.strength = strength;
    this.stamina = stamina;
    Superhero.count++;
  }

  fly() {
    return `${this.name} is flying`;
  }

  static compare(hero1,hero2){
    return hero1.strength - hero2.strength;
  }
}
let ironMan = new Superhero("iron man",50,1000);
let batman = new Superhero("batman",150,1200);
if (Superhero.compare(batman,ironMan)) {
  console.log(`${batman.name} is stronger than ${ironMan.name}`);
}
console.log(`superheroes in program: ${Superhero.count}`);



//exercise

class Circle {
  #c;
  metric;

  constructor(c,metric) {
    this.#c = c;
    this.metric = metric;
  }

  get c() {
    return this.#c;
  }
  set c(val) {
    this.#c = val;
  }

  get perimeterCm() {
    if (this.metric === "cm")
      return 2 * Math.PI * this.#c;
    else
      return 2 * Math.PI * Circle.inToCm(this.#c);
  }

  get perimeterIn() {
    if (this.metric === "in")
      return 2* Math.PI * this.#c;
    else
      return 2* Math.PI * Circle.cmToIn(this.#c);
  }

  static inToCm(inches) {
    return inches*2.54;
  }
  static cmToIn(cm) {
    return cm/2.54;
  }
}

let TSETSOS= new Circle(1,"cm");
console.log(TSETSOS.perimeterCm,TSETSOS.perimeterIn);
TSETSOS.c= 4;
console.log(TSETSOS.perimeterCm,TSETSOS.perimeterIn);