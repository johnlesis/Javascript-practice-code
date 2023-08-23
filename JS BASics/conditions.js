let hour=2;
let minute=3;
let second=8;
  
let hour_condition;
let minute_condition;
let second_condition;


if (hour<=23)
{
  hour_condition = true
  console.log("correct");
  if(hour<=9)
  {
      hour="0" + hour
  };
}
else
{
  hour_condition=false
  console.log("invalid time");
}
   

if(minute<=59)
{
  minute_condition = true
  console.log("correct");
  if (minute<=9)
  {
    minute = "0" + minute
  };
}
else
{
  minute_condition=false
  console.log("invalid time");
}
 

if(second<=59) 
{
  second_condition = true
  console.log("correct");
  if (second<=9)
  {
    second = "0" + second
  };
}
else
{
  second_condition = false
  console.log("invalid time");
}
    

if (hour_condition===true 
  && minute_condition===true 
  && second_condition===true)
    
console.log(`${hour}:${minute}:${second}`);





let i=0;
while(i<=55)
{
  console.log(i);
  i++;
};


for(let i=0; i<=55; i++)
{
  console.log(i);
}
  
