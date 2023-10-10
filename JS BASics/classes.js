// classes

class Dog {
  constructor(name,race,weight=10,mood=5){
    this.name=name;
    this.race=race;
    this.weight=weight;
    this.mood=mood;
  }

  eat() {
    console.log(this.name + " eating..");
    this.mood++;
  }

  bark(){
    if (this.mood>5)
    console.log("woof woof");
    else 
    console.log("woof");
  }

  walk(){
    console.log(this.name + " walking..")
    this.mood++
  }
}

let koproskilo= new Dog("Butter","mpastardakos",12,8);
let Lassie=new Dog("Lassie","Colley",15,4);

koproskilo.bark();
koproskilo.eat();
koproskilo.walk();
koproskilo.bark();
koproskilo.eat();

console.log(koproskilo);


