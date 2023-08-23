
//while loops
//basic loop
let i=1;
while(i<=55)
{
  console.log(i);
  i+=2; 
};


//anapodh loop
let y=120;
while(y>=2)
{
  console.log(y);
  y-=2;
};



//do while loops
let p=0;
do
{
  console.log(p+"^2="+p*p)
  p++;
}
while(p<=100)


let k=10;
while(k>=0)
{
  console.log(k*k);
  k-=1;
};


//for loops
"use strict"
let c=" ";

for(let b=10; b<=20; b+=2)
{
  c += b + " ";
  console.log(c);
}


c=" ";
for(let b=19; b>=11; b-=2)
  c += b + " ";
  console.log(c);


c=" ";
for(let b=1; b<=29; b+=2)
  if(b%3===0)
  c += b + " ";
  console.log(c)


let sum=0;
for(let b=1; b<=99; b+=2)
  if(b%2===1)
  sum+=b;
  console.log(`sum: ${sum}`);



  //famous mathematical problem
  let n=15;
  console.log(n);
  while(n!==1)
  {
    if(n%2===0)
    n=n/2;
    else
    n=3*n+1
    console.log(n)
  }
  

  //nested loops

  for(let i=1; i<=10; i++)
  {
    for(let j=1; j<=10; j++)  // this loop will run until it reaches j<=10 then the above loop will run
    console.log(`${i} * ${j} = ${i*j}`);  
    console.log("=======")
  }

  

  for(let i=1; i<=10;i++)
  {
    s= "";
    for(let j=1; j<=i; j++)
    s+="*";
    console.log(s)
  }


  const N=10
  let s;

  for(let i=0; i<=N; i++)
  {
      s="";
    for(let j=0; j<N-i-1;j++)
      s+=" ";
    for(let j=0; j<i+1; j++)
      s+="*"
    console.log(s)
  }

