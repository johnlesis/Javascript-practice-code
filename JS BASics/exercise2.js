//Exercise 2
//the person
function person(fullname, age, idNumber) {
  this.fullname = fullname;
  this.age = age;
  this.idNumber = idNumber;
}


person.prototype.toString = function(){
  return `${this.fullname}(id=${this.idNumber})`;
}


function BankAccount(accnumber,owner,amount) {
  this.accnumber=accnumber;
  this.owner=owner;
  this.amount=amount;
}
BankAccount.prototype.toString = function() {
  return `${this.accnumber} ${this.owner} `
}


BankAccount.prototype.transfer = function (BankAccount,amount) {
  if (this.amount>=amount) {
    this.amount-=amount;
    this.amount+=amount;
    console.log (`${amount} tranfered from ${this} to ${BankAccount+amount}`);
  }
  else {
    console.log(`transfer failed. insuficient deposits.`)
  }
}


let john = new person("john lessis", 32, "1991");
let Iwanna = new person("iwanna lessi", 27, "1996");

let account1 = new BankAccount("123900918902938",john,1200);
let account2 = new BankAccount("093893749295392",Iwanna,100);


account1.transfer(account2,60);
account2.transfer(account1,300);