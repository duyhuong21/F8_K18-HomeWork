
// Task 1
let classA=['An','Binh','Chi']
let classB=classA
classB[0]='An Updated'
console.log("Class A:", classA);
// class A is stored at a memory address ( e.g, 0x01) when assigning classB = classA, both variables point to the same memory address
// Therefore modifying class B actually modifies the shared array in memory. So classA is affected even thought is was not directly changed

// Task 2
let x = "10"
let y = 2
console.log(x + y)
console.log(x - y)
console.log(x * "3")
console.log("Hello" - y)
// + with a string performs string concatenation
// - and * force numeric conversion
// "Hello" cannot be converted into a number -> NaN

// Task 3
let age = 9
let mathScore = 10
let isVIP = false
let canEnter = ( age >= 10 && mathScore > 7) || isVIP;
console.log(canEnter);
// A student can enter if: they meet both age and score conditions or they are a VIP member ( override condition )
// test false
age =9
mathScore=10
isVIP=false
console.log("Test 1 - Can enter:", canEnter);
// test true
age =9
mathScore=10
isVIP=true
console.log("Test 2 - Can enter:", canEnter);
// !(age<10) same as age>=10 because operator  will negate the boolean value of expression inside the parentheses

// task 4
const laptop={
    brand:"Dell",
    price:1000,
    spec:{
        ram:"8GB",
        ssd:"256GB"
    }
}
const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);
// objects are reference types, so multiple variables can point to the same memory address.
// When myLaptop = laptop, both variables reference the same object. Therefore, changing myLaptop.brand also changes laptop.brand.
// The nested object spec is also a reference type, so mySpec = laptop.spec points to the same memory.
// As a result, modifying mySpec.ram directly affects laptop.spec.ram.