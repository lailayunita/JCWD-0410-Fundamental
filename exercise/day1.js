//No.1
const rectangleLength = 5;
const rectangleWidth = 3;

const rectangleArea = rectangleLength * rectangleWidth;
console.log(rectangleArea);

//No.2
const rectanglePerimeter = (rectangleLength + rectangleWidth) * 2;
console.log(rectanglePerimeter);

//No.3
const radius = 5;

const diameter = 2 * radius;
console.log(diameter);

const circumference = Math.PI * diameter;
console.log(circumference);

const circleArea = Math.PI * radius * radius;
console.log(circleArea);

//No.4
const a = 80;
const b = 65;
const c = 180 - (a + b);
console.log(c);

//No.5
const days = 400;
const year = Math.floor(days / 365);
const month = Math.floor((days % 365) / 30);
const day = Math.floor((days % 365) % 30);
console.log(`${year} year, ${month} month, ${day} day`);

//No.6
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-25");
const selisihWaktu = Math.abs(date2 - date1); //date kurang date hasilnya auto ke milidetik
const selisihHari = Math.round(selisihWaktu / (1000 * 3600 * 24)); //ubah selisih waktu dari milidetik menjadi hari
//Ada 86.400.000 milidetik dalam sehari (24 jam * 60 menit * 60 detik * 1000 milidetik).
console.log(`perbedaan hari tanggalnya = ${selisihHari}`);
