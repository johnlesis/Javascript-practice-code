//Simple inheritance

class Cow{
  constructor(mood,weight){
  this.mood= mood;
  this.weight= weight;
  }
}
class LongHornTexasCow extends Cow{
  constructor(mood,weight,hornLength){
    super(mood,weight);
    this.hornLength= hornLength;
  }
}

let molly = new Cow(10,500);
let iwanna = new LongHornTexasCow(10,100,7);
console.log(molly,iwanna);


