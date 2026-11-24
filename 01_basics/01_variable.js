const account_Id = 144553
let account_Email = "vipins2003@gmail.com"
var account_Password = "vipin@123"
account_City = "Delhi" // we can use without variable also but it is not a good practice
let account_state; // is will give a undefined because we have not assigned any value to it


//account_Id = 2 -> not allowed because account_Id is a constant variable

//prefer not to use war 
// because of issue in block scope and functional scope

account_Email = "hc@hc.com"
account_Password = "hc@123"
account_City = "Mumbai"

console.log(account_Id);
// console.log(account_Email);
// console.log(account_Password);
// console.log(account_City);

console.table([account_Id, account_Email, account_Password, account_City,account_state]);