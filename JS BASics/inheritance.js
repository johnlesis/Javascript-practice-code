
//inheritance 1
function Base() {
  this.baseProperty= 1;
}
function derived() {
  this.derivedProperty= 2;
}
derived.prototype=new Base();

let d = new derived();

//inheritance 2 

function Base(baseProperty){
  this.baseProperty = baseProperty;
}

function derived(baseProperty,derivedProperty){
  this.derivedProperty = derivedProperty;
  Base.call(this,baseProperty);
}

Derived.prototype = new Base();
Derived.prototype.constructor = Derived;

let c = new Derived(1,2);
console.log(d);


function Animal() {
  this.weight= weight;
  this.height= height;
};
///askhsh

"use strict"
function Horse(weight,height,color,tailLength) {
  this.color= color;
  this.tailLengh= tailLength;
  Animal.call(this,weight,height)
};
Horse.prototype = new Animal();
Horse.prototype.constructor = Horse;



function Dog(weight,height,sound) {
  this.sound=sound;
  this.bark=function(){
    console.log("wuf wuf")
  }
  Animal.call(this,weight,height)
}
Dog.prototype= new Animal();
Dog.prototype.constructor = Dog; 



function Doberman(weight,height,sound) {
  Dog.call(this,weight,height,sound)
 this.run=function(){
    console.log("i am running")
  }
}
Doberman.prototype= new Dog();
Doberman.prototype.constructor=Doberman;



function Butter(weight,height,sound,earSize) {
  this.earSize= earSize;
  this.sleep= function(){
    console.log("koimatai to koproskilo")
  }
  Dog.call(this,weight,height,sound)
}
Butter.prototype= new Dog();
Butter.prototype.constructor= Butter;



let iwanna= new Horse(200,1.5,"black",1);
let giannhs= new Doberman(40,0.5,120);
let koproskilo= new Butter(22,0.5,120,0.5);

console.log(iwanna.color);

Doberman.bark();
Doberman.run();
Doberman.bark();

Butter.bark();
Butter.sleep();
Butter.sleep();


