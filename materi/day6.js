// CARA MEMBUAT OBJECT

// cara 1 -> object literal syntax lebih sering digunakan
const user = {};
// cara 2 -> object constructor syntax
const user2 = new Object();

// PROPERTIES & METHOD
const user3 = {
  name: "david", //properties berisi key: value

  //function yang ada dalam class / object disebut method
  greet(name) {
    console.log("Hello " + name);
  },
};

console.log(user3.greet("budi"));

// ADD & DELETE PROPERTY
const person = {
  name: "joko",
  age: 20,
};

// Add
person.hobby = "coding";
console.log(person);

// Delete
delete person.age;
console.log(person);

// ACCESSING VALUE -> ada dua cara: bisa pake . atau []
console.log(person.name); //using dot
console.log(person["name"]); //using square bracket

// OPTIONAL CHAINING -> safe way to access nested object properties
const user1 = {};
console.log(user.address);
// console.log(user.address.street); // tanpa optional chaining (?) jadi error
console.log(user.address?.street);

//ACCESSING KEY
const person1 = {
  name: "aceng",
  age: 90,
};

console.log(Object.keys(person1)); //dapatnya dalam bentuk array
console.log(Object.values(person1));

// FOR IN -> looping dalam object cuma bisa pake for in
const person2 = {
  name: "aceng",
  age: 90,
};

for (const key in person2) {
  console.log(key); //akses key
  console.log(person2[key]); //akses value -> cari lagi kenapa pake [] bukan .
}

// DESTRUCTURING ASSGINMENT -> unpack atau mengeluarkan property dalam object / array menjadi sebuah variabel
// destruct object
const person3 = {
  name: "aceng",
  age: 90,
};
console.log(person.name); // tanpa destructuring

const { name, age } = person3; //kalo objek gaperlu ngatur urutan atau bebas beda dengan array yang harus sesuai index
console.log(name); //jadi gausah pake person.name
console.log(age);

// destruct array
const array = [10, 20];
console.log(array[0]); // ini kalo tanpa destruct array
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a); // ini kalo pake destruct
console.log(b);

// SPREAD OPERATOR -> digunakan untuk copy isi object / menggabungkan object
const object1 = { name: "jacky" };
const object2 = { email: "jacky@gmail.com" };
const object3 = { name: "laila", email: "lailayunita@gmail.com" };
const result = { ...object1, ...object2 };
const result2 = { ...object2, ...object3 };
const hasil = { ...result, password: "Halo123" };
console.log(result2); //kalo ada properties yang sama valuenya bakal ikut yang akhir -> dis
console.log(result);
console.log(hasil);

// THIS KEYWORD -> mengakses properti lain di dalam sebuah object
const person4 = {
  firstName: "aceng",
  lastName: "racing",
  greet() {
    console.log(`Hello ${this.firstName}`);
  },
};
person4.greet();

// CLASS -> template untuk membuat sebuah object
// class declaration -> nama kelas best practicenya dimulai pake huruf kapital
class User {
  greeting() {
    console.log("hello world");
  }
}

//class expression
const User2 = class {
  greeting() {
    console.log("hello world");
  }
};

//CREATE AN OBJECT FROM CLASS
//buat object baru berdasarkan class yang sudah ada
const orang = new User(); //bikin instance baru
orang.greeting();

const orang2 = new User();
orang2.greeting();

//CONSTRUCTOR -> menginisialisasi object yang dibuat di dalam class / tempat penampungan
class Person {
  constructor(name) {
    this.name = name;
    this.greeting();
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const orang3 = new Person("David"); //apa yang dimasukin disini connect ke paramater di constructor
console.log(orang3.name);

// ACCESS MODIFIER -> public dan private
class Person2 {
  #email; //bikin property email jadi private (#) sehingga hanya bisa diakses di dalam classnya
  constructor(name, email) {
    this.name = name; //public
    this.#email = email; //private
  }

  showEmail() {
    console.log(this.#email); //this.#email bisa diakses karena showEmail satu class dengan #email
  }
}

const orang4 = new Person2("laila", "laila@gmail.com"); //membuat sebuah instance
orang4.name;
console.log(orang4.name); //public
console.log(orang4.email); //undefined karena diakses dari luar dan properti email dijadikan private
orang4.showEmail();

// GETTER AND SETTER
// get -> baca data
// set -> set value di dalam object
const orang5 = {
  firstName: "ujang",
  lastName: "recing",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  //versi function biasa
  fullName2(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(orang5);
console.log(orang5.fullName); //menggunakan getter
orang5.fullName = "Alice Cooper"; //menggunakan setter
console.log(orang5.fullName);
console.log(orang5.fullName2("Aceng Yudi")); //function biasa

// ENCAPSULATION -> konsep di OOP untuk nge-bundle data dalam 1 unit. Contohna adalah class dan object
// INHERITANCE -> pewarisan dari parent class ke child class.
// jadi property dan method dari class parent bisa dimiliki sama child class

class Product {
  constructor(name, price) {
    this.productName = name;
    this.price = price;
  }

  readprice() {
    console.log(this.price);
  }
}

// without inheritance
// class Book {
//   constructor(name, price, author) {
//     this.productName = name;
//     this.productPrice = price;
//     this.author = author;
//   }
// }

// using inheritance -> pake keyword extends lalu dalam constuctor pake super()
class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

const barang = new Book("cara menjadi jago coder", 20000, "Aceng");
console.log(barang.price);

// INSTANCE OF -> untuk mengecek apakah sebuah object memiliki hubungan ke class tertentu
class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
