### Conditional Statements

* We use conditional statements to control the flow of execution. 

* Instead of executing every line/statement, we excute them based on a condition.

* Different conditional statement are:

    * if
    * if - else
    * if - else if - else
    * if - else if - - - - - - - - else
    * switch
    * terinary operator


if(<condition>){
   <if block>
}

example:
if(a > b){
   alert(a);
}

-- IF ELSE

if(<condition>){
   <if block>
}
else {
    <else block>
}

if(number % 2 == 0 ){
    alert(number + " is even");
}
else {
    alert(number + " is odd");
}

--- IF ELSE IF

if(<condition1>){
   <if block>
}
else if(<condition2>){
    <else block>
}
else {
    <else block>
}


if(a > b){
    alert(a);
}
else if(a < b){
    alert(b);
}
else {
    alert("a & b are equal");
}



--- Switch

switch(<condition>) {
    case <one> : 
        break;
    case <two> : 
        break;
    default:   
}


var color = prompt("Enter ur favourite color");

switch(color) {
    case "white" : 
        alert("Ur a peaceful person");
        break;

    case "red" : 
        alert("Ur a passionate person");
        break;

    default:
        alert("I dont know ur mood");
}



### Terinary Operator

* This is shorthand notation of conditional statement.

    condition ? positive case : negitive case;

    (1 == 1) ? alert("Its 1") : alert("Its not 1");