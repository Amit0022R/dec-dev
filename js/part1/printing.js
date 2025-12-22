// console.log("amit1");
// process.stdout.write("amit2");

// console.table([{ name: "Amit", age: 30 }, { name: "John", age: 25 }]);

// let a = 10;
// a++;
// console.log("value of a:", a);

// let b = 10;
// ++b;
// console.log("value of b:", b);


let x = 10;
// console.log(x++); // prints 10, phir x ban jaata hai 11

let y = 10;
// console.log(++y); // prints 11, aur y bhi 11 hi hota hai


// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.floor(Math.random()*6)+1);


// Math.random() => 0 to less than 1
// Math.random()*10 => 0 to less than 10
// Math.floor(Math.random()*10) => 0 to 9
// Math.floor(Math.random()*10)+1 => 1 to 10

// Math.floor(random() * totalNumberOfOutcomes) + shiftValue


// Task generate random number between 15 and 25

// console.log(Math.floor(Math.random()*11) + 15); // 15 to 25 ,, 15 is Startshift value, 11 is total number of outcomes

// #FORMULA ->>> Math.floor(Math.random() * (max - min + 1)) + min
// where min is starting value and max is ending value
// Example: min = 15, max = 25
// Math.floor(Math.random() * (25 - 15 + 1)) + 15
// Math.floor(Math.random() * 11) + 15


// OTP GENERATION BETWEEN 1000 and 9999
// console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

