let array = [1,2,3,4,5]
console.log(array)
array = [1+2,"str",,5/2] //tropopoihsh

// enas vasikos pinakas
let array1 = [1,2,3,4,5];
let length = 5;
for (let i = 0; i < length; i++)
console.log(`position: ${i}, value: ${array1[i]}`);

//tropopoihsh pinaka
array1[0]=8;
array1[2]="three"
for (let i=0; i<length; i++)
console.log(`position: ${i}, value: ${array1[i]}`);



//cosntructor array Array([n]) kai static Array array.of([]) declarations

console.log(new Array(1,2,3,4,5,));
console.log(Array.of(1,2,3,7));

console.log(new Array(5));
console.log(Array.of(5));


//methodos from gia antigrafh pinaka
let array1 = [1,2,3,4,5];
let array2 = Array.from(array1);
array1[1]=7;
console.log(array2);


//array exercises
let arraymine=[1,2,3,4,5,6,7,8,9,10]
let element=6;
let found = false;
for(let i=0; i<arraymine.length; i++)
{
  if(arraymine[i]===element)
  {
    found=true;
    console.log(`${element} found at position ${i}`);
  }
}
if (!found)
{
  console.log(`${element} not found`);
}

//pinakes 2 kai parapanw diastasewn 
let array4=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
];
let rows = array4.length;
let columns = array4[0].length;

for(let i=0; i<rows; i++)
{
  let sum = 0;
  for(let j=0; j<columns; j++)
  {
    sum+=array4[i][j];
  }
  console.log(`row ${i}: sum=${sum}`)
}




