weekday="monday";
day=13;
month="june";
year=2023;
console.log(`${weekday}, ${day} ${month} ${year}`);




firstName="john";
lastName="lesis";
console.log(`hello ${firstName} ${lastName}!`);




const pi=3.14;
let radius=3.5;

let area = pi*radius*radius;
let circumference=2*pi*radius;

console.log("circle-1");
console.log("area: " + area);
console.log("circunference: " + circumference);




"use strict"

let a=5;
let b=4;

if(a>b)
  console.log("a wins!");


else if (a<b)
  console.log("b wins!");


else
console.log("draw");


  
let g=-5;
let abs_val= g<0?-g:g;
console.log(abs_val);




let x=-4;
let sign;


sign = x<0? -1: x===0? 0: 1;
console.log(sign);
 


let hour=2;
let minute=23;
let second=58;

if(hour<=23 && hour>=0 
  && minute<=59 && minute>=0 
  && second<=59 && second>=0) 
  {
    let s = "" + (hour<=9? "0" +hour: hour);
    s+= ":" + (minute<=9? "0" +minute: minute);
    s+= ":" + (second<=9? "0" +second: second);
    console.log(s);
  }
  else
  console.log("invalid input")
 
   
 