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
        console.log(a, 'is odd number');
    }
    return 0;
}
function upper(a) {
    console.log(a.toUpperCase());
    return '0';
}
function lower(a) {
    console.log(a.toLowerCase());
    return '0';
}
function firstlatterupper(a) {
    console.log(a.charAt(0).toUpperCase() + a.slice(1));
    return '0';
}
function max(a) {
    console.log(Math.max.apply(Math, a));
    return 0;
}
function min(a) {
    console.log(Math.min.apply(Math, a));
    return 0;
}
function arraysum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}
upper('kdfjsdlas');
even_odd(544);
firstlatterupper('hwehddd uwqeidd aid');
max([5, 8, 6, 3, 56, 6, 235, 31681, 321, 3251]);
console.log(arraysum([5, 8, 6, 3, 56, 6, 235, 5]));
