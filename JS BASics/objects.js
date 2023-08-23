
let object1 = {
  x:1,
  y:2,
  sum(){return x+y;}
};
for(let propertyName in object1)
console.log(property,object1[propertyName]);


let john={
  fistname:"john",
  lastname:"dutton",
  fullname(){
    return `${this.firstname} ${this.lastname}`
  }
};


let beth = {
  firstname:"beth",
  lastname:"dutton",
  spouse:undefined,
  children:[],
  mood:null,
  fullname(){
    return `${this.firstname} ${this.lastname}`;
  },
  father:john
}
let json = JSON.stringify(beth);
console.log(json);
 

let object = JSON.parse(json);
console.log(object);



let billingDetails = {
  fullname:"john lesis",
  adressLine1:"line 1",
  adressLine2:"line 2",
  adressLine3:"line 3",
  print(){
    console.log(`${this.fullname},
    ${this.adressLine1},
    ${this.adressLine2},
    ${this.adressLine3}`)
  },
};
