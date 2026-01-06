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
function sum(a, b) {
    console.log(a + b);
    return 0;
}
function subtract(a, b) {
    console.log(a - b);
    return 0;
}
function multiply(a, b) {
    console.log(a * b);
    return 0;
}
function divide(a, b) {
    console.log(a / b);
    return 0;
}
function square(a) {
    console.log(a * a);
    return 0;
}
function even_odd(a) {
    if (a % 2 === 0) {
        console.log(a, "is even number");
    }
    else {
        console.log(a, "is odd number");
    }
    return 0;
}
function upper(a) {
    console.log(a.toUpperCase());
    return "0";
}
function lower(a) {
    console.log(a.toLowerCase());
    return "0";
}
function firstlatterupper(a) {
    console.log(a.charAt(0).toUpperCase() + a.slice(1));
    return "0";
}
function max(a) {
    console.log(Math.max.apply(Math, a));
    return 0;
}
function min(a) {
    console.log(Math.min.apply(Math, a));
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
function arraysum(n) {
    var sum = 0;
    for (var _i = 0, n_1 = n; _i < n_1.length; _i++) {
        var value = n_1[_i];
        sum += value;
    }
    console.log(sum);
    return 0;
}
sum(10, 5);
subtract(10, 5);
multiply(10, 5);
divide(10, 5);
square(6);
even_odd(7);
upper("kdfjsdlas");
lower("HELLO");
firstlatterupper("typescript");
max([10, 25, 3, 99, 45]);
min([10, 25, 3, 99, 45]);
arraysum([10, 20, 30, 40]);
