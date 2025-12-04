// string, number, boolean, null, undefined, object, symbol , bigint

/*
--var
Function-scoped
Can be redeclared and updated
Gets hoisted (initialized as undefined)
Not recommended in modern JS

--let
Block-scoped
Can be updated, but not redeclared in the same block
Hoisted but not initialized (Temporal Dead Zone)

--const
Block-scoped
Cannot be updated or redeclared
Must be initialized at declaration
For objects/arrays: the reference is constant, but internal values can change

*/


// String
let name = "John Doe";
console.log(typeof name); // "string"

// Number
let age = 30;
console.log(typeof age); // "number"

// Boolean
let isStudent = false;
console.log(typeof isStudent); // "boolean"

// Null
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript)   

// Undefined
let notDefined;
console.log(typeof notDefined); // "undefined"

// Object
let teaTypes = ["Green", "Black", "Oolong"];
console.log(typeof teaTypes); // "object"

let person = {
    firstName: "Jane",
    lastName: "Doe"
};
console.log(typeof person); // "object"

// BigInt
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"

// Demonstrating dynamic typing
let dynamicVar = "Hello, World!";
console.log(typeof dynamicVar); // "string"

