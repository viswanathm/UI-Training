var y = 1; // global variable, becoz defined outside function

function foo(){
    var z = 2; //local variable, becoz defined inside function
    a = 3; // global variable, becoz 'var' is not used
    console.log(z);
}
  
console.log(y); // prints 1
foo(); // prints 2
console.log(a); // prtins 3
console.log(z); //error, we cant use local vars outside
