var b = "abcd";
//---------------------- TYPES
var isDone = false;
var decimal = 6;
var fullName = "blue";
var sentence = "Hello, my name is " + fullName;
var list = [1, 2, 3];
var list1 = [1, 2, 3];
//TUPLE
var x = ["hello", 10]; //cannot rever assign types
console.log(x[0].substr(1)); //cannot use substr on x[1]
//accessing elements outside array
x[3] = "world"; //can assing only tuple types
console.log(x[5].toString()); //can only use methods that are possible on tupe types
//ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //default 0,1,2
var c = Color.Green;
// enum Color {Red = 1, Green, Blue}; // we can start at differnt index.
// enum Color {Red = 1, Green = 2, Blue = 4}; // manually set east value.
//reverse lookup
// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];
// console.log(colorName);
//ANY
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var mixedList = [1, true, "free"]; //Any array
//VOID //generally used for function return types, but not for variables
function warnUser() {
    console.log("This is my warning message");
}
//Null and Undefined
var u = undefined;
var n = null;
//Never 
//which never returns a valid value
// should return either error or never returns anything
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//Object
var obj = {};
//------------------------- Type Assertion
var someValue = "1";
var numSomeValue = someValue;
// let numSomeValue: number = <number> someValue;
console.log(numSomeValue);
//-------------------------- Default and optional params
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams");
//------------------------ Classes
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj1 = new Numbers();
console.log("Global num: " + obj1.num_val);
obj1.storeNum();
//---------------------- Overloading
