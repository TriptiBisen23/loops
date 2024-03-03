const input = require("readline-sync");

let m = input.questionInt("enter the 1 number:");

let n = input.questionInt("enter the 2 number:");

let i = 1;
let p = 0;

while(i<n)
{
    i++;
    p = p+i;
   
} console.log(p);