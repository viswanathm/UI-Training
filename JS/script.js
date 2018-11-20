var a = 1;
var b = 2;

if(a > b){
    alert(a);
}
else if(a < b){
    alert(b);
}
else {
    alert("a & b are equal");
}


var a = prompt("Enter a");
var b = prompt("Enter b");

a = parseInt(a);
b = parseInt(b);

if(a > b){
    alert(a + " is greater");
}
else if(a < b){
    alert(b + " is greater");
}
else {
    alert("a & b are equal");
}


var tableNumber = prompt("Enter a number to get table");

tableNumber = parseInt(tableNumber);

//    console.log(tableNumber + " X 1 = " + (tableNumber * 1));
//    //    2 + "X 1 =" + 2 ==> "2" + "X 1 =" + "2" ==> "2 X 1 = 2"
//    console.log(tableNumber + " X 2 = " + (tableNumber * 2));
//    console.log(tableNumber + " X 3 = " + (tableNumber * 3));
//    console.log(tableNumber + " X 4 = " + (tableNumber * 4));
//    console.log(tableNumber + " X 5 = " + (tableNumber * 5));
//    console.log(tableNumber + " X 6 = " + (tableNumber * 6));
//    console.log(tableNumber + " X 7 = " + (tableNumber * 7));
//    console.log(tableNumber + " X 8 = " + (tableNumber * 8));
//    console.log(tableNumber + " X 9 = " + (tableNumber * 9));
//    console.log(tableNumber + " X 10 = " + (tableNumber * 10));


for(var i=1; i <= 10; i++ ){
 console.log(tableNumber + " X " + i + " = " + (tableNumber * i));
}
