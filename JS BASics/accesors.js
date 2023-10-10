

let object = {
  _data: 0,
  get data() {
    return this.data;
  },
  set data(value){
    this.data=value;
  }
}

console.log(object.data);
object.data=1;
console.log(object.data);


//constructor check type

let object1 = {}
object1.defineProperty(object1,"data",{
  get(){
    return this._data;
  },
  set(value){
    this._data=value;
  },
  enumerable:false,
});

console.log(object1.data);
object1.data=1;
console.log(object1.data);