// Part 1: variable declaration & console.log

const name="Tran Duy Huong"
let age=19
let isStudent= true
console.log("Name:", name)
console.log("Age:", age)
console.log("isStudent:", isStudent)

let a= 5
let b= 5
a=19
b=20
console.log("a =", a, "and","b =", b , "after changing")

//Part 2: const / let / var
// Difference const and let:
// - const doesn't reallocate values, but let can.
// - const requires value assignment during declaration, while let does not.
// - With objects/arrays, const cannot change the variable itself, but the data inside can still be modified.
// Use const when:
// - const should be used by default, and let should only be used when value modification is necessary.

// Part 3
//  100 - number
// "100" - string
//  TRUE - boolean
//  [1, 2, 3] - object
//  {name:"An",age:20) - object
//  null - object
//  undefined - undefined

let student = {name: "Tran Duy Huong", age: 19, scores:[10,11, 12]}
console.log(student)

// Part 4
let x = "1000"
x = Number(x)
console.log(x)
console.log(typeof x)
let y = 1000
y = String(y)
console.log(y)
console.log(typeof y)
let z = true
z = String(z)
console.log(z)
console.log(typeof z)

// Part 5

Boolean(0) - false
Boolean(1) - true
Boolean("") - false
Boolean("hello") - true
Boolean(null) - false
Boolean([]) - true

// Part 6
const numbers = [4, 3, 1, 5, 1]
console.log(numbers[0])
console.log(numbers[4])


// When assigning const a = number (with objects/arrays), a only stores the address, so a and number point to the same memory location.
// const only prohibits changing the variable's address, not modifying the data inside the object.