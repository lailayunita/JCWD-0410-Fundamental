//No.1 Create a function that can create a triangle pattern according to the height we provide
function trianglePattern(height) {
  let currentNumber = 1;
  let pattern = "";
  //Loop luar berjalan dari 1 hingga height untuk setiap baris dalam segitiga.
  for (let i = 1; i <= height; i++) {
    //Loop dalam berjalan dari 1 hingga i untuk mencetak angka dalam baris tersebut.
    for (let j = 1; j <= i; j++) {
      pattern += currentNumber.toString().padStart(2, "0") + " ";
      //pattern += (currentNumber < 10 ? "0" : "" + currentNumber + " ") versi tanpa build in method
      currentNumber++;
    }

    pattern += "\n";
  }

  return pattern;
}
console.log(trianglePattern(6));

// No.2 Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
function fizzBuzz(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   result += "FizzBuzz";
    // } else if (i % 3 === 0) {
    //   result += "Fizz";
    // } else if (i % 5 === 0) {
    //   result += "Buzz";
    // } else {
    //   result += i;
    // }

    // another ver
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) {
        result += "Fizz";
      }

      if (i % 5 === 0) {
        result += "Buzz";
      }
    } else {
      result += i;
    }

    if (i < n) {
      result += ", ";
    }
  }
  return result;
}
console.log(fizzBuzz(15));

//No.3 Create a function to calculate Body Mass Index (bmi)
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let bmiCategory = "";
  if (bmi < 18.5) {
    bmiCategory += "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bmiCategory = "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    bmiCategory = "very overweight";
  } else {
    bmiCategory = "obesity";
  }

  return bmiCategory;
}
console.log(calculateBMI(60, 1.6));

//No.4 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function evenNum(arr) {
  const evenNumber = arr.filter((number) => number % 2 === 0);
  return evenNumber;
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//No.5 Write a function to split a string and convert it into an array of words
function splitStr(str) {
  const splitStr = str.split(" ");
  return splitStr;
}
console.log(splitStr("Hello World"));

// tanpa build in method
const splitString = (str) => {
  let kata = [];
  let tmpStr = "";

  for (let i = 0; i < str.length; i++) {
    if (input[i] === " ") {
      kata.push(tmpStr);
      tmpStr = "";
      continue;
    }

    tmpStr += input[i];
  }
};
