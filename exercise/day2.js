//No.1 Write a code to convert celsius to fahrenheit
const celcius = 60;
const fahrenheit = celcius * (9 / 5) + 32;
console.log(fahrenheit + " Fahrenheit");

//No. 2 Write a code to check whether the number is odd or even
const num = 25;
if (num % 2 === 0) {
  console.log(`${num} is even number`);
} else {
  console.log(`${num} is odd number`);
}
//ternary version
console.log(num % 2 === 0 ? `${num} is even number` : `${num} is odd number`);

//No.3 Write a code to check whether the number is prime number or not
const number = 29;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(number + " adalah bilangan prima.");
} else {
  console.log(number + " bukan bilangan prima.");
}

//No.4 Write a code to find the sum of the numbers 1 to N
let n = 5;
let sum = 0; //nyimpen hasil penjumlahan angka
let message = "";
for (let i = 1; i <= n; i++) {
  sum = sum + i; //sum += i
  if (i === n) {
    message += i + "";
  } else {
    message += i + " + ";
  }

  // ternary ver
  // message += i + (i === n ? "" : "+")
}
console.log(`the sum of the numbers 1 to ${n} = ${message} = ${sum}`);

// versi pake rumus
const result = (n * (n + 1)) / 2;
console.log(result);

// No.5 Write a code to find factorial of a number
let a = 6;
let faktorial = 1;
let msg = "";
for (let i = a; i > 0; i--) {
  faktorial = faktorial * i; //faktorial *= i;

  // if (i === 1) {
  //   msg += i + "";
  // } else {
  //   msg += i + " x ";
  // }

  //ternary ver
  msg += i + (i === 1 ? "" : " x ");
}
console.log(`Faktorial dari ${a} =  ${msg} = ${faktorial}`);

// No.6 Write a code to print the first N fibonacci numbers
const m = 15;
let p = 0;
let q = 1;
for (let i = 1; i < m; i++) {
  let next = p + q;
  p = q;
  q = next;
  console.log(q);
}
