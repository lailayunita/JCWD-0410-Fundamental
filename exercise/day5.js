// NO.1 Write a function to get the lowest, highest and average value in the array (with and without sort function).
// With Sort Function
function getStats(numbers) {
  const sortArr = numbers.sort((a, b) => a - b);
  console.log(sortArr);

  const lowest = sortArr[0];
  const highest = sortArr[sortArr.length - 1];

  let total = numbers.reduce((a, b) => a + b);
  const average = total / numbers.length;

  return { lowest, highest, average };
  // return `lowest:${lowest}, highest:${highest}, average: ${average}`;
}
console.log(getStats([12, 5, 23, 18, 4, 45, 32]));

// NO.2 Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
function concatenateWords(words) {
  if (words.lenght === 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    return words.join(", ") + " and " + lastWord;
  }

  // let result = "";
  // for (let i = 0; i < words.length; i++) {
  //   if (i === words.length - 1) {
  //     result += " and " + words[i];
  //   } else {
  //     result += words[i] + ", ";
  //   }
  // }

  // return result;
}

console.log(concatenateWords(["apple", "banana", "cherry", "date"]));

// NO.3 Write a function to split a string and convert it into an array of words
function splitString(str) {
  const splitStr = str.split(" ");
  return splitStr;
}
console.log(splitString("Hello World"));

// NO.4 Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
function calculateArr(arr1, arr2) {
  let jumlah = 0;
  let hasil = [];

  for (let i = 0; i < arr1.length; i++) {
    jumlah = arr1[i] + arr2[i];
    hasil.push(jumlah);
  }
  return hasil;
}
console.log(calculateArr([1, 2, 3], [3, 2, 1]));

// cara kalo panjang kedua array beda
function addArrays(arr1, arr2) {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }

  return result;
}
console.log(addArrays([1, 2, 3], [3, 2, 1]));

// NO.5 Write a function that adds an element to the end of an array.
// However, the element should only be added if it is not already in the array.
function addUniqueElement(arr, newElement) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
}
console.log(addUniqueElement([1, 2, 3, 4], 7));

// //another ver
// const arr = [1, 2, 3, 4];
// const newElement = 7;
// let found = false;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === newElement) {
//     found = true;
//     break;
//   }
// }

// if (found === false) {
//   arr.push(newElement);
// }
// console.log(arr);

// NO.6 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function evenNum(arr) {
  const evenArr = arr.filter((number) => number % 2 === 0);
  return evenArr;
}
console.log(evenNum([1, 2, 3, 4, 5, 6]));

//NO.7 Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
function limitData(maxSize, ...elements) {
  const arr3 = [];
  for (let i = 0; i < elements.length; i++) {
    if (arr3.length < maxSize) {
      arr3.push(elements[i]);
    } else {
      break;
    }
  }

  //pake for each version
  // elements.forEach((number) => {
  //   if(arr3.length === maxSize) return;
  //   arr3.push(number)
  // })

  return arr3;
}
console.log(limitData(5, 5, 10, 24, 3, 6, 7, 8));

// NO.8 Write a function that will combine 2 given array into one array
function combineArr(arr1, arr2) {
  return arr1.concat(arr2);

  // pake spread operator
  // return [...arr1,...arr2]
}
console.log(combineArr([1, 2, 3], [4, 5, 6]));

// NO.9 Write function to find duplicate values in an array
function findDuplicate(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Check if the found duplicate is already in the duplicates array
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
  return duplicates;
}
console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

function findDuplicateValues(arr) {
  const seen = new Set();
  const duplicate = [];

  for (const value of arr) {
    if (seen.has(value) && !duplicate.includes(value)) {
      duplicate.push(value);
    } else {
      seen.add(value);
    }
  }
  return duplicate;
}
console.log(findDuplicateValues([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// NO.10 Write a function to find the difference in 2 given array
function findDifferent(arr1, arr2) {
  const diff1 = arr1.filter((number) => !arr2.includes(number));
  const diff2 = arr2.filter((number) => !arr1.includes(number));
  const diffNum = diff1.concat(diff2);
  return diffNum;

  // const diff = [];
  // arr1.forEach((number) => {
  //   if (!arr2.includes(number)) {
  //     diff.push(number);
  //   }
  // });

  // arr2.forEach((number) => {
  //   if (!arr1.includes(number)) {
  //     diff.push(number);
  //   }
  // });

  // return diff;
}
console.log(findDifferent([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// NO.11 Based on the array below write a function that will return primitive data types only
function primitiveData(arr) {
  return arr.filter(
    (data) =>
      typeof data === "string" ||
      typeof data === "number" ||
      typeof data === "boolean" ||
      typeof data === "undefined" ||
      data === "null" //kalo null pake typeof jadi object karena by default null itu merepresentasikan object di javascript
  );

  // return arr.filter(
  //   (data) =>
  //     typeof data !== "object" ||
  //     typeof data !== "function"
  // );
}
console.log(primitiveData([1, [], undefined, {}, "string", {}, []]));

// NO.12  Write a function from a given array of numbers and return the second smallest number
function secondSmallest(arr) {
  if (arr.length < 2) {
    return "minimum array length harus 2";
  }

  const sort = arr.sort((a, b) => a - b);
  return sort[1];
}
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// NO.13 Write a function from a given array of mixed data types and return the sum of all the number
function sumNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  //pake foreach
  // arr.forEach(value => {
  //   if (typeof value === "number") {
  //     sum += value;
  //   }
  // });

  return sum;
}
console.log(sumNum(["3", 1, "string", null, false, undefined, 2]));

// NO.14 Write a function from the below array of number that will return sum of duplicate values.
function sumDuplicateValues(arr) {
  //self -> seluruh array akan masuk ke self
  //nyari tahu dulu angka yang duplikat
  const duplicateValues = arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });

  //baru disini dicek kalo itemnya ada di angka duplikat bakal dijumlahin
  let result = 0;
  for (const item of arr) {
    if (duplicateValues.includes(item)) {
      result += item;
    }
  }

  return result;
}
console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10]));

//NO.15 Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
function playRockPaperScissor(playerChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoices = choices[Math.floor(Math.random() * 2.9)];

  if (!choices.includes(playerChoice)) {
    return "wrong input!";
  }

  if (playerChoice === computerChoices) {
    return { result: "draw", computerChoices, playerChoice };
  }

  if (
    (playerChoice === "rock" && computerChoices === "scissor") ||
    (playerChoice === "scissor" && computerChoices === "paper") ||
    (playerChoice === "paper" && computerChoices === "rock")
  ) {
    return { result: "win", computerChoices, playerChoice };
  } else {
    return { result: "lose", computerChoices, playerChoice };
  }
}
console.log(playRockPaperScissor("paper"));
