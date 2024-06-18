// EXERCISE TAMBAHAN ==========================================================================
/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.
    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085244455555"
    output = "(6285)-2444-55555"
*/

const phoneNumber = (input) => {
  if (typeof input !== "string") {
    return "Invalid phone number";
  }

  if (input.length !== 12) {
    return "Invalid phone number";
  }

  //pake looping
  for (let i = 0; i < input.length; i++) {
    if (input[i] < Number("0") || input[i] > Number("9")) {
      return "invalid phone number";
    }
  }
  input = "62" + input.slice(1);
  let template = "(xxxx)-xxxx-xxxx";

  input.split("").forEach((item) => {
    template = template.replace("x", item);
  });

  return template;

  //   //cek input string number pake RegEx
  //   if (!/^\d+$/.test(input)) {
  //     return "Invalid phone number.";
  //   }

  //   // cek input string number pake Number.isNan()
  //   // !Number.isNaN(Number(input)) && input.trim() !== "";

  //  const replaceFirstZero = input.replace("0", "62");
  //   console.log(replaceFirstZero);

  //   //pake RegEx
  //   // const formattedPhoneNum = replaceFirstZero.replace(
  //   //   /(\d{4})(\d{4})(\d{5})/,
  //   //   "($1)-$2-$3"
  //   // );

  //   //pake method slice
  //   const formattedPhoneNum = `(${replaceFirstZero.slice(
  //     0,
  //     4
  //   )})-${replaceFirstZero.slice(4, 8)}-${replaceFirstZero.slice(8)}`;
  //   return formattedPhoneNum;
};

console.log(phoneNumber("085244455555"));

/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.
   constructor:
   - this.queue
   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/

class BankQueue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    this.queue.length === 0;
  }

  enqueue(customer) {
    this.queue.push(customer);
    return "enqueue succes";
  }

  dequeue() {
    if (this.queue.length === 0) {
      return "Queue is empty";
    }
    this.queue.shift();
    return "dequeue success";
  }

  size() {
    return `Jumlah antrian : ${this.queue.length}`;
  }

  showCustomerQueue() {
    return this.queue;
  }
}

const customer = new BankQueue();
console.log(customer.enqueue("laila"));
console.log(customer.size());
console.log(customer.showCustomerQueue());
console.log(customer.dequeue());
console.log(customer.dequeue());
console.log(customer.showCustomerQueue());

/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:
    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/

class Train {
  constructor() {
    this.passenger = ["masinis"];
    this.maxCapacity = 10;
  }

  isFull() {
    return this.passenger.length === this.maxCapacity;
  }

  isEmpty() {
    return this.passenger.length === 1;
  }

  showPassenger() {
    return {
      listOfPassenger: this.passenger,
      remainingAvailableSeats: this.maxCapacity - this.passenger.length,
    };
  }

  passengerIn(name) {
    if (this.isFull()) {
      return "Train is Full";
    }

    if (this.passenger.includes(name)) {
      return "Passenger already exists";
    }

    this.passenger.push(name);
    return "Add passenger success";
  }

  passengerOut(name) {
    if (name === "masinis") {
      return "cannot remove masinis";
    }

    if (this.isEmpty()) {
      return "Train is Empty";
    }
    const index = this.passenger.indexOf(name); //kalo gak ketemu dia balikin return -1
    if (index === -1) {
      return "passenger not found";
    }

    this.passenger.splice(index, 1);
    return "remove passenger success";
  }
}

const passenger = new Train();
console.log(passenger.passengerIn("Laila"));
console.log(passenger.passengerIn("Laila2"));
console.log(passenger.passengerIn("Laila3"));
console.log(passenger.passengerIn("Laila4"));
console.log(passenger.passengerIn("Laila5"));
console.log(passenger.passengerIn("Laila6"));
console.log(passenger.passengerIn("Laila7"));
console.log(passenger.passengerIn("Laila8"));
console.log(passenger.passengerIn("Laila9"));
console.log(passenger.passengerIn("Laila10"));
console.log(passenger.showPassenger());

console.log(passenger.passengerOut("masinis"));
console.log(passenger.passengerOut("risma"));
console.log(passenger.passengerOut("Laila"));
console.log(passenger.passengerOut("Laila2"));
console.log(passenger.passengerOut("Laila3"));
console.log(passenger.passengerOut("Laila4"));
console.log(passenger.passengerOut("Laila5"));
console.log(passenger.passengerOut("Laila6"));
console.log(passenger.passengerOut("Laila7"));
console.log(passenger.passengerOut("Laila8"));
console.log(passenger.passengerOut("Laila9"));
console.log(passenger.passengerOut("Laila"));
console.log(passenger.showPassenger());
