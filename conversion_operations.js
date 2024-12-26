
//let score = "33"
//let score ="33m"
// let score =null op after conversion will give zero

//let score = undefined // this will aslo give NaN
let  score =true
console.log(typeof score)

let valueIntnUmber = Number(score) // using this we can convert the any number(written in form of string)into number
console.log(typeof valueIntnUmber)  

console.log(valueIntnUmber) // for 33m it is giving NaN as o/p

/* 
"33" => 33
"33m" => NaN
true => 1
false => 0
*/



let isLoggedIn ="t" // except zero(number) everything is true (even strings as well)
let booleanIsLoggedIn =Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber =33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

console.log(stringNumber)



/* 
--------operations--------
*/


 //similar to python (some)

 console.log("1"+2)
 console.log("s"+3)// why this concatatiantion is happening
 console.log("1"+2+2)//=> 122
 console.log(1+2+"2")//=>32   
 console.log(3+4*5%5)

 console.log(+true)
 console.log(+"")
 
 //Unary + Operator:
//The unary + operator attempts to convert its operand to a number. If the operand is already a number, it does nothing. If the operand is a non-number, JavaScript tries to coerce it into a number.