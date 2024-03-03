const input = require("readline-sync");

let m = input.questionInt("enter the 1 number:");

let s = 0;
let i =1;
let b =1;

while(i<=m)
{
    b = 1/i
    s = b+s
    i++
} console.log(s);