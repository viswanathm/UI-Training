// Function without parameters, without return value
function add(){
    console.log('abc');
}

//function call
add();


// Function without parameters, but with return value
function add1(){
    console.log("abc");
    return 1;
}

//function call
var returnValue = add1(); //return value: 1

// Function with parameters and with return value
function add2(str){
    return 1;
 }

//function call
var returnValue = add2("abc");
console.log(returnValue); //1


// Function with parameters and with return value
function add2(str){
    return str;
 }

//function call
var returnValue = add2("abc");
console.log(returnValue); // "abc"


var returnValue = add2(1);
console.log(returnValue); // 1

var returnValue = add2(true);
console.log(returnValue); // true
