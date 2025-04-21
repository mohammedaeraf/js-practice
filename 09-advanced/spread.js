// Spread Operator ...

// Spread Operator for Arrays
let fruits1 = ["apple","banana"];
let fruits2 = ["mango", "orange"];

let fruits = [...fruits1, ...fruits2];
console.log(fruits);


// Spread Operator for Objects
let user = {
    name: "Aeraf",
    age: 47
}

let userProfile = {
    profession: "IT Trainer",
    qualification: "BE + PG Diploma"
}

let userObject = {
    ...user,
    ...userProfile
}

console.log(userObject);



