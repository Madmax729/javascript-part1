//  printing even no 
 
// for(let num=0 ; num<=100 ; num++){
//     if(num%2 == 0){
//         console.log("num = " ,num)
//     }
// }



// que 2 - guess the correct number 

let gameNum = 30
let userNum = prompt("guess the number")
while(gameNum != userNum){
    userNum = prompt("You've guessed the wrong number.Try again.")
}
console.log("Congratulation you guessed the correct number.:)")