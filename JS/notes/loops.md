# loops

* we use loops to optimize repetitve code at a single place.
* There are  different kinds of loops, like:

    for, while, do-while

## FOR Loop

Syntax:

    for(<declaration>: <condition>: <increment/decrement>) {
        <for block>
    }

Example:

    for(var i=0; i < 10; i++){
        console.log(i);
    }

## WHILE Loop

* Its same as for loop, but it will have only conditional statement in the while. 

* declaration and incerement/decrement should be done by ourself.

Syntax:

    <declaration>
    while(<condition>) {
        <while block>
         <increment/decrement>
    }

Example:
    var i=0;
    while( i < 10){
        console.log(i);
        i++;
    }


    

    <declaration>
    do {
        <do-while block>
        <increment/decrement>
    }while(<condition>)