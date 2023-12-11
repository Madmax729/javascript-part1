const score = 400;

const balance = new Number(score)
console.log(balance)


console.log(balance.toString().length)         // score(400) is now converted into string by .toString
console.log(balance.toFixed(2))


const othernum = 169.46
console.log(othernum.toPrecision(3))

const hundred  = 1000000
console.log(hundred.toLocaleString('en-IN'))            // .toLocale id to put comma in between no acc. to US standard (en-IN){to change from US standard to Indian}

//++++++++++++++++++  math +++++++++++++++++
console.log("++++++++++++ math +++++++++++++++")


console.log(Math.abs(-25))
console.log(Math.round(4.6))        // will round-off the value
console.log(Math.ceil(4.6))         // always takes up the ceiling value ie 5
console.log(Math.floor(4.6))        // always take the floor value ie 4

console.log(Math.min(4,8,6,2))     //gives the minimum value
console.log(Math.max(4,8,6,2))      // gives the max value

console.log(Math.random())   // gives the value between 0-1
console.log((Math.random())*10)
console.log((Math.floor(Math.random())*10)+1)    //will give value 1-10

//to obtain between values
const max = 20
const min = 10 
console.log(Math.floor(Math.random() * (max-min + 1)) + min )






// node 01_basics/06_numAndmath