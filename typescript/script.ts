var b:string = "abc";

//---------------------- TYPES

let isDone: boolean = false;
let decimal: number = 6;
let fullName: string = "blue";
let sentence: string = `Hello, my name is ${ fullName }`;
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];


//TUPLE
let x: [string, number] = ["hello", 10]; //cannot rever assign types
console.log(x[0].substr(1)); //cannot use substr on x[1]
    //accessing elements outside array
    x[3] = "world"; //can assing only tuple types
    console.log(x[5].toString()); //can only use methods that are possible on tupe types

//ENUM
enum Color {Red, Green, Blue}; //default 0,1,2
let c: Color = Color.Green;

    // enum Color {Red = 1, Green, Blue}; // we can start at differnt index.
    // enum Color {Red = 1, Green = 2, Blue = 4}; // manually set east value.

    //reverse lookup
    // enum Color {Red = 1, Green, Blue}
    // let colorName: string = Color[2];
    // console.log(colorName);

//ANY
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let mixedList: any[] = [1, true, "free"]; //Any array

//VOID //generally used for function return types, but not for variables
function warnUser(): void {
    console.log("This is my warning message");
}

//Null and Undefined
let u: undefined = undefined;
let n: null = null;

//Never 
//which never returns a valid value
// should return either error or never returns anything

function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


//Object
var obj:Object = {};

//------------------------- Type Assertion

let someValue: any = "1";
let numSomeValue: number = someValue as number;
// let numSomeValue: number = <number> someValue;
console.log(numSomeValue);

//-------------------------- Default and optional params

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  

//------------------------ Classes

var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj1 = new Numbers(); 
console.log("Global num: " + obj1.num_val)
obj1.storeNum();

//---------------------- Overloading