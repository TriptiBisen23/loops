const input = require("readline-sync");

let n = input.questionInt("enter the number:");

let s = 0;
let i = 0;

while(n>0)
{
    r = n%10
    q = Math.floor(n/10)
    n = q
    s = s+r
} console.log(s);