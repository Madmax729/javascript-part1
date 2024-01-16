// functions

// function sumNum(a,b){
//     console.log(a+b)
// }

// sumNum(4,5)

// Arrow function 
// const arrowSum = (a,b)  => {
//     console.log(a+b);
// };

// const arrowMulti = (a,b)=> {
//     console.log(a*b);
// };


// Que

// function vowel_count(){
//     count = 0
//     console.log(str)
//     for (char of str){
//         if(str =="a" || str == "e" || str == "i"  || str == "o" || str == "u"){
//             count++
//         }
       
//     }
//     console.log(count)
// }


// forEach loop 
// array's_name.forEach(Call back function)


let arr = [ 1,2,3,4,5]
arr.forEach(function printVal(val){
    console.log(val)
})

// using arrow function 
// for Each loop --------------> to manipulate each n every element of the array (method)
let arr2 = ["Mumbai","Nagpur","Banglore"]
arr2.forEach( (val2)=>{
    console.log(val2.toUpperCase())
})

// Higher order function/method
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result 


// que

let arr3 = [ 1,2,3,4,5]
arr3.forEach((val)=>{
    console.log(val*val)
})

// Maps ( same like forEach loop just it also gives the new array)

let nums = [52 , 63 ,69]
let newarr = nums.map((val)=>{
    return(val*val)
})
console.log(newarr)

// Filter - filter out the elements by visting every index based on some condition
// which ever value is true for the condition it will be stored into new array

let nos = [ 10 , 15 , 23 , 56 , 45 , 2 ,8 , 95]
let new_var = nos.filter((val)=>{
    return val > 15
})
console.log(new_var)


// Reduce - it will perform some operation and reduce it the simple value (eg. sum,avg)
const array1 = [4 ,5,6,2]
let output = array1.reduce((prev,curr)=>{ // working- initally prev = 4,curr = 5 will get added and then stored in prev , curr will move forward curr = 6 and the process will repeat
  // return prev + curr
  return prev > curr? prev:curr ;  // prev > curr? so return prev :(nahi toh ) curr return
})
console.log(output)






