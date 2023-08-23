
// search in array
array = [1,2,1,2,1];
let pos = 0;
let out = "positions: ";
while (true)
{
  pos = array.indexOf(1,pos);
  if (pos!==-1)
   out +=pos + " ";
  else
   break;
  pos+=1;
}
console.log(out);

// sort an array and reverse an array
let array = [5,1,2,4,3];
array.sort();
console.log(array);
let array2 = Array.from(array);
array2.reverse();
console.log(array2)



//insert and delete first and last values in arrays
array = [];
array.push(1);
array.push(2)
let elem = array.pop();
console.log(elem);

array.push(3);
array.push(4)
let ele=array.pop();
console.log(ele);

array.push(5);
console.log(array);

while(Array.length<0)
console.log(array.pop());


let array6=[];
for(let i=0; i<=100; i++)
array6.push(i);
console.log(array6)


//slice method
 
let array4 = [0,1,2,3,4,5,6];

console.log(array4.slice(-2));
console.log(array4.slice(1,-1));
console.log(array4.slice(-5,-2));
console.log(array4.slice(5,-5));



//deep copy se pinaka me antikeimena
let array7=[[1],[2],[3]];

//deep copy
let sub = [];
for (let i=0; i<Array.length; i++)
sub[i] = [...array7[i]];
sub[0][0]=2;
console.log(array7);
console.log(sub);

//splice method 
"use strict"
array = [0,1,2,3,4];
delete array[0];
array.splice(2,1);
console.log(array);

///exercise

function randomInt(min, max)
{
  return Math.floor(Math.random() * (max-min) + min);
};

//initialize
let N=10;
let M=40;
let K=9;
let array9= new Array(N)
for(let i=0; i<array.length; i++)
{
  array9[i]=new Array(M);
  for(let j=0;j<array9.length;j++)
  {
    array[i][j]=new Array(K);
    for(let k=0; k<array9.length; k++)
    {
      array9[i][j][k]=randomInt(0,50001);
    }
  }
}
console.log(array9);


//search
let element = 1123;
let found = false;
outer: for (let twoD of array){
  for ( let oneD of twoD){
    if (oneD.indexOf(element)!==-1){
        console.log(`${element} found!`);
        found=true;
        break outer;

    }
  }
}
if (!found)
  console.log(`${element} not found!`);
