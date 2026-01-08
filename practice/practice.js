function multiply(num1, num2) {
  console.log(num1 * num2);
  return 0;
}

multiply(9, 15);

function min_max(a) {
  let max = a[0];
  let min = a[0];
  for (let i = 0; i <= a.length; i++) {
    if (a[i] >= max) {
      max = a[i];
    }

    if (a[i] <= min) {
      min = a[i];
    }
  }
  console.log(max, "is a maximum number");
  console.log(min, "is a minimum number");
}

const arr = [6, 8, 2, 5, 9, 45, 548, 84, 51, 5];

min_max(arr);

//object
const car = {
  name: "fiat",
  model: "500",
  weight: "850",
  color: "black",
  detail: function () {
    return this.name + " " + this.color + " " + this.model;
  },
};
delete car.weight;
console.log(car);
console.log(car.detail());

//Object Constructor Functions

function Person(first, last, age, weight) {
  (this.firstname = first),
    (this.lastname = last),
    (this.age = age),
    (this.weight = weight);
}

const Girl = new Person("arya", "stark", 20, 50);

console.log(Girl["firstname"]);

//Object methods

const persons = {
  id: 123,
  name: "xyz",
  age: 25,
  weight: 50,
  height: 125,
};

const o = { sljdf: 54 };

// const i = Object.assign(o);
// console.log(i);

persons.name = "yash";

//console.log(persons);

for (let key in persons) {
  console.log(key, persons[key]);
}

///date
const d = new Date();
console.log(d.toISOString());

//array methods

let fruit = ["apple", "banana", "kiwi"];

console.log(fruit.length);

console.log(fruit.push("mango"), fruit);

console.log(fruit.pop(), fruit);

console.log(fruit.unshift("guava"), fruit);
console.log(fruit.shift(), fruit);

console.log(fruit.splice(1, 2, "mango"), fruit);

console.log(fruit.slice(1, 3));

let n = [5, 2, 7, 4, 345, 6, 89, 8, 1, 9];

console.log(n.map((n) => n * n));

console.log(n.filter((n) => n % 2 === 0));

console.log(n.sort((a, b) => a - b));

console.log(n.join("-"));



