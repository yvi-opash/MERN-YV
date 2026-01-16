///----------- interface
interface Users {
   readonly id : number;
    name : string;
    marrid : boolean;
    description : any;
    age?: number;
    role: "admin" | "user";

};

const Users1 : Users = {
    id: 11,
    name: "yash",
    marrid: true,
    description: "epojifowfnlskdjroasfj",
    role: "admin"

};

// console.log(Users1);


interface product {
  readonly id: number;
  name: string;
  weight: number;
  price: number;
  color: string;
  size?: any;
  category: "jewellery" | "clothing" | "electronics";
  expirydate?: boolean;
};

const product1: product = {
  id: 1,
  name: "necklace",
  weight: 20,
  price: 200,
  color: "golden",
  category: "jewellery",
  expirydate: false,
  size: "0.1m"
}


console.log(product1);
console.log(Object.keys(product1).length);















/// ------------ utility functions - -

function sum(a: number, b: number): number {
  console.log(a + b);
  return 0;
}

function subtract(a: number, b: number): number {
  console.log(a - b);
  return 0;
}

function multiply(a: number, b: number): number {
  console.log(a * b);
  return 0;
}

function divide(a: number, b: number): number {
  console.log(a / b);
  return 0;
}

function square(a: number): number {
  console.log(a * a);
  return 0;
}

function even_odd(a: number): number {
  if (a % 2 === 0) {
    console.log(a, "is even number");
  } else {
    console.log(a, "is odd number");
  }
  return 0;
}

function upper(a: string): string {
  console.log(a.toUpperCase());
  return "0";
}

function lower(a: string): string {
  console.log(a.toLowerCase());
  return "0";
}

function firstlatterupper(a: string): string {
  console.log(a.charAt(0).toUpperCase() + a.slice(1));
  return "0";
}

function max(a: number[]): number {
  console.log(Math.max(...a));
  return 0;
}
function min(a: number[]): number {
  console.log(Math.min(...a));
  return 0;
}

// function arraysum(n: number[]): number{
//     let sum =0 ;
//     for (let i=0; i<n.length; i++){
//        sum += n[i];
//     }
//        console.log(sum);

//     return 0;
//}

function arraysum(n: number[]): number {
  let sum = 0;
  for (let value of n) {
    sum += value;
  }
  console.log(sum);
  return 0;
}


// sum(10, 5);
// subtract(10, 5);
// multiply(10, 5);
// divide(10, 5);
// square(6);
// even_odd(7);
// upper("kdfjsdlas");
// lower("HELLO");
// firstlatterupper("typescript");
// max([10, 25, 3, 99, 45]);
// min([10, 25, 3, 99, 45]);
// arraysum([10, 20, 30, 40]);


// enum

enum week{
    sunday =1,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
}

// console.log(week.friday);



// type Aliases

type 

// Fetch API - -
//  
//   const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: "Yash",
//       email: "yash@test.com",
//       address: {
//     city: 'Howemouth',
//   },
//   phone: '210.067.6132',
//   website: 'elvis.io',
//   company: {
//     name: 'Johns Group',
//     catchPhrase: 'Configurable multimedia task-force',
//     bs: 'generate enterprise e-tailers'
//   }
//     })
//   });

//   const data = await response.json();
//   console.log(data);
// }

// createUser();




// fetch("https://jsonplaceholder.typicode.com/users/11")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


interface user{
  userid: number;
  id: number;
  title: string;
  completed: boolean;
}

async function datas() {
  const info = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  const data: user[] = await info.json();
  //console.log(data);
   

} 

// datas();


