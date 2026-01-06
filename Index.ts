///----------- interface
// interface Users {
//    readonly id : number;
//     name : string;
//     marrid : boolean;
//     description : any;
//     age?: number;
//     role: "admin" | "user";

// };

// const Users1 : Users = {
//     id: 11,
//     name: "yash",
//     marrid: true,
//     description: "epojifowfnlskdjroasfj",
//     role: "admin"

// };

// console.log(Users1);

/// ------------ utility functions - -

function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

function square(a: number): number {
  return a * a;
}

function isEven(a: number): boolean {
  return a % 2 === 0;
}

function upper(a: string): string {
  return a.toUpperCase();
}

function lower(a: string): string {
  return a.toLowerCase();
}

function firstLetterUpper(a: string): string {
  return a.charAt(0).toUpperCase() + a.slice(1);
}

function max(a: number[]): number {
  return Math.max(...a);
}

function min(a: number[]): number {
  return Math.min(...a);
}

function arraySum(n: number[]): number {
  let sum = 0;
  for (let value of n) {
    sum += value;
  }
  return sum;
}



console.log(sum(5, 3));               
console.log(subtract(10, 4));         
console.log(multiply(2, 6));          
console.log(divide(10, 2));          
console.log(square(5));              
console.log(isEven(7));               
console.log(upper("yash"));           
console.log(lower("YASH"));           
console.log(firstLetterUpper("yash"));
console.log(max([1, 5, 3]));          
console.log(min([1, 5, 3]));          
console.log(arraySum([5, 8, 6, 3]));  
