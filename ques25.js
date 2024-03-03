const input = require("readline-sync");

let n = input.questionInt("enter the number:");

let s =0;
let i =1;

while(i<=n)
{
    s = s+i
    i = i+2
} console.log(s);



