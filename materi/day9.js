// DATA STRUCTURE

// STACK
// LIFO -> Last in first out
// METHOD PUSH & POP

class Stack {
  #container;
  #maxSize;

  constructor() {
    this.#container = [];
    this.#maxSize = 10;
  }

  isFull() {
    return this.#container.length >= this.#maxSize;
  }

  isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.isFull()) {
      return "container penuh";
    }
    this.#container.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "container kosong";
    }
    return this.#container.pop();
  }

  showContainer() {
    return this.#container;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
console.log(stack.push(11));
console.log(stack.pop());
console.log(stack.showContainer());

// QUEUE / ANTRIAN
// FIFO -> first in first out
// METHOD PUSH & SHIFT
class Queue {
  #container;

  constructor() {
    this.#container = [];
  }

  enqueue(element) {
    return this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  showContainer() {
    return this.#container;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.showContainer());

console.log(queue.dequeue());
console.log(queue.showContainer());

//SET -> filter only unique value in array
const fruits = ["banana", "apple", "mango", "apple"];
const newFruits = new Set(fruits);
console.log(newFruits);

// Membuat Set
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); //nilai ini tidak akan ditambahkan karena sudah ada
console.log(mySet);

// Mengecek apakah value yang dimasukkan ada apa tidak didalam set
console.log(mySet.has(1));
console.log(mySet.has(5));
console.log(mySet.has(2));

//Menghapus suatu nilai dari set
mySet.delete(2);
console.log(mySet);

//looping isi value Set
for (const value of mySet) {
  console.log(value);
}

//Melihat ukuran Set
console.log(mySet.size);
