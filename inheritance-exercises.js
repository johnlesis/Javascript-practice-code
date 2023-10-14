class Customer{
  constructor(address,name,orders) {
    this.address = address;
    this.name = name;
    if (orders === undefined)
      this.orders = [];
      else
        this.orders = orders;
  }
  
  placeOrder(order) {
      this.orders.push(order);
  }

  toString(){
    let header = `Address: ${this.address}, Name: ${this.name} \n` +
    "==========================================\n"
    let rest = "";
    let sum = 0.0;
    for (let order of this.orders) {
      rest += "\n" + order;
      sum += order.payment.amount;
    }
    return header + rest + `\n\n Sum${sum}`;
  }
}


class Order { 
  constructor(date,payment) {
    this.date=date;
    this.payment=payment;
  }
  toString() {
    return `Date: ${this.date}, Payment: ${this.payment}`
  }
}


class Payment {
  constructor(amount) {
    this.amount= amount;
  }
  toString() {
    return this.amount;
  }
}


class Credit extends Payment {
  constructor(amount,cardNo,expDate){
    super(amount);
    this.cardNo = cardNo;
    this.expDate = expDate;
  }
  toString() {
    return  super.toString() + `, Card number: ${this.cardNo}, Card expiration Date: ${this.expDate}`;
  }
}


class Check extends Payment{
  constructor(amount,number,bankCode) {
    super(amount);
    this.number = number;
    this.bankCode = bankCode;
  }
  toString() {
    return  super.toString() + `, Check book number: ${this.number}, Bank Code number: ${this.bankCode}`;
  }
}


let John = new Customer("Vasillisis Sofias 666","John Lesis");
John.placeOrder(new Order("09202912",new Payment("20.70")));
John.placeOrder(new Order("09202912",new Credit("34.60", "2890 0983 0202 3890",2026)));
John.placeOrder(new Order("09202912",new Check("26.00", "9092", "bf02190983")));
console.log(`${John}`);