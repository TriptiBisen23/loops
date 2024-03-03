const input = require("readline-sync");

let n = input.questionInt("enter the number:");

let k = 0;

while(n>0)
{
 
    r = n%10;
    k = (k*10)+r;
    n = Math.floor(n/10);
    
  

    
} 

console.log(k); 