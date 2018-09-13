function appendString(str){
    return "this is " + str + " 2015";
}


var x = document.getElementById("username");
var newStr = x.value;

var y = $("#username");
var jQueryStr = y.attr("value");

alert(appendString(newStr));
alert(appendString(jQueryStr));