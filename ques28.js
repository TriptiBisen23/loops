const input = require("readline-sync");

let n = input.questionInt("enter the number:");

let s = 0;
let i =n;

while(i>0)
{
    r = i%10
    s++
    r = s
    i = Math.floor(i/10); 
} 
   console.log(r);

