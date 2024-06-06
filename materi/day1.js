console.log("Hello World"); //menampilkan pesan di konsol browser

// VARIABLE -> storage / penampungan data
// VARIABLE DECLARATION -> ada tiga cara: var, let, const
var person = "Laila"; //udah jarang digunakan karena merupakan global variable -> jadi kalo ada nama yang sama gak error
console.log(person); //nampilin isi variable person

let person1 = "Yunita"; //dengan let isi variable bisa di replace
person1 = "Laila Yunita"; //isi person1 sekarang setelah isinya di replace
console.log(person1);

let person2; // dengan let variable bisa kosong / undefined dan bisa diisi nanti sedangkan const tidak bisa

const person3 = "Risma"; //deklarasi variable menggunakan const tidak bisa kosong valuenya dan direplace
// SEBISA MUNGKIN PAKE CONST PAS BUAT VARIABLE

/* VARIABLE NAMING
    - Spaces are not allowed in variable names.
    - Only letters, digits, underscores, and dollar signs are permitted in variable names.
    - Case matters when it comes to variable names.
    - A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, 
    any other special characters must not be taken. 
    - Certain terms such as reserved words in javascript shouldn’t be used to name variables.
*/

/* DATA TYPES
    1. primitive  data types: string, number, boolean, null, undefined -> IMMUTABLE / tidak bisa diubah
        - string -> apapun yang dibalut dengan kutip '' / ""
        - number -> 1 2 3 4 5
        - boolean -> nilainya hanya 2: true or false
        - null -> variable untuk menandakan nilainya masih kosong / belum diisi
        - undefined -> variable tidak ada isinya
    2. non-primitive data types: object and array -> MUTABLE / bisa diubah
        - object
        - array 
*/

// IMMUTABLE
let number1 = 1;
let number2 = number1;
number2 = 10;

console.log(number1); //number1 nilainya tetap sama
console.log(number2);

// MUTABLE
let person5 = {
  name: "Budi", //object berisi key and value
};

let person6 = person5;
person6.hobby = "Nonton";

console.log(person5); // person5 isinya ikut keubah
console.log(person6);

// STRING BUILD IN METHOD -> function yang sudah disediain javascript untuk value string
const nama = "SiTi metal";
const ket = "banget";
console.log(nama.toLowerCase()); // fungsi untuk mengubah huruf menjadi lowercase
console.log(nama.toUpperCase());
console.log(nama.replace("T", "s"));
console.log(nama.replaceAll("i", "O"));
console.log("SOTO".split("")); // split per karakter
console.log(nama.split(" ")); // split kalo ada spasi
console.log(nama.concat(ket));
console.log(nama.slice(0, 3)); //slice dari index 0 sampai sebelum index ke-3

// TEMPLATE LITERALS -> TEMPLATE STRING (backtick ``)
const nama2 = "jack";
const message = "welcome";

console.log(message + " " + nama2);
console.log(`${message} ${nama2}`); //versi pake template literal
console.log(`welcome ${nama2}`);

// NUMBER BUILD IN METHOD
const angka = 10;
const angka2 = "200m";
console.log(angka.toString());
console.log(Number(angka2)); //convert ke tipe data number
console.log(parseInt(angka2));

// TYPE CONVERSION
console.log(String(123)); //convert ke tipe data string

// kekurangan javascript -> walaupun tipe data string tapi isinya angka tetap bisa dikalkulasi kecuali pertambahan
console.log("3" * "3");
console.log("1" + 1); //kalo pertambahan jadi dempet
console.log("3" * 1);

//BOLEAN CONVERSION
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(" ")); //kalo ada isinya apapun itu pasti return true
console.log(Boolean("false")); //kalo ada isinya apapun itu pasti return true

// DATE
const now = new Date(); //nampilin tanggal yang ada di laptop
console.log(now);

// GET METHOD -> untuk men
console.log(now.getFullYear());
console.log(now.getMonth() + 1); //defaultnya harus + 1 karena start dari 0
console.log(now.getDate());

// SET METHOD
now.setFullYear(2027);
console.log(now);

// BASIC OPERATOR -> + - * / % **
console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(8 / 2);
console.log(3 % 2);
console.log(4 ** 4);

//MODIFY IN PLACE

let n = 6;
// cara panjang n = n + 2
// cara pendek n += 2
n *= 2;
console.log(n);

//INCREMENT & DECREMENT
let counter = 2;
counter++; //increment
console.log(counter);

counter--; //decrement
console.log(counter);

//POSTFIX & PREFIX
console.log(++counter); // prefix

let counter1 = 2;
console.log(counter1++); // postfix -> ditambahin tapi hasilnya dibalik layar makanya hasilnya

//PSEUDOCODE
