//NO.1 & NO.2
class Objects {
  constructor(obj1, obj2) {
    this.obj1 = obj1;
    this.obj2 = obj2;
  }

  checkEqualObj() {
    const keys1 = Object.keys(this.obj1);
    console.log(keys1);
    const keys2 = Object.keys(this.obj2);
    console.log(keys2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (this.obj1[key] !== this.obj2[key]) {
        return false;
      }
    }

    return true;
  }

  getIntersection() {
    const intersection = {};

    for (let key in this.obj1) {
      if (this.obj1[key] === this.obj2[key]) {
        intersection[key] = this.obj1[key];
      }
    }
    return intersection;
  }
}

const object = new Objects({ a: 1 }, { a: 1 });
console.log(object.checkEqualObj());

const object2 = new Objects({ a: 1, b: 2 }, { a: 1, c: 3 });
console.log(object2.getIntersection());

//NO.3
const removeAndCombineArray = (arr1, arr2) => {
  const combineArray = [...arr1, ...arr2];
  const temp = [];

  for (let i = 0; i < combineArray.length; i++) {
    const duplicateValues = temp.filter((val) => {
      return val.email === combineArray[i].email;
    });

    if (!duplicateValues.length) {
      temp.push(combineArray[i]);
    }
  }

  return temp;
};

const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(removeAndCombineArray(arr1, arr2));

// const array1 = new twoArray(arr1, arr2);
// console.log(array1.mergeAndRemoveArr());

//NO.4
const switchKeyToValues = (data) => {
  const result = [];

  data.forEach((item) => {
    let temp = {};

    for (let key in item) {
      temp[item[key]] = key;
    }

    result.push(temp);
  });

  return result;
};

const input = [
  { name: "David", age: 20 },
  { name: "Sandy", age: 21 },
];
const output = switchKeyToValues(input);
console.log(output);

//NO.5
function factorial(n) {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);
    console.log(next);
    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
}

const { steps, total } = factorial(5);
console.log(steps.join(" x ") + " = " + total);
