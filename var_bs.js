const accountId = 1234
let  accountEmail = "vidhut@gmail.com"
var accountPassword = 8

let accountState;
acountCity = 3
//accountId = 456 This is not allowed we cannot change the const 
accountEmail="raushan@gmail.com"
//accountPassword="kaka"
acountCity=4

console.log(accountEmail)
console.log(accountPassword)
console.log(acountCity)
console.log(accountId)

console.table([accountEmail,accountId,accountPassword,accountState])


/*
Prefer not to use var 
because of issues in block scope and the functional scope
*/
