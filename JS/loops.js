for(var i=0; i< 10; i++){
    console.log(i);
}

for(var j=10; j>0; j--){
    console.log(j);
}


 var i = 11;
 while(i < 10){
     console.log("while");
     i++;
 }

 var i=11;
 do{
     console.log("Do-while");
     i++;
 }
 while(i<10)


 //Print Stars
for(var i=1; i<=5 ; i++){
    var printValue = "";
    for(var j = 1; j<=i; j++){
        printValue = printValue + "*";
    }
    console.log(printValue);
}

// Print Math tables dynamically
var tableNumber = prompt("which table u want to print?");
for(var i=1; i <= 10; i++){
    console.log(tableNumber + " X " + i + " = " + (tableNumber*i));
}

// Print characters in a string
var str = "abcdefgh";
for(var i=0; i<str.length; i++){
    console.log(str[i]);
 }