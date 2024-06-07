//No.1 -> Write a code to display the multiplication table of a given integer.
const int = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${int} x ${i} = ${int * i}`);
}

//No.2 -> Write a code to check whether a string is a palindrome or not.
const text = "Kasur ini rusak";

const processedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // hapus semua karakter yang bukan huruf atau angka
let reversedText = processedText.split("").reverse().join("");

//const isPalindrome = processedText === proprocessedText.split("").reverse().join("");
//console.log(isPalindrome)

if (processedText === reversedText) {
  console.log(`${text} is a palindrome`);
} else {
  console.log(`${text} is not a palindrome`);
}

//No.3 -> Write a code to convert centimeter to kilometer.
const cm = 100000;
const cmToKm = cm / 100000;
console.log(`${cm}cm -> ${cmToKm}km`);

//No.4 -> Write a code to format number as currency (IDR)
let number = 1000;

// seringnya pake Intl.NumberFormat buat nampilin harga
const result = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0, //biar gaada ,00 dibelakang
});

console.log(result.format(number));

// let formattedCurrency = number.toLocaleString("id-ID", {
//   // mengubah angka menjadi string dengan format lokal tertentu.
//   style: "currency", //angka diformat sebagai mata uang
//   currency: "IDR",
// });
// console.log(`${number} -> ${formattedCurrency}`);

//No.5 -> Write a code to remove the first occurrence of a given “search string” from a string
let string = "Hello world";
let searchString = "ell";

// easier ver -> bisa juga pake replaceAll
// remove = string.replace(searchString, "");
// console.log(removes);

let position = string.indexOf(searchString); // Temukan posisi pertama dari searchString dalam string
// Jika searchString ditemukan dalam string, hapus kemunculan pertama
if (position !== -1) {
  string =
    //ngambil bagian dari awal string sampai tepat sebelum searchString.
    //ngambil bagian dari string setelah searchString.
    string.slice(0, position) + string.slice(position + searchString.length);
}
console.log(string);

// No.6 -> Write a code to capitalize the first letter of each word in a string
const mySentence = "hello world";
const words = mySentence.split(" "); //pisah berdasarkan spasi -> jadi per kata
console.log(words);

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1); //mengambil semua karakter mulai dari indexAwal sampai akhir string.
}

console.log(words[0].slice(2));
console.log(words.join(" "));

//No.7 -> Write a code to reverse a string -> suka ada di interview
const word = "hello world";
const reversedWord = word.split("").reverse().join("");
console.log(reversedWord);

let reverse = "";
for (let i = word.length - 1; i >= 0; i--) {
  let huruf = word[i]; // let huruf += word[i]
  reverse = reverse + huruf;
}
console.log(reverse);

//No.8 -> Write a code to swap the case of each character from string
let inputString = "The QuiCk BrOwN Fox";
let swappedString = "";

for (let i = 0; i < inputString.length; i++) {
  let char = inputString[i];

  if (char === char.toUpperCase()) {
    swappedString += char.toLowerCase();
  } else {
    swappedString += char.toUpperCase();
  }
}
console.log(`${inputString} -> ${swappedString}`);

//No.9 -> Write a code to find the largest of two given integers
const number1 = 42;
const number2 = 27;

if (number1 > number2) {
  console.log(
    `The largest number between ${number1} and ${number2} is ${number1}`
  );
} else if (number2 > number1) {
  console.log(
    `The largest number between ${number1} and ${number2} is ${number2}`
  );
}

//No.10 -> Write a conditional statement to sort three numbers
let num1 = 42;
let num2 = 27;
let num3 = 18;

const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);
const middle = num1 + num2 + num3 - smallest - largest;

console.log(`${smallest}, ${middle}, ${largest}`);

//No.11 -> Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
const input = 1;
let type;
if (typeof input === "string") {
  type = 1;
} else if (typeof input === "number") {
  type = 2;
} else {
  type = 3;
}

console.log(type);

//No.12 -> Write a code to change every letter a into * from a string of input
const input2 = "An apple a day keeps the doctor away";
let modifiedString = "";
for (let i = 0; i < input2.length; i++) {
  if (input2[i] === "a" || input2[i] === "A") {
    modifiedString = modifiedString + "*";
  } else {
    modifiedString = modifiedString + input2[i];
  }
}
console.log(modifiedString);
