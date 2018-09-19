// function petrolMachine(rupees, liters){
//     return "petrol worth: " + rupees + " -" + liters;
// }

// var returnValue = petrolMachine(100, 5);
// console.log(returnValue);

// function add2(input){
//     return input + 2;
// }

// function add3(input){
//     return input + 3;
// }

// var returnValue = add2(11);
// console.log(returnValue);

// var returnValue1 = add3(11);
// console.log(returnValue1);

// function addFactory(input){
//     var adder = function(innerInput){
//         return input + innerInput;
//     };

//     return adder;
// }



// var add2 = addFactory(2);
// var innerReturnValue = add2(5);
// console.log(innerReturnValue);

// var add3 = addFactory(3);
// var innerReturnValue1 = add3(4);
// console.log(innerReturnValue1);

function foo(){
    var x = 1;

    var innerFunction = function() {
        return x;
    }

    return innerFunction;
}

var getX = foo();
var _x = getX();
console.log(_x);
