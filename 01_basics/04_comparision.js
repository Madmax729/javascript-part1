
// console.log(2 > 1)
// console.log(2 == 1)
// console.log(2 !=1)
// will give ans in boolean --> true or false

// console.log("2" > 1)            true
// console.log("02" > 1)           true

console.log(null > 0)       //false
console.log(null == 0)      //false
console.log(null >= 0)      // true
/*the reason why equality check == and comparision < > >= <=  works differently because 
 comaparison converts tthe null into number, treating it as 0 
 so that's why null >= 0 is true & null > 0 is false */

 console.log(undefined == 0)        //false
 console.log(undefined <= 0)        //false
 console.log(undefined >= 0)        //false

 // === strictly check ( check's the value as well as it's datatype)
 console.log("2" === 2)             //false