
Object.defineProperty(exports, "__esModule", { value: true });
;
const Users1 = {
    id: 11,
    name: "yash",
    marrid: true,
    description: "epojifowfnlskdjroasfj",
    role: "admin"
};
;
const product1 = {
    id: 1,
    name: "necklace",
    weight: 20,
    price: 200,
    color: "golden",
    category: "jewellery",
    expirydate: false,
    size: "0.1m"
};
// console.log(product1);
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
    console.log(Math.max(...a));
    return 0;
}
function min(a) {
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
function arraysum(n) {
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
var week;
(function (week) {
    week[week["sunday"] = 1] = "sunday";
    week[week["monday"] = 2] = "monday";
    week[week["tuesday"] = 3] = "tuesday";
    week[week["wednesday"] = 4] = "wednesday";
    week[week["thursday"] = 5] = "thursday";
    week[week["friday"] = 6] = "friday";
    week[week["saturday"] = 7] = "saturday";
})(week || (week = {}));
// console.log(week.friday);
//Event
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const savedUser = {
    username: "admin",
    password: "123"
};
rl.question("Username: ", (u) => {
    rl.question("Password: ", (p) => {
        if (u === savedUser.username && p === savedUser.password) {
            console.log("Login successful");
        }
        else {
            console.log("Invalid credentials");
        }
        rl.close();
    });
});
//# sourceMappingURL=Index.js.map