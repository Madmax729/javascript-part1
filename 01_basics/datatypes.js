//Primitive -- call by value

// 7 types:  String , Number ,boolean , null , BigInt , undefined , Symbol

// REference (Non-primitive datatype)

// Array , object, Functions

const values = [123.5, 52.3 , 69.69]
myObj = {
    name: "Harvey",
    age: 28
}

// JS is a dynamically typed language -  This means that the data type of a variable is not explicitly declared, and it can change throughout the program.

const num = 100
const num2 = 100.2
let name = "harry"

let id = Symbol('123')
let id2 = Symbol('123')
console.log(id === id2)             //false

// Statically typed language - A statically typed language is a programming language where the type of a variable is known at compile time. This means that the programmer must specify the variable's data type when it's declared.
// eg int,float,double,String etc...