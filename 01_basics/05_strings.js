const name = "Dylan"
const age = 32

// console.log("the name is " + name +" and his age is " + age)

console.log(`my name is ${name} and my age is ${age}`);

const gameName = new String('Valorent')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))          //l
console.log(gameName.indexOf('t'))      //7

const newString = gameName.substring(0,5)           // from 0 to 4 not includinng index 5
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const string3 = "        Alex       "
console.log(string3)
console.log(string3.trim())

const url = "https://alex.com/alex%20dunphy"
console.log(url.replace ('%20' , '-'))          //.replace(what to be replaced , with what to be )

console.log(url.includes('alex'))             // to check if that word is in url or not (true/false)

const string4 = "hello-i-m-alex"
console.log(string4.split('-'));        // splitting in array on the basis of '-'(it can be anything space or letter etc)


// node 01_basics/05_strings