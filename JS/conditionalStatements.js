var haveDegree = true; 
var haveTalent = true;
var haveRecommendation = true;


//IF-ELSE-IF
if(haveDegree){
    console.log("get Job");
}
else if(haveTalent){
    console.log("get job, but income varies");
}
else if(haveRecommendation) {
    console.log("get job and more salary")
}
else {
    console.log("no job");
}

// SWITCH
var color = "yellow";
switch(color){
    case "red": 
        console.log("Im Red");
        break;
    case "blue":
        console.log("Im Blue");
        break;
    case "green":
        console.log("Im Green");
        break;
    default:
        console.log("I dont know this color");
}


// Ternary
var rains = true;
rains ? console.log("No Class") : console.log("Class");


var rains = false;
var haveRainCoat = true;
rains ? console.log("No Class") : (haveRainCoat ? console.log("Come to class") : console.log("U will miss something imp"));


//Confirm
var haveDegree = confirm("Have Degree?");
if(haveDegree){
    console.log("get Job");
}
else {
    console.log("Else block");
}