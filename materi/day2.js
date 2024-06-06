// IF ELSE STATEMENT
// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }

const age = 10;
if (age >= 17) {
  console.log("anda bisa buat ktp");
} else {
  console.log("anda tidak bisa buat ktp");
}

// ELSE IS STATEMENT
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

const grade = "C";

if (grade === "A") {
  console.log("nilai bagus");
} else if (grade === "B") {
  console.log("nilai lumayan");
} else if (grade === "C") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// SWITCH CASE -> biasa dipakai untuk menentukan satu nilai dan tidak rumit
const day = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;

  case "selasa":
    console.log("hari selasa");
    break;

  case "rabu":
    console.log("hari rabu");
    break;

  default:
    console.log("hari tidak ditemukan");
}

// LOGICAL OPERATOR -> dan &&, atau ||, not !

//OR -> hasilnya akan true jika salah satu kondisinya true
const car = "mercy";
if (car == "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

//AND -> beda dengan && kedua kondisi harus true baru hasilnya true
const umur = 17;
const punyaSIM = true;
if (umur >= 18 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

//NOT
const isSunny = true;
const isRaining = !isSunny;
console.log(isSunny);
console.log(isRaining);

//TERNARY OPERATOR -> SHORTCUT UNTUK IF ELSE CONDITION
const str = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

//              condition        ?     true     :       false
console.log(str === "javascript" ? "javascript" : "not javascript");

// bisa juga untuk banyak kondisi (seperti else if) tapi jadi susah dibaca
console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

// LOOP STATEMENT -> perulangan
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi
// type loop: for loop, while loop, do while loop

// FOR LOOP  -> punya 3 statement
// statement 1 : menginisialisasi variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping
// statement 3 : kode yang di eksekusi di akhir setiap iterasi

/* syntax : 
   for(statement1; statement2; statement3){} 
*/
for (let i = 0; i < 3; i++) {
  console.log("hello world");
}

// WHILE LOOP -> kondisi true baru bisa looping
// syntax:
let i = 2;
while (i < 5) {
  console.log("hello world");
  i++;
}

//DO WHILE LOOP -> melakukan do dulu sekail baru ngecek kondisinya. jadi walaupun false tetap dijalankan sekali
let count = 6;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);

// BREAK -> berguna untuk menghentikan loop
let sum = 0;
while (true) {
  console.log("sum = " + sum);

  if (sum >= 5) break; //tapi break jarang dipake, mostly pakenya return
  sum += 1;
}

// CONTINUE -> untuk melakukan skip pada looping tertentu
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; //ketika i = 3 ke skip
  console.log("i = " + i);
}
