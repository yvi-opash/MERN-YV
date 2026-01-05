// let value: unknown = "hello";

// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }


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

console.log(Users1);
