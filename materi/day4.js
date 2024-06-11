// ARRAY
// let arr = []; // cara 1 deklarasi array
// let arr2 = new Array(); // cara 2 deklarasi array

let arr = ["A", "B", "C", "D", "E"]; //ini yang sering dipake
let arr2 = new Array("A", "B", "C", "D", "E");
let arr3 = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr3);

// ARRAY OF OBJECT -> array yang isinya object
const students = [
  { name: "Caca", email: "caca@gmail.com" },
  { name: "Laila", email: "laila@gmail.com" },
];

console.log(students);

// FOR OF LOOP -> beda dengan for loop biasa hanya perlu tulis variabel dan array mana yang mau di looping
// akan di looping sesuai jumlah data di dalam array
const fruits = ["apple", "pisang", "cherry"];

// best practice -> nama variabelnya singular ver dan pake const
for (const fruit of fruits) {
  console.log(fruit);
}

text = "Hello World";
for (const char of text) {
  console.log(char);
}

//Excercise for of
//hitung jumlah semua bilangan dalam array menggunakan for of
// ex: input = [1,2,3,4,5,6] -> 21

const input = [1, 2, 3, 4, 5, 6];
let result = 0;
for (const number of input) {
  result += number;
}

console.log(result);

// FUNCTION -> blok of code yang bisa digunakan berkali-kali
// ada 2 cara untuk mendefine sebuah function:  func declaration & func expression

// FUNCTION DECLARATION
// syntax: function namaFunction(){}

function square(number) {
  //number adalah parameter
  return number * number; // dalam function harus nulis return untuk mengembalikan sesuatu
}
square(); //cara manggil function
console.log(square(10)); //3 adalah sebuah argumen

// FUNCTION EXPRESSION -> ditampung dalam sebuah variabel
const square1 = function (number) {
  return number * number;
};
console.log(square1(10));

// // FUNCTION SCOPE -> variable yang didefine di dalam function hanya bisa di akses di function tsb
// function greeting() {
//   const hello = "hello";
//   // variable hello hanya bisa diakses di dalam fungsi ini
//   return hello;
// }

// // PARAMETER & ARGUMENT
// // argument -> value yang dimasukan saat pemanggilan function
// // parameter -> variable yang mewakili value dari argument di parantheses function

// function greeting(name) {
//   const hello = "Hello";
//   return hello + " " + name;
// }

// const result4 = greeting("Budi");
// console.log(result4);

// DEFAULT PARAMETER -> parameter yang tidak perlu disediakan oleh pemanggil
// jika tidak ada, maka nilai default yang telah ditentukan sebelumnya akan digunakan.
function multiply(a, b = 1) {
  console.log(a);
  console.log(b);
  return a * b;
}
console.log(multiply(10));

// REST PARAMETER -> mewakili sisa argumen ke dalam satu variabel parameter dalam bentuk array
function myFunction(a, b, ...manyMoreArgs) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunction(1, 2, 3, 4, 5, 6, 7);

// NESTED FUNCTION -> function dalam function

//outer function -> gabisa akses parameter inner function
function getMessage(firstName) {
  //inner function -> bisa akses parameter outer function
  function sayHello() {
    return "Hello " + firstName + ",";
  }

  function welcomeMessage() {
    return "welcome to purwadhika!";
  }

  return sayHello() + " " + welcomeMessage();
}

const result5 = getMessage("Laila");
console.log(result5);

