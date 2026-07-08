const accountId = 144553
let accountEmail = "user@example.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 123456 // accountId is a constant and cannot be reassigned

accountEmail = "newuser@example.com"
accountPassword = "67890"
accountCity = "Mumbai"

console.log(accountId);

/* 
Prefer not to use var
because it has block scope and fuctional scope issues.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);