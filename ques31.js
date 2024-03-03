const input = require("readline-sync");

let n = input.questionInt("enter the number:");

let m = n;
let i = 1;

while(n>=i)
{
    if(n%i==0)
    {
        console.log(i);
    }   i++;
}