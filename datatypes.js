// # primitive data types
// - number
// - string
// - boolean
// - null
// - undefined
// - symbol
// - bigint

//## reference data types(non-primitive data types)
// array, 
// object,
//  function
const score = 100; // number
const scoreValue = "100"; // string
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined
const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); // symbol
const bigNumber = 1234567890123456789012345678901234567890n; // bigint
console.log(id===anotherId); // false
console.log(typeof bigNumber); // bigint
console.log(typeof id); // symbol   
console.log(typeof userEmail); // undefined
console.log(typeof outsideTemp); // object  

   
//## comparison operators
// >, <, >=, <=, ==, ===, !=, !==   