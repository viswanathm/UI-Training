// Default Params
function notify(str = "abc"){
    alert(str);
}

// Template strings
var str = `test ${1+2}`

// let & Const

//for of
let arr = [1, 2, 3];

for (let value of arr) {
  console.log(value);
}

// Lambda - arroe functions

// Destructing
var a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];


// Spread
function sum(x, y, z) {
    return x + y + z;
  }  
const numbers = [1, 2, 3];  
sum(...numbers);

//computed properties
var eatables = {vegetable: 'Carrot'}; //add key which u dont know...

var fruit_var = 'fruit'
var eatables = {[fruit_var]: 'Apple', [fruit_var + ' Cake']: 'yummy', vegetable: 'Carrot'}
console.log(eatables);