// CLOSURE -> inner function selalu punya akses MASIH BINGUNGGGGGGGGGGG
// kalo udah return, code dibawah return gak ke-execute
function greeting(name) {
  const defaultMessage = "hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

const result6 = greeting("budi");
console.log(result6());

//CURRYING -> transformasi function yang punya banyak parameter f(a,b,c)
//jadi function yang punya beberapa parantheses sebanyak jumlah parameternya f(a)(b)(c)

//contoh non currying
function tambah(a, b, c) {
  return a + b + c;
}

//contoh currying -> jarang dipake
function tambahCurrying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// RECURSIVE -> fungsi yang memanggil dirinya sendiri MASIH BINGUNG JUGAAAAAAAA
function countdown(number) {
  console.log(number);
  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}
countdown(10);

// ARROW FUNCTION -> shortcut untuk menuliskan function expression
//contoh function expression
const square2 = function (number) {
  return number * number;
};

//contoh jika diubah ke arrow function
const square3 = (number) => {
  return number * number;
};

// kelebihan arrow function kalo cuma satu liine bisa disingkat jadi seperti berikut
const square4 = (number) => number * number; // gaperlu tulis kurung kurawal dan return

// ARRAY BUILD IN METHOD
// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
let words = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan isi value paling akhir dalam array
const words1 = ["hello", "world", "hello"];
words1.pop();
console.log(words1);

// PUSH -> menambahkan value ke paling akhir array
const words3 = ["hello", "world"];
words3.push("purwadhika");
console.log(words3);

// SHIFT -> mengilangkan value paling depan di dalam array
const words4 = ["hello", "world"];
words4.shift();
console.log(words4);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words5 = ["hello", "world"];
words5.unshift("laila");
console.log(words5);

//CONCAT -> menggabungkan 2 array jadi 1 array
const arr4 = ["hello"];
const arr5 = ["world"];
console.log(arr4.concat(arr5));
console.log(arr5.concat(arr4));

// SPLICE -> untuk menghapus , mengganti, atau menambahkan value pada sebuah array
// syntax: splice(startIndex,  brpYgMauDiDelete, item, item, ....)
const month = ["jan", "march", "april", "june"];
month.splice(1, 0, "feb"); //menambahkan pada index ke-1
console.log(month);

month.splice(4, 1); //menghapus index ke-4 sejumlah 1
console.log(month);

month.splice(3, 1, "may", "april"); //replace index ke-3 dengan hapus 1 item dan nambah 2 item
console.log(month);

// SLICE -> me-return new array dengan value yang sudah kite tentukan
// index start dan index endnya dari sebuah array tsb
// syntax: slice(startIndex, endIndex)

const fruits2 = ["banana", "orange", "lemon", "apple", "mango"];
console.log(fruits2.slice(1, 4)); //ngambil value dari index ke-1 sampai sebelum index ke-4
console.log(fruits2.slice(-4, -1)); //BINGUNGGGGGGG

// INDEXOF -> mencari index dari value yang dicari
// kalo misalnya gak ketemu bakalan return -1
const fruits3 = ["banana", "orange", "lemon", "apple", "mango"];
console.log(fruits3.indexOf("lemon"));

// SORT -> mengurutkan isi array berupa string atau number
const fruits4 = ["banana", "orange", "lemon", "apple", "mango"];
fruits4.sort();
console.log(fruits4);

//versi number tanpa compare function, gabisa kalo untuk puluhan atau ratusan
const points = [3, 5, 2, 6, 8, 1];
points.sort();
console.log(points);

//versi number menggunakan compare function
const points2 = [34, 5, 200, 16, 8, 10];
points2.sort((a, b) => a - b); //ascending -> kecil ke besar
// points2.sort((a, b) => b - a); descending -> besar ke kecil
console.log(points2);

//REVERSE -> membalikkan urutan element dalam array
const fruits5 = ["banana", "orange", "lemon", "apple", "mango"];
fruits5.reverse();
console.log(fruits5);

// FOREACH -> melakukan looping pada array tapi tidak me-return apapun -> hanya untuk melakukan looping
const fruits6 = ["banana", "orange", "lemon", "apple", "mango"];
fruits6.forEach((value, index) => {
  console.log(value);
});

//MAP -> melakukan looping sama kayak forEach tapi me-return array baru
const fruits7 = ["banana", "orange", "lemon", "apple", "mango"];

const result2 = fruits7.map((fruit, index) => {
  return fruit;
});
// const result2 = fruits7.map((fruit, index) => fruit
console.log(result2);

// FILTER -> melakukan looping juga sama kayak map dan menghasilkan array baru
// berdasarkan kondisi pada return function yang dimasukkan ke filter parantheses

const ages = [32, 30, 21, 12, 40];
const result3 = ages.filter((age, index) => {
  //parameternya age karena best practicenya singular dari ages
  return age > 20;
});
console.log(result3);

// FIND -> mencari value yang ditemukan pertama kali di dalam array
const ages2 = [3, 10, 20, 19];
const result7 = ages2.find((age) => age > 18);
console.log(result7);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3 = [3, 10, 20, 19];
const result8 = ages2.findIndex((age) => age > 18);
console.log(result8);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers = [175, 50, 25];
const result9 = numbers.reduce((a, b) => a + b);
console.log(result9);

//INCLUDE -> mengecek value pada array apakah ada atau tidak, hasil return-nya adalah boolean
const fruits8 = ["banana", "orange", "apple"];
console.log(fruits8.includes("banana"));

// REDUCERIGHT ->
// EVERY ->
// SOME ->
// FROM ->
// KEYS ->
