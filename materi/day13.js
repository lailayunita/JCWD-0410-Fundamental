// // Synchronous
// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// // Asynchronous
// console.log("task 1");
// setTimeout(() => console.log("task 2", 3000)); //bakal dieksekusi setelah 3 detik
// console.log("task 3");
// //outputnya:
// // task 1
// // task 3
// // task 2

// // Promise
// const tryPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });

// tryPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally done");
//   });

// // Real Case Implementation
// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       return res.json(); //hasil ini akan masuk ke parameter users
//     })
//     //karena disini get users maka best practice penamaan parameternya disamakan
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("finally done");
//     });
// };
// fetchData();

// //ASNYC AWAIT
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("berhasil");
//     }, 2000);
//   });
// };

// // async function getDataa(){} -> penulisan kalo pake function biasa
// const getData = async () => {
//   const result = await fetchData();
//   console.log(result);
//   return result;
// };
// getData();

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       return res.json(); //hasil ini akan masuk ke parameter users
//     })
//     //karena disini get users maka best practice penamaan parameternya disamakan
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("finally done");
//     });
// };

// //fetch data by default adalah promise
// // bisa di await kalo promise?
// const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//     return users;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally done");
//   }
// };
// fetchData();

// JSON
const user = {
  name: "budi",
  age: 39,
};

//build-in method untuk translate object biasa ke json
//json mirip object tapi key-nya dibalut kutip
const userJSON = JSON.stringify(user);
console.log(userJSON);

//translate json ke object biasa
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

const myFunction = () => {
  return "ini adalah function";
};

const data = "ini adalah data";

module.exports = { myFunction, data };

//HOISTING -> var dan function declaration
var test = "john"; //by default bakal naik ke paling atas jadi nanti bisa dipake dimana aja
//bahkan di line sebelum variabel tersebut di deklarasikan begitu pun untuk function declaration
//tidak berlaku untuk function expression
