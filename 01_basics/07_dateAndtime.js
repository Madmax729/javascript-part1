

let myDate = new Date();
console.log(myDate)
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log( typeof myDate)


let createdDate = new Date(2023, 0 , 10);   //single digit for month -> Zero indexing or we can +1 for ease / double digit for months normal indexing
console.log(createdDate.toDateString());

let myCreatedDate = new Date();

let myTime =  Date.now();

console.log(myTime)
console.log(myCreatedDate.toDateString())

console.log(Math.floor(Date.now()/1000))
