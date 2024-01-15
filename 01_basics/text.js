// for of loops

let str = "Sony"
let size = 0
for (let val of str){
    // iterator -> charachter
    console.log("val = " , val);
    size++
} 
console.log("size = " , size)


//  for in loop 

let student = {                     //student object
    name : "Mangesh",
    age : 18,
    cgpa : 8.5,
    isPass: true
}

for (let key in student){
    console.log(" key= ", key ,"value = ", student[key])
}
