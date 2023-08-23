
//simple fucntion
function hello()
{
  console.log("hello world");
}
hello();
hello();

//how memory works in functions

function hello(){
  console.log("hello world")
}
let myFunc = hello;
myFunc();
console.log(typeof myFunc,typeof hello,myFunc.name,hello.name);

//parameters_rest
function mult(initial,...rest) {
  let result = initial;
  for(let item of rest)
    result *=item;
    return result;
}
console.log(mult(1,2,3,4,5));

//parameters_default
function myFunc2(a,b="default",c) {
  console.log(a,b,c);
}
myFunc2();
myFunc2(1);
myFunc2(1,2);
myFunc2(1,2,3);
myFunc2(1,undefined,3);

//parameters_arguments
function myFunc1() {
  for(let item of arguments)
  console.log(item);
}
myFunc1(1,2,3)


function avg1(){
  let sum = 0; cnt=0;
  for(let item of arguments)
    if (typeof item == "number") {
      cnt++;
      sum+= item;
    }

      if (cnt>0)
        return sum/cnt;

 }
  
console.log(avg1(1,2,3,4,5));


// by value 

function myFunction(x) {
console.log(`inside myFunction: ${x}`);
x=2;
console.log(`inside myFunction: ${x}`);
}

let a=1;
console.log(`outside myFunction: ${a}`);
myFunction(a);
console.log(`outside myFunction: ${a}`);

  