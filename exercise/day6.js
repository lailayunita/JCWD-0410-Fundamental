//NO.1 Create a function to calculate array of student data
class StudentCalculator {
  constructor(students) {
    this.students = students;
  }

  calculate() {
    let maxScore, minScore, avgScore, maxAge, minAge, avgAge;

    const sortScore = this.students.sort((a, b) => a.score - b.score);
    const sumScore = this.students.reduce((a, b) => a + b.score, 0);
    maxScore = sortScore[sortScore.length - 1].score;
    minScore = sortScore[0].score;
    avgScore = sumScore / this.students.length;

    const sortAge = this.students.sort((a, b) => a.age - b.age);
    const sumAge = this.students.reduce((a, b) => a + b.age, 0);
    maxAge = sortAge[this.students.length - 1].age;
    minAge = sortAge[0].age;
    avgAge = sumAge / this.students.length;

    return {
      Score: {
        Highest: maxScore,
        Lowest: minScore,
        Average: avgScore,
      },

      Age: {
        Highest: maxAge,
        Lowest: minAge,
        Average: avgAge,
      },
    };
  }
}

const studentsData = [
  { name: "risma", email: "risma@gmail.com", age: 20, score: 90 },
  { name: "laila", email: "laila@gmail.com", age: 22, score: 80 },
  { name: "pitut", email: "pitut@gmail.com", age: 21, score: 65 },
  { name: "nisqon", email: "nisqon@gmail.com", age: 23, score: 70 },
  { name: "calya", email: "nur@gmail.com", age: 24, score: 85 },
];

const studentCalculator = new StudentCalculator(studentsData);
const result = studentCalculator.calculate();
console.log(result);

//NO.2 Create a program to create transaction
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.cart = [];
  }

  addToCart(product, qty) {
    const existingProduct = this.cart.find(
      (item) => item.product.name === product.name
    );

    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.cart.push({ product, qty });
    }

    this.total += product.price * qty;
  }

  showCart() {
    console.log(this.cart);
  }

  showTotal() {
    const result = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0, //biar gaada ,00 dibelakang
    });
    console.log(result.format(this.total));
  }

  checkout(userMoney) {
    if (userMoney < this.total || !userMoney) {
      return "Transaction Failed";
    }

    return {
      total: this.total,
      message: "Transaction Succes",
      remainingFunds: userMoney - this.total,
    };
  }
}

const product1 = new Product("buku", 20000);
const product2 = new Product("buku", 30000);
const product3 = new Product("pulpen", 5000);

const transaction = new Transaction();
transaction.addToCart(product1, 2);
transaction.addToCart(product2, 5);
transaction.addToCart(product3, 2);
transaction.showCart();
transaction.showTotal();
console.log(transaction.checkout(300000));
