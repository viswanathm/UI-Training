// Default Params
//normal js
function notify(str){
    if(!str){
        str = "abc";
    }
    alert(str);
}

//ES6
function notify(str = "abc"){
    alert(str);
}
//--------------------------------

//--------------------------------
// Template strings
var str = "test" + (1+2); // plain JS concatination
var str = `test ${1+2}`; // Template strings

//--------------------------------

// let & Const

const a = 6;
a=10; // throw an error

if(true){
    let i = 10;
}
console.log(i); //throw error


//--------------------------------
//for of
let numbers = [1, 2, 3];

for (let number of numbers) {
  console.log(number);
}

//--------------------------------
// Lambda - arrow functions
function(){} // plain js (will not have access to parent context)
() => {} //ES6 (this will have access to parent context, even if context chnages)

//--------------------------------
// Destructing
var a, b, rest;
[a, b] = [10, 20];
[a, b, c] = [10, 20, 30, 40, 50];


[a, b, ...rest] = [10, 20, 30, 40, 50];

//--------------------------------
// Spread operator
function sum(x, y, z) {
    return x + y + z;
  }  
const numbers = [1, 2, 3];  
sum(...numbers); // ES6 
sum(numbers[0], numbers[1], numbers[2]) //plain JS

//--------------------------------
//computed properties
var a = "test";
var b = 4;
var scores = {
    test1: 1,
    test2: 2,
    [a+b]: 3 // ES6
}
scores[a+b] = 4; // plain JS

//------------
var eatables = {vegetable: 'Carrot'}; //add key which u dont know...

var fruit_var = 'fruit'
var eatables = {[fruit_var]: 'Apple', [fruit_var + ' Cake']: 'yummy', vegetable: 'Carrot'}
console.log(eatables);






